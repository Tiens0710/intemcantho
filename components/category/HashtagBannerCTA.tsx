"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HashtagBannerCTA() {
  return (
    <section className="bg-white py-4">
      <div className="container mx-auto max-w-[1200px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl shadow-xl"
        >
          <Image
            src="/standee/standee_cta.png"
            alt="Hashtag cầm tay CTA"
            width={1200}
            height={520}
            className="block h-auto w-full object-cover"
          />
          <a
            href="https://zalo.me/0985463403"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
            aria-label="Liên hệ Zalo để nhận báo giá hashtag cầm tay"
          >
            <span className="sr-only">Chat Zalo nhận báo giá hashtag cầm tay</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
