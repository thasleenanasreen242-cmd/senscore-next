"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I’m Aile, SensCore AI Assistant. Ask me about our products, services, applications, or industries. If you have a specification or application requirement, I can also help you find the most relevant solution." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(function () {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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
    <div className="fixed bottom-6 right-24 z-50 flex flex-col items-end gap-3 max-sm:right-4">
      {open && (
        <div id="senscore-chat-panel" role="dialog" aria-modal="false" aria-labelledby="senscore-chat-title" className="flex h-[520px] w-[360px] flex-col overflow-hidden rounded-[28px] border border-line bg-surface shadow-2xl shadow-black/20 sm:w-[390px]">
          <div className="relative overflow-hidden border-b border-line bg-void/70 px-5 py-4">
            <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full bg-teal/10 blur-2xl" />
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30">
                  <Bot size={22} aria-hidden="true" />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-surface bg-emerald-400" />
                </div>
                <div>
                  <div id="senscore-chat-title" className="font-display text-sm font-semibold text-ink">Aile</div>
                  <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-mute"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online · SensCore AI Assistant</div>
                </div>
              </div>
              <button onClick={function () { setOpen(false); }} className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/70 transition hover:bg-void" aria-label="Close chat"><X size={17} className="text-mute hover:text-ink" aria-hidden="true" /></button>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-surface px-4 py-5" role="log" aria-live="polite" aria-label="Chat messages">
            {messages.map(function (m, i) {
              return (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex items-start gap-2.5"}>
                  {m.role === "assistant" && <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-sm"><Sparkles size={15} aria-hidden="true" /></div>}
                  <div className={m.role === "user" ? "max-w-[82%] rounded-[20px] rounded-br-md bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 px-4 py-2.5 text-sm leading-6 text-white shadow-sm" : "max-w-[82%] rounded-[20px] rounded-bl-md border border-line bg-void/50 px-4 py-2.5 text-sm leading-6 text-ink"}>{m.content}</div>
                </div>
              );
            })}
            {loading && <div className="flex items-start gap-2.5" role="status" aria-label="Assistant is typing"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-white"><Sparkles size={15} aria-hidden="true" /></div><div className="rounded-[20px] rounded-bl-md border border-line bg-void/50 px-4 py-2.5 text-sm text-faint">Thinking...</div></div>}
          </div>

          <div className="border-t border-line bg-surface p-3.5">
            <div className="flex items-center gap-2 rounded-full border border-line bg-void/40 p-1.5 focus-within:border-blue-400/50">
              <label htmlFor="senscore-chat-input" className="sr-only">Message</label>
              <input id="senscore-chat-input" value={input} onChange={function (e) { setInput(e.target.value); }} onKeyDown={handleKeyDown} placeholder="Ask Aile about SensCore..." className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-ink placeholder:text-faint focus:outline-none" />
              <button onClick={sendMessage} disabled={loading} className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 text-white shadow-md shadow-blue-500/25 transition hover:scale-105 disabled:opacity-50" aria-label="Send message"><Send size={15} aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      )}

      <button onClick={function () { setOpen(!open); }} className="group flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-700 text-white shadow-xl shadow-blue-500/35 transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-blue-500/45 max-sm:h-14 max-sm:w-14" aria-label={open ? "Close Aile" : "Open Aile"} aria-expanded={open} aria-controls="senscore-chat-panel">
        {open ? <X size={23} aria-hidden="true" /> : <Bot size={25} aria-hidden="true" className="transition-transform group-hover:scale-110" />}
      </button>
    </div>
  );
}
