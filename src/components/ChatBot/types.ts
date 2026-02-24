export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatBotProps {
  position?: 'bottom-left' | 'bottom-right';
}