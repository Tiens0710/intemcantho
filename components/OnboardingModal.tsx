"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { PersonaType } from "@/lib/wordpress";
import { useAppStore } from "@/lib/store";

const PERSONAS: { id: PersonaType; label: string; description: string; icon: string }[] = [
  {
    id: "cafe-owner",
    label: "Chủ quán nước",
    description: "Tôi chạy một quán cà phê hoặc quán ăn",
    icon: "☕",
  },
  {
    id: "office-worker",
    label: "Dân văn phòng",
    description: "Tôi làm việc trong văn phòng hoặc doanh nghiệp",
    icon: "💼",
  },
  {
    id: "fashion-lover",
    label: "Fashion/Boot Lover",
    description: "Tôi bán quần áo, giày dép hoặc phụ kiện thời trang",
    icon: "👗",
  },
];

export default function OnboardingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState<PersonaType>(null);
  const { persona, hasCompletedOnboarding, setPersona, setOnboardingComplete } =
    useAppStore();

  // Show modal only on first visit
  useEffect(() => {
    if (!hasCompletedOnboarding && !persona) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, [hasCompletedOnboarding, persona]);

  const handleSelectPersona = (personaId: PersonaType) => {
    setSelectedPersona(personaId);
  };

  const handleConfirm = () => {
    if (selectedPersona) {
      setPersona(selectedPersona);
      setOnboardingComplete(true);
      setIsOpen(false);
    }
  };

  const handleSkip = () => {
    setOnboardingComplete(true);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleSkip}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass bg-white/95 rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                  Chào mừng đến với Duky Printing
                </h2>
                <p className="text-lg text-muted-foreground">
                  Hãy cho chúng tôi biết bạn là ai để chúng tôi có thể gợi ý những sản phẩm phù hợp nhất
                </p>
              </motion.div>

              {/* Persona Selection Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {PERSONAS.map((p, index) => (
                  <motion.button
                    key={p.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.1 }}
                    onClick={() => handleSelectPersona(p.id)}
                    className={`relative p-6 rounded-xl transition-all duration-200 border-2 ${
                      selectedPersona === p.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 bg-card hover:bg-secondary"
                    }`}
                  >
                    {/* Selected indicator */}
                    {selectedPersona === p.id && (
                      <motion.div
                        layoutId="selected"
                        className="absolute inset-0 rounded-xl bg-primary/5"
                        transition={{ type: "spring", damping: 25 }}
                      />
                    )}

                    <div className="relative z-10 text-center">
                      <div className="text-4xl mb-3">{p.icon}</div>
                      <h3 className="font-semibold text-foreground mb-2">{p.label}</h3>
                      <p className="text-sm text-muted-foreground">{p.description}</p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex gap-4 flex-col sm:flex-row"
              >
                <button
                  onClick={handleSkip}
                  className="flex-1 px-6 py-3 rounded-lg font-semibold text-foreground bg-secondary hover:bg-secondary/80 transition-colors duration-200"
                >
                  Bỏ qua
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={!selectedPersona}
                  className="btn-neumorph-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Xác nhận
                </button>
              </motion.div>

              {/* Close hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-xs text-muted-foreground mt-6"
              >
                Bạn có thể thay đổi lựa chọn này bất cứ lúc nào
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
