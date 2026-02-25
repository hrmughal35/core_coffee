"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DURATION_MS = 3800;

export default function CoffeePourIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-coffee-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Coffee pour animation */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] relative">
            {/* Stream of coffee pouring down */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 200 260"
              fill="none"
            >
              <defs>
                <linearGradient id="coffeeStream" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4a3728" />
                  <stop offset="50%" stopColor="#5c4033" />
                  <stop offset="100%" stopColor="#6f4e37" />
                </linearGradient>
                <linearGradient id="coffeeFill" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#3d2819" />
                  <stop offset="100%" stopColor="#5c4033" />
                </linearGradient>
                <filter id="streamShadow">
                  <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Mug body */}
              <path
                d="M 40 100 L 40 220 Q 40 250 70 250 L 130 250 Q 160 250 160 220 L 160 100 L 140 80 L 60 80 Z"
                fill="#2b1910"
                stroke="#d4a054"
                strokeWidth="2"
                opacity="0.9"
              />
              <ellipse cx="100" cy="100" rx="50" ry="12" fill="none" stroke="#d4a054" strokeWidth="2" opacity="0.8" />

              {/* Pouring stream - animated */}
              <path
                className="pour-stream"
                d="M 95 0 L 98 0 Q 105 80 100 95 Q 98 110 100 120 L 100 125"
                fill="none"
                stroke="url(#coffeeStream)"
                strokeWidth="12"
                strokeLinecap="round"
                filter="url(#streamShadow)"
                style={{
                  strokeDasharray: 200,
                  strokeDashoffset: 200,
                  animation: "pour-stream 1.2s ease-in forwards",
                }}
              />

              {/* Coffee filling inside mug - liquid level rises */}
              <rect
                x="58"
                y="125"
                width="84"
                height="95"
                rx="4"
                fill="url(#coffeeFill)"
                opacity="0.95"
                style={{
                  transformOrigin: "50% 100%",
                  animation: "fill-cup 2s ease-out 1s forwards",
                }}
              />
            </svg>

            {/* "Core Coffee" text below */}
            <motion.p
              className="absolute bottom-0 left-0 right-0 text-center font-display text-xl sm:text-2xl font-semibold text-accent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              Core Coffee
            </motion.p>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
