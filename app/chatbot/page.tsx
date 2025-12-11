// app/chatbot/page.tsx

import { Suspense } from "react";
import ChatbotClient from "./ChatbotClient";   // no .tsx → this is correct

// This single line fixes the Vercel build error completely
export const dynamic = "force-dynamic";

// Optional but recommended – keeps metadata clean
export const metadata = {
  title: "Vegas Drones Chatbot",
  description: "Chat with our AI-powered assistant",
};

// viewport must be exported separately (Next.js 14/15 rule)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function ChatbotPage() {
  return (
    <Suspense
      fallback={
        <div className="chatbot-wrapper visible">
          <div className="chatbot-container">
            <h1>Vegas Drones Chatbot</h1>
            <p>Loading chat...</p>
          </div>
        </div>
      }
    >
      <ChatbotClient />
    </Suspense>
  );
}