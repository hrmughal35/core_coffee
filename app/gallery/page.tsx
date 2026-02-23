"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  { src: "/images/gallery-1.svg", alt: "Coffee cup at Core Coffee" },
  { src: "/images/gallery-2.svg", alt: "Café interior" },
  { src: "/images/gallery-3.svg", alt: "Coffee beans" },
  { src: "/images/gallery-4.svg", alt: "Latte art" },
  { src: "/images/gallery-5.svg", alt: "Café seating" },
  { src: "/images/gallery-6.svg", alt: "Cold brew" },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-cream">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-14">
          <motion.p
            className="font-display text-sm uppercase tracking-[0.3em] text-accent mb-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our space
          </motion.p>
          <motion.h1
            className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Gallery
          </motion.h1>
          <motion.p
            className="text-coffee-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Coffee shots and our vibe. Replace these with your own photos in{" "}
            <code className="text-coffee-700 bg-coffee-100 px-1.5 py-0.5 rounded">public/images</code>.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.06 } },
              hidden: {},
            }}
          >
            {images.map((img, index) => (
              <motion.button
                key={img.src}
                type="button"
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                variants={{
                  hidden: { opacity: 0, scale: 0.96 },
                  visible: { opacity: 1, scale: 1 },
                }}
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-coffee-950/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 text-white hover:text-accent transition-colors z-10 rounded-lg hover:bg-white/10"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <motion.div
              className="relative max-w-4xl w-full aspect-video flex items-center justify-center"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
