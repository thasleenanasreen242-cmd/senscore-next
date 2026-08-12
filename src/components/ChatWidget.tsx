"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm the SensCore assistant. Ask me about our products, services, or industries we serve." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(function () {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  async function sendMessage() {
    var text = input.trim();
    if (!text || loading) return;

    var newMessages: Message[] = messages.concat([{ role: "user", content: text }]);
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      var res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      var data = await res.json();
      var reply = data.reply || "Sorry, something went wrong. Please try again.";
      setMessages(newMessages.concat([{ role: "assistant", content: reply }]));
    } catch (err) {
      setMessages(newMessages.concat([{ role: "assistant", content: "Sorry, something went wrong. Please try again." }]));
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="fixed bottom-6 right-24 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          id="senscore-chat-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="senscore-chat-title"
          className="flex h-[480px] w-[340px] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl sm:w-[380px]"
        >
          <div className="flex items-center justify-between border-b border-line bg-void/60 px-4 py-3">
            <span id="senscore-chat-title" className="font-display text-sm font-semibold text-ink">SensCore Assistant</span>
            <button onClick={function () { setOpen(false); }} aria-label="Close chat">
              <X size={18} className="text-mute hover:text-ink" aria-hidden="true" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
            role="log"
            aria-live="polite"
            aria-label="Chat messages"
          >
            {messages.map(function (m, i) {
              return (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-br-sm bg-teal/20 px-4 py-2 text-sm text-ink"
                        : "max-w-[85%] rounded-2xl rounded-bl-sm bg-void/60 px-4 py-2 text-sm text-mute"
                    }
                  >
                    {m.content}
                  </div>
                </div>
              );
            })}
            {loading && (
              <div className="flex justify-start" role="status" aria-label="Assistant is typing">
                <div className="rounded-2xl rounded-bl-sm bg-void/60 px-4 py-2 text-sm text-faint">
                  Typing...
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-line p-3">
            <label htmlFor="senscore-chat-input" className="sr-only">Message</label>
            <input
              id="senscore-chat-input"
              value={input}
              onChange={function (e) { setInput(e.target.value); }}
              onKeyDown={handleKeyDown}
              placeholder="Ask about our products..."
              className="flex-1 rounded-full border border-line bg-void/40 px-4 py-2 text-sm text-ink placeholder:text-faint focus:outline-none focus:border-teal/40"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal text-void disabled:opacity-50"
              aria-label="Send message"
            >
              <Send size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={function () { setOpen(!open); }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-void shadow-lg shadow-teal/30 transition-transform hover:scale-105"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        aria-controls="senscore-chat-panel"
      >
        {open ? <X size={22} aria-hidden="true" /> : <Bot size={22} aria-hidden="true" />}
      </button>
    </div>
  );
}
