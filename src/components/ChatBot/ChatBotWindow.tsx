import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Minimize2, Maximize2, Bot } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { Message } from './types';
import { chatService } from './chatService';

interface ChatBotWindowProps {
  onClose: () => void;
  isOpen: boolean;
}

const ChatBotWindow: React.FC<ChatBotWindowProps> = ({ onClose, isOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "🌸 Hi! I'm Saif's virtual assistant. Ask me anything about his projects, skills, or experience! Code. Play. Repeat. 🚀",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await chatService.sendMessage(inputMessage);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed bottom-20 left-4 w-96 bg-gradient-to-b from-white/95 to-pink-50/95 backdrop-blur-xl rounded-lg shadow-2xl transition-all duration-300 ${
      isMinimized ? 'h-14' : 'h-[500px]'
    } flex flex-col border border-pink-200/50`}
    style={{ boxShadow: '0 20px 60px rgba(255,182,193,0.3)' }}>
      
      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bot size={20} />
          <h3 className="font-semibold">Saif's Assistant</h3>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-pink-500 rounded transition"
          >
            {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-pink-500 rounded transition"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-pink-50/30">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white/90 backdrop-blur-sm border border-pink-200 rounded-2xl rounded-bl-none px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-pink-200/50 bg-white/50 backdrop-blur-sm rounded-b-lg">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Saif's work..."
                className="flex-1 px-4 py-2 bg-white/90 border border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputMessage.trim()}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full hover:from-pink-600 hover:to-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                <Send size={18} />
              </button>
            </div>
            
            {/* Quick suggestion chips */}
            <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
              <button
                onClick={() => setInputMessage("What projects has Saif built?")}
                className="text-xs bg-white/80 border border-pink-200 rounded-full px-3 py-1 text-pink-600 hover:bg-pink-100 whitespace-nowrap"
              >
                Projects
              </button>
              <button
                onClick={() => setInputMessage("What are Saif's skills?")}
                className="text-xs bg-white/80 border border-pink-200 rounded-full px-3 py-1 text-pink-600 hover:bg-pink-100 whitespace-nowrap"
              >
                Skills
              </button>
              <button
                onClick={() => setInputMessage("Tell me about Saif's experience")}
                className="text-xs bg-white/80 border border-pink-200 rounded-full px-3 py-1 text-pink-600 hover:bg-pink-100 whitespace-nowrap"
              >
                Experience
              </button>
              <button
                onClick={() => setInputMessage("How can I contact Saif?")}
                className="text-xs bg-white/80 border border-pink-200 rounded-full px-3 py-1 text-pink-600 hover:bg-pink-100 whitespace-nowrap"
              >
                Contact
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBotWindow;