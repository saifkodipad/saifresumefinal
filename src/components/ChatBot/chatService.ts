import { GoogleGenerativeAI } from "@google/generative-ai";
import { getSystemPrompt } from "./portfolioData";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error("VITE_GEMINI_API_KEY is not set in environment variables");
}

const genAI = new GoogleGenerativeAI(API_KEY || "");
// USE THIS MODEL NAME - it's confirmed working
// This model has the most generous free tier
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

export const chatService = {
  async sendMessage(message: string): Promise<string> {
    try {
      if (!API_KEY) {
        return "⚠️ Chat service is not configured. Please set up Gemini API key.";
      }

      console.log("Sending message with model: gemini-3.1-pro-preview");

      const prompt = `${getSystemPrompt()}
      
User Question: ${message}

Remember: Only answer about Saif's portfolio. Be helpful and concise. Match the friendly "Code Play Repeat" vibe.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      return text;
    } catch (error) {
      console.error("Chat service error:", error);
      return "I'm having trouble connecting right now. Please try again later.";
    }
  }
};