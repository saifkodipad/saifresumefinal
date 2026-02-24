import React from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';

interface ChatBotButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const ChatBotButton: React.FC<ChatBotButtonProps> = ({ onClick, isOpen }) => {
  if (isOpen) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 left-4 group z-50"
      aria-label="Open chat assistant"
    >
      <div className="relative">
        {/* Pulsing background */}
        <div className="absolute inset-0 bg-pink-400 rounded-full animate-ping opacity-20"></div>
        
        {/* Main button */}
        <div className="relative bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center gap-2">
          <MessageCircle size={24} />
          <Sparkles size={16} className="absolute -top-1 -right-1 text-yellow-300" />
        </div>
        
        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        
        {/* Tooltip */}
        <div className="absolute left-16 bottom-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Ask me about Saif! 🌸
          <div className="absolute left-[-6px] top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
        </div>
      </div>
    </button>
  );
};

export default ChatBotButton;