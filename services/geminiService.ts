import { GoogleGenAI } from "@google/genai";

// Fix: Per guidelines, assume API_KEY is always available from process.env and initialize the client directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const SYSTEM_INSTRUCTION = `You are a helpful AI assistant for 'EngiConnect', a premier engineering and contracting firm. 
Your role is to answer user questions about our services, projects, and our innovative platform.
Be professional, concise, and friendly.

Our services include: Architectural Design, Civil & Structural Engineering, Project Management, Engineering Consulting, Quality Assurance, and Contractor Sourcing.
Our platform is a digital environment that connects engineers, contractors, and project owners. It facilitates project exchange, registration of professionals, and communication.
Do not answer questions that are unrelated to EngiConnect or the engineering/construction industry. If asked an off-topic question, politely state that you can only answer questions related to the company and its services.`;

export const getBotResponse = async (userMessage: string): Promise<string> => {
  // Fix: Removed redundant API key check as per guidelines.
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Error fetching bot response:", error);
    return "Sorry, I'm having trouble connecting to my systems right now. Please try again later.";
  }
};
