"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ImageItem = {
  src: string;
  alt: string;
};

type Props = {
  title: string;
  subtitle: string;
  images: ImageItem[];
};

export default function CategoryGallery({ title, subtitle, images }: Props) {
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
            {title}
          </h2>
          <p className="text-amber-900/50 font-light max-w-xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {images.map((img, index) => (
            <motion.div
              key={img.src + index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group relative mb-6 overflow-hidden rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10 hover:-translate-y-1"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Image */}
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Caption on hover */}
              <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-black text-white/90 uppercase tracking-[0.15em]">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}