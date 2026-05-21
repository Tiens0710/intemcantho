"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Expand, Loader2, Paperclip, Phone, Send, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { searchProducts } from "@/lib/wordpress";
import type { Product } from "@/lib/wordpress";
import { useAppStore } from "@/lib/store";

type Message = {
  id: string;
  type: "user" | "assistant";
  content: string;
  products?: Product[];
};

const BRAND_ORANGE = "#E6792A";

function formatPrice(price: string) {
  const numericPrice = Number(price);

  if (Number.isFinite(numericPrice) && numericPrice > 0) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      maximumFractionDigits: 0,
    }).format(numericPrice);
  }

  return price;
}

function BotAvatar() {
  return (
    <div className="chatbot-avatar-glow flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E6792A]/24 bg-white/76 p-1.5 shadow-[0_10px_24px_rgba(230,121,42,0.28)] backdrop-blur-xl">
      <img src="/logo.png" alt="" aria-hidden="true" className="h-full w-full object-contain" />
    </div>
  );
}

export default function ChatSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { persona } = useAppStore();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 160);
    return () => window.clearTimeout(focusTimer);
  }, [isOpen]);

  const runSearch = async (term: string) => {
    const cleanTerm = term.trim();
    if (!cleanTerm || isLoading) return;

    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        type: "user",
        content: cleanTerm,
      },
    ]);
    setQuery("");
    setIsLoading(true);

    try {
      const results = await searchProducts(cleanTerm, persona);

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          type: "assistant",
          content:
            results.length > 0
              ? `Mình tìm thấy ${results.length} sản phẩm phù hợp. Bạn xem nhanh vài lựa chọn bên dưới nhé.`
              : "Mình chưa tìm thấy sản phẩm thật khớp. Bạn mô tả thêm chất liệu, kích thước hoặc số lượng cần in nhé.",
          products: results.length > 0 ? results.slice(0, 3) : undefined,
        },
      ]);
    } catch (error) {
      console.error("Chat search error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-error-${Date.now()}`,
          type: "assistant",
          content: "Hiện tại mình chưa tìm được dữ liệu. Bạn thử lại sau ít phút hoặc gọi trực tiếp để được tư vấn nhanh nhé.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void runSearch(query);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[90] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            key="chat-panel"
            initial={{ opacity: 0, y: 22, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 22, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className={`mb-4 flex origin-bottom-right flex-col overflow-hidden rounded-[24px] border bg-white/58 text-[#4A3323] shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-[34px] ${
              isExpanded
                ? "h-[calc(100vh-3rem)] w-[calc(100vw-2.5rem)] max-w-[620px]"
                : "h-[min(76vh,620px)] w-[calc(100vw-2rem)] max-w-[390px]"
            }`}
            style={{
              borderColor: "rgba(230, 121, 42, 0.42)",
              boxShadow: "0 24px 70px rgba(100,55,18,0.12), 0 4px 22px rgba(230,121,42,0.18), inset 0 1px 0 rgba(255,255,255,0.84)",
            }}
            aria-label="Chatbot Intem Cần Thơ"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(230,121,42,0.15),rgba(255,255,255,0.46)_30%,rgba(255,247,240,0.42)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-white/12" />
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/90" />

            <header className="relative z-10 flex items-center justify-between border-b border-[#E6792A]/22 bg-[#FFF4EA]/44 px-5 py-4 backdrop-blur-[28px]">
              <div className="flex min-w-0 items-center gap-3">
                <BotAvatar />
                <div className="min-w-0">
                  <div className="truncate text-[17px] font-extrabold leading-tight text-[#7A461F]">Intem Cần Thơ</div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="chatbot-status-dot h-2.5 w-2.5 rounded-full bg-[#20C66C] shadow-[0_0_12px_rgba(32,198,108,0.5)]" />
                    <p className="truncate text-[13px] font-bold text-[#65806C]">Đang hoạt động</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsExpanded((value) => !value)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E6792A]/18 bg-white/46 text-[#9A5B24] backdrop-blur-xl transition hover:border-[#E6792A]/45 hover:bg-[#FFF0E4]/72 hover:text-[#E6792A]"
                  aria-label={isExpanded ? "Thu nhỏ chatbot" : "Mở rộng chatbot"}
                >
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#E6792A]/18 bg-white/46 text-[#9A5B24] backdrop-blur-xl transition hover:border-[#E6792A]/45 hover:bg-[#FFF0E4]/72 hover:text-[#E6792A]"
                  aria-label="Đóng chatbot"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </header>

            <div className="relative z-10 flex-1 overflow-y-auto px-5 py-5">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.08, duration: 0.28, ease: "easeOut" }}
                  className="flex items-start gap-3"
                >
                  <BotAvatar />
                  <div className="max-w-[82%] rounded-[18px] rounded-tl-md border border-[#E6792A]/22 bg-white/56 px-4 py-3 text-[15px] font-bold leading-7 text-[#4F637A] shadow-[0_10px_24px_rgba(154,91,36,0.08)] backdrop-blur-[28px]">
                    <p>Xin chào! Tôi là Ngân đến từ Intem Cần Thơ. Hôm nay tôi có thể giúp gì cho bạn?</p>
                    <p className="mt-2 text-right text-xs font-bold text-[#8A98AA]">08:42 AM</p>
                  </div>
                </motion.div>

                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className={`flex items-start gap-3 ${message.type === "user" ? "justify-end" : ""}`}
                  >
                    {message.type === "assistant" && <BotAvatar />}
                    <div
                      className={`max-w-[82%] rounded-[18px] px-4 py-3 text-sm font-semibold leading-6 shadow-[0_10px_24px_rgba(154,91,36,0.08)] ${
                        message.type === "user"
                          ? "rounded-tr-md bg-[#E6792A] text-white"
                          : "rounded-tl-md border border-[#E6792A]/22 bg-white/56 text-[#4F637A] backdrop-blur-[28px]"
                      }`}
                    >
                      <p>{message.content}</p>
                      {message.products && (
                        <div className="mt-3 space-y-2">
                          {message.products.map((product) => (
                            <a
                              key={product.id}
                              href={`/san-pham/${product.id}`}
                              className="flex gap-3 rounded-2xl border border-[#E6792A]/20 bg-[#FFF7F0] p-2.5 transition hover:border-[#E6792A]/60 hover:bg-white"
                            >
                              <img
                                src={product.image}
                                alt={product.title}
                                className="h-14 w-14 shrink-0 rounded-xl object-cover"
                                loading="lazy"
                              />
                              <span className="min-w-0">
                                <span className="line-clamp-2 block text-sm font-extrabold leading-5 text-[#7A461F]">
                                  {product.title}
                                </span>
                                <span className="mt-1 block text-xs font-extrabold text-[#E6792A]">
                                  {formatPrice(product.price)}
                                </span>
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <div className="flex items-start gap-3">
                    <BotAvatar />
                    <div className="flex items-center gap-2 rounded-[18px] rounded-tl-md border border-[#E6792A]/22 bg-white/56 px-4 py-3 text-sm font-bold text-[#4F637A] shadow-[0_10px_24px_rgba(154,91,36,0.08)] backdrop-blur-[28px]">
                      <Loader2 className="h-4 w-4 animate-spin text-[#E6792A]" aria-hidden="true" />
                      Đang tìm câu trả lời...
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 border-t border-[#E6792A]/22 bg-[#FFF4EA]/44 px-4 pb-3 pt-4 backdrop-blur-[28px] sm:px-5">
              <div className="grid grid-cols-[44px_minmax(0,1fr)_44px] items-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E6792A]/16 bg-white/50 text-[#A7774E] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-xl transition hover:border-[#E6792A]/45 hover:bg-[#FFF0E4]/72 hover:text-[#E6792A]"
                  aria-label="Đính kèm file"
                >
                  <Paperclip className="h-5 w-5" aria-hidden="true" />
                </button>
                <div className="min-w-0 rounded-[16px] border border-[#E6792A]/24 bg-white/78 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.82)] backdrop-blur-xl transition focus-within:border-[#E6792A] focus-within:ring-4 focus-within:ring-[#E6792A]/14">
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Nhập tin nhắn..."
                    disabled={isLoading}
                    className="chatbot-message-input block h-11 w-full appearance-none bg-transparent text-sm font-bold text-[#4A3323] outline-none placeholder:text-[#8290A3] disabled:opacity-60"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!query.trim() || isLoading}
                  className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#E6792A] text-white shadow-[0_10px_24px_rgba(230,121,42,0.32)] transition hover:bg-[#F28A3A] disabled:cursor-not-allowed disabled:bg-[#E8D6C4] disabled:shadow-none"
                  aria-label="Gửi tin nhắn"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
              <p className="mt-3 text-center text-xs font-extrabold text-[#9A5B24]/45">Powered by Intem Cần Thơ</p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setIsOpen(true)}
          className="chatbot-launcher-pulse ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E6792A] text-white shadow-[0_12px_28px_rgba(230,121,42,0.4)] transition hover:bg-[#F28A3A]"
          aria-label="Mở chatbot"
        >
          <Phone className="h-6 w-6" aria-hidden="true" />
        </motion.button>
      )}
    </div>
  );
}
