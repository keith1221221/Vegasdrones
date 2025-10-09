"use client";

import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import "../chatbot.css"; // make sure src/app/chatbot.css exists

function ChatbotContent() {
  const searchParams = useSearchParams();
  const initialMessage = searchParams.get("query") || "";
  const [message, setMessage] = useState(initialMessage);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Animation trigger on mount
  useEffect(() => {
    setIsVisible(true);
    // Check for saved theme preference first, then system preference
    const savedTheme = localStorage.getItem('chatbot-theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Detect system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('chatbot-theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const suggestedQuestions = [
    "How much for 50 drones?",
    "What is the travel fee for 100 miles?",
    "How do I book a drone show?",
    "Are your drones FAA-certified?",
  ];

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | string
  ) => {
    if (typeof e !== "string") e.preventDefault();
    const inputMessage = typeof e === "string" ? e : message;

    if (!inputMessage.trim()) return;

    setIsLoading(true);
    setError("");
    setResponse(""); // Clear previous response

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: inputMessage }],
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Simulate typing effect
        const reply = data.reply ?? "";
        setResponse("");
        
        // Type out the response character by character
        for (let i = 0; i <= reply.length; i++) {
          setTimeout(() => {
            setResponse(reply.substring(0, i));
          }, i * 20);
        }

        if (typeof window !== "undefined") {
          window.parent.postMessage("responding", "*");
          setTimeout(
            () => window.parent.postMessage("idle", "*"),
            2000
          );
        }
      } else {
        setError(`Error: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      setError("Failed to fetch response. Please try again.");
    } finally {
      setIsLoading(false);
      if (typeof e === "string") {
        setMessage(""); // Clear input only if it was a suggested question
      }
    }
  };

  return (
    <div className={`chatbot-container ${isVisible ? 'visible' : ''}`}>
      {/* Back to Home Button */}
      <Link 
        href="/"
        className="back-button"
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          color: '#00ffcc',
          textDecoration: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          zIndex: 1000
        }}
      >
        ← Back to Home
      </Link>
      
      {/* Theme Toggle Button */}
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5M17.6859 17.69L18.5 18.5M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      
      <div className="drone-icon">
        <img src="/alienhead1.png" alt="Vegas Drones" className="logo-icon" />
      </div>
      
      <h1>Vegas Drones Chatbot</h1>
      <p>Ask about our spectacular drone light shows!</p>

      <div className="suggested-questions">
        {suggestedQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => handleSubmit(q)}
            disabled={isLoading}
            className="suggested-button"
            style={{ animationDelay: `${0.1 + i * 0.1}s` }}
          >
            {q}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your question..."
          disabled={isLoading}
          className={isLoading ? 'loading-pulse' : ''}
        />
        <button 
          type="submit" 
          disabled={isLoading || !message.trim()}
          className={isLoading ? 'loading-pulse' : ''}
        >
          {isLoading ? (
            <div className="loading-spinner">
              <svg width="20" height="20" viewBox="0 0 50 50">
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeDasharray="31.416"
                  strokeDashoffset="31.416"
                  className="spinner-circle"
                />
              </svg>
            </div>
          ) : (
            "Send"
          )}
        </button>
      </form>

      {response && (
        <div className="response">
          <div className="typing-indicator" style={{ display: isLoading ? 'block' : 'none' }}>
            <span></span><span></span><span></span>
          </div>
          <p>{response}</p>
        </div>
      )}
      
      {error && (
        <div className="error">
          <p>⚠️ {error}</p>
        </div>
      )}
    </div>
  );
}

export default function ChatbotPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatbotContent />
    </Suspense>
  );
}