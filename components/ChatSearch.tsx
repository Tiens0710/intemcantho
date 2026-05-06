"use client";

import { motion } from "framer-motion";
import { Loader2, Search, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { searchProducts, Product } from "@/lib/wordpress";
import { useAppStore } from "@/lib/store";

interface Message {
  id: string;
  type: "user" | "assistant";
  content: string;
  products?: Product[];
}

export default function ChatSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { persona } = useAppStore();

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuery("");
    setIsLoading(true);

    try {
      // Search products based on query
      const results = await searchProducts(query, persona);

      // Generate assistant response
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content:
          results.length > 0
            ? `Tôi tìm thấy ${results.length} sản phẩm phù hợp với yêu cầu của bạn:`
            : "Xin lỗi, tôi không tìm thấy sản phẩm nào phù hợp. Vui lòng thử tìm kiếm với từ khóa khác.",
        products: results.length > 0 ? results : undefined,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Search error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "assistant",
        content: "Có lỗi xảy ra. Vui lòng thử lại.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Search Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-20 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/70 text-white shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        >
          <Search className="w-6 h-6" />
        </motion.button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-8 right-8 z-20 w-96 max-w-[calc(100vw-2rem)] h-[32rem] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-4 flex items-center justify-between">
            <h3 className="font-semibold">Tìm kiếm sản phẩm</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center text-muted-foreground"
              >
                <Search className="w-12 h-12 mb-3 opacity-30" />
                <p className="text-sm">Hãy nhập câu hỏi của bạn</p>
                <p className="text-xs mt-2 opacity-70">Ví dụ: Tôi cần tem nhãn cho sản phẩm</p>
              </motion.div>
            )}

            {messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "bg-secondary text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>

                  {/* Product Results */}
                  {msg.products && msg.products.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {msg.products.slice(0, 3).map((product) => (
                        <div key={product.id} className="bg-white/50 rounded p-2 text-xs text-foreground">
                          <p className="font-semibold">{product.title}</p>
                          <p className="opacity-75">{product.price}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-secondary text-foreground px-4 py-2 rounded-lg rounded-bl-none flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Đang tìm kiếm...</span>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSearch} className="border-t border-border p-4 bg-secondary/30">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Nhập câu hỏi..."
                disabled={isLoading}
                className="flex-1 px-3 py-2 rounded-lg bg-white border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!query.trim() || isLoading}
                className="p-2 rounded-lg bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </>
  );
}
