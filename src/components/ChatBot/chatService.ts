// chatService.ts
import { getSystemPrompt } from "./portfolioData";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;  // Note: GROQ, not GROK

console.log("🔑 API Key check:");
console.log("  - Exists:", !!API_KEY);
console.log("  - Length:", API_KEY?.length || 0);
console.log("  - Starts with gsk_:", API_KEY?.startsWith('gsk_'));
console.log("  - First 5 chars:", API_KEY ? API_KEY.substring(0, 5) + '...' : 'none');

// ✅ CORRECT Groq API endpoint - OpenAI compatible format
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";  // Changed from x.ai

// ✅ Popular Groq models to try (in order of reliability)
const GROQ_MODELS = {
  FAST: "llama-3.1-8b-instant",        // Fastest, good for simple chats
  BALANCED: "llama-3.3-70b-versatile",  // Best quality, slightly slower
  ALTERNATE: "mixtral-8x7b-32768",      // Large context window
  GEMMA: "gemma2-9b-it"                  // Google's Gemma model
};

// Start with the balanced model
const GROQ_MODEL = GROQ_MODELS.BALANCED;

export const chatService = {
  async sendMessage(message: string): Promise<string> {
    try {
      if (!API_KEY) {
        return "⚠️ Chat service is not configured. Please set up Groq API key in your .env file as VITE_GROQ_API_KEY";
      }

      // Verify key format (Groq keys start with 'gsk_')
      if (!API_KEY.startsWith('gsk_')) {
        console.warn("⚠️ Groq API key should start with 'gsk_'");
      }

      console.log(`📤 Sending request to Groq with model: ${GROQ_MODEL}`);

      const requestBody = {
        model: GROQ_MODEL,
        messages: [
          {
            role: "system",
            content: getSystemPrompt()
          },
          {
            role: "user",
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      };

      console.log("Request body:", JSON.stringify(requestBody, null, 2));

      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(requestBody)
      });

      console.log("📥 Response status:", response.status);

      // Get the response text first
      const responseText = await response.text();
      console.log("Raw response:", responseText);

      if (!response.ok) {
        // Try to parse as JSON if possible
        try {
          const errorJson = JSON.parse(responseText);
          console.error("❌ Groq API error details:", errorJson);
          
          // Check for specific error messages
          if (errorJson.error) {
            const errorMsg = errorJson.error.message || errorJson.error;
            console.error("Error message:", errorMsg);
            
            // Handle specific error cases
            if (errorMsg.includes("model")) {
              return `⚠️ Model issue. Try changing the model in chatService.ts. Available models: llama-3.3-70b-versatile, llama-3.1-8b-instant, mixtral-8x7b-32768`;
            }
            if (errorMsg.includes("key") || errorMsg.includes("auth")) {
              return "⚠️ Invalid API key. Please check your Groq API key format (should start with 'gsk_')";
            }
          }
        } catch {
          console.error("Non-JSON error response:", responseText);
        }
        
        throw new Error(`API request failed: ${response.status}`);
      }

      // Parse the successful response
      const data = JSON.parse(responseText);
      console.log("✅ Success response:", data);
      
      const responseText_content = data.choices[0]?.message?.content || "";
      return responseText_content;
      
    } catch (error) {
      console.error("❌ Chat service error:", error);
      return "I'm having trouble connecting right now. Please try again later.";
    }
  }
};