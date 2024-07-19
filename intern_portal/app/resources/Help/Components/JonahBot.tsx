"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";
interface Message {
  role: "user" | "assistant";
  content: string;
  avatar?: string; // Optional avatar URL
}

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function JonahBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
          avatar: " /Jonah_Icon.png",
        },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, an error occurred." },
      ]);
    }

    setInput("");
  };

  return (
    <div
      className={`flex flex-col h-80 w-full max-w-2xl mx-auto bg-slate-400 ${font.className}`}
    >
      <header className="navbar bg-blue-500 text-primary-content">
        <div className="flex-1">
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src="/Jonah_Icon.png" />
            </div>
          </div>
          <span className="ml-6 text-lg font-bold text-white">
            Jonah Minihan AI
          </span>
        </div>
      </header>

      <main className="flex-grow overflow-auto p-4 h-1/2">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat ${message.role === "user" ? "chat-end" : "chat-start"}`}
            >
              {message.avatar && (
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img alt="Avatar" src={message.avatar} />
                  </div>
                </div>
              )}
              <div className="chat-bubble">{message.content}</div>
            </div>
          ))}
        </div>
      </main>

      <footer className="p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message here..."
            className="input input-bordered flex-grow"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn bg-blue-500 text-white">
            Send
          </button>
        </form>
      </footer>
    </div>
  );
}
