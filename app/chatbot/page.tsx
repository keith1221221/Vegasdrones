"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import "../chatbot.css";

function ChatbotContent() {
  const searchParams = useSearchParams();
  const initialMessage = searchParams.get("query") || "";

  const [message, setMessage] = useState(initialMessage);
  const [chatHistory, setChatHistory] = useState<Array<{ role: string; content: string }>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [threadId, setThreadId] = useState<string | null>(null); // ← This remembers the conversation

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const savedTheme = localStorage.getItem("chatbot-theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatbot-theme", isDarkMode ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTo({
        top: wrapperRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const suggestedQuestions = [
    "How much for 50 drones?",
    "What is the travel fee for 100 miles?",
    "How do I book a drone show?",
    "Are your drones FAA-certified?",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | string) => {
    if (typeof e !== "string") e.preventDefault();
    const inputMessage = typeof e === "string" ? e : message;
    if (!inputMessage.trim() || isLoading) return;

    const userMsg = { role: "user", content: inputMessage };
    setChatHistory((prev) => [...prev, userMsg]);
    setMessage("");
    setHasSubmitted(true);
    setIsLoading(true);
    setError("");

    // Add a placeholder for the assistant reply
    setChatHistory((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...chatHistory, userMsg],
          thread_id: threadId || undefined,
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error("Network response was not ok");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantReply = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        assistantReply += chunk;

        setChatHistory((prev) => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1] = { role: "assistant", content: assistantReply };
          return newHistory;
        });
      }

      // Save the thread ID from the response header for future messages
      const newThreadId = res.headers.get("x-thread-id");
      if (newThreadId) setThreadId(newThreadId);

    } catch (err) {
      setError("Failed to get response. Please try again.");
      setChatHistory((prev) => prev.slice(0, -1)); // Remove empty assistant bubble
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div ref={wrapperRef} className={`chatbot-wrapper ${isVisible ? "visible" : ""}`}>
      <div className={`chatbot-container ${hasSubmitted ? "compact" : ""}`}>
        <Link href="/" className="back-button" style={{ position: "fixed", top: "20px", left: "20px", color: "#00ffcc", textDecoration: "none", fontSize: "16px", fontWeight: "bold", zIndex: 1000 }}>
          ← Back to Home
        </Link>

        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}>
          {isDarkMode ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        <div className="drone-icon">
          <img src="/alienhead1.png" alt="Vegas Drones" className="logo-icon" />
        </div>

        <h1>Vegas Drones Chatbot</h1>
        {!hasSubmitted && <p>Ask about our spectacular drone light shows!</p>}

        {!hasSubmitted && (
          <div className="suggested-questions">
            {suggestedQuestions.map((q, i) => (
              <button key={i} onClick={() => handleSubmit(q)} disabled={isLoading} className="suggested-button" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                {q}
              </button>
            ))}
          </div>
        )}

        {hasSubmitted && chatHistory.length > 0 && (
          <div className="chat-history">
            {chatHistory.map((msg, index) => (
              <div key={index} className={msg.role === "user" ? "user-message" : "assistant-message"}>
                <p>{msg.content || "…"}</p>
              </div>
            ))}
            {isLoading && (
              <div className="assistant-message loading">
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="error">
            <p>⚠️ {error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your question..."
            disabled={isLoading}
            className={isLoading ? "loading-pulse" : ""}
          />
          <button type="submit" disabled={isLoading || !message.trim()} className={isLoading ? "loading-pulse" : ""}>
            {isLoading ? (
              <div className="loading-spinner">
                <svg width="20" height="20" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5" strokeDasharray="31.416" strokeDashoffset="31.416" className="spinner-circle" />
                </svg>
              </div>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function ChatbotPage() {
  return <ChatbotContent />;
}
