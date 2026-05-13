"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Lightbulb, Target, TrendingUp, Briefcase } from "lucide-react";
import Link from "next/link";

type Props = {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
};

export default function CategoryCaseStudy({
  client,
  industry,
  challenge,
  solution,
  result,
  image,
}: Props) {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4">
            Dự Án Tiêu Biểu
          </h2>
          <p className="text-amber-900/50 font-light max-w-xl mx-auto">
            Câu chuyện thành công thực tế từ khách hàng của Intem Cần Thơ
          </p>
        </motion.div>

        {/* Main — 2 columns */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-2xl shadow-amber-900/10">
              <Image
                src={image}
                alt={client}
                width={640}
                height={480}
                className="w-full object-cover"
              />
            </div>

            {/* Client badge — Glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 left-6 z-10 flex items-center gap-3 rounded-xl px-4 py-3 bg-white/60 backdrop-blur-2xl border border-white/80 shadow-xl shadow-amber-900/5"
            >
              <Briefcase className="h-4 w-4 text-amber-800" />
              <div>
                <p className="text-xs font-black text-amber-900">{client}</p>
                <p className="text-[10px] text-amber-900/40 font-medium">{industry}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            {/* Challenge */}
            <div className="group bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-5 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5 hover:-translate-y-1">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-900/5">
                  <Target className="h-3.5 w-3.5 text-amber-800" />
                </div>
                <h3 className="text-xs font-black text-amber-900 uppercase tracking-[0.15em]">Thử Thách</h3>
              </div>
              <p className="text-xs text-amber-900/50 font-medium leading-relaxed">{challenge}</p>
            </div>

            {/* Solution */}
            <div className="group bg-white/60 backdrop-blur-2xl border border-white/80 rounded-2xl p-5 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/5 hover:-translate-y-1">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-900/5">
                  <Lightbulb className="h-3.5 w-3.5 text-amber-800" />
                </div>
                <h3 className="text-xs font-black text-amber-900 uppercase tracking-[0.15em]">Giải Pháp</h3>
              </div>
              <p className="text-xs text-amber-900/50 font-medium leading-relaxed">{solution}</p>
            </div>

            {/* Result */}
            <div className="group bg-gradient-to-br from-amber-900/5 to-white/60 backdrop-blur-2xl border border-amber-900/10 rounded-2xl p-5 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/10 hover:-translate-y-1">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-900/10">
                  <TrendingUp className="h-3.5 w-3.5 text-amber-800" />
                </div>
                <h3 className="text-xs font-black text-amber-900 uppercase tracking-[0.15em]">Kết Quả</h3>
              </div>
              <p className="text-xs text-amber-900/60 font-medium leading-relaxed">{result}</p>
            </div>

            {/* CTA */}
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-amber-800 to-amber-900 shadow-[0_8px_16px_-4px_rgba(120,53,15,0.4)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Bắt đầu dự án của bạn
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}