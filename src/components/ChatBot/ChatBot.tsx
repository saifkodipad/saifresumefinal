import React, { useState, useEffect } from 'react';
import ChatBotButton from './ChatBotButton';
import ChatBotWindow from './ChatBotWindow';
import { ChatBotProps } from './types';

const ChatBot: React.FC<ChatBotProps> = ({ position = 'bottom-left' }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Add position styles if needed
  const positionClasses = {
    'bottom-left': 'left-4',
    'bottom-right': 'right-4'
  };

  return (
    <div className={`fixed bottom-0 ${positionClasses[position]} z-50`}>
      <ChatBotButton onClick={() => setIsOpen(true)} isOpen={isOpen} />
      <ChatBotWindow onClose={() => setIsOpen(false)} isOpen={isOpen} />
    </div>
  );
};

export default ChatBot;