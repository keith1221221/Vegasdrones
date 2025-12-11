// app/chatbot/ChatbotClient.tsx

"use client";

import { useSearchParams } from "next/navigation";
// ↑ This is the hook that was breaking the build

// Put your actual chatbot code here
// Example with a simple message list (replace with your real chatbot UI)

export default function ChatbotClient() {
  const searchParams = useSearchParams();
  // Example: ?ref=homepage
  const ref = searchParams.get("ref");

  return (
    <div className="chatbot-wrapper visible">
      <div className="chatbot-container">
        <h1>Vegas Drones Chatbot</h1>
        {ref && <p className="text-sm text-gray-400">Referral: {ref}</p>}
        
        <div className="mt-8">
          {/* Replace everything below with your real chatbot component */}
          <p className="text-center text-gray-300">
            Your chatbot is ready!
          </p>
          <p className="mt-4 text-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white">
              Start Chatting
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}