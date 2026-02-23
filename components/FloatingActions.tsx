"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const PHONE = "tel:+923419423283";
const WHATSAPP = "https://wa.me/923419423283";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col gap-3">
      <motion.a
        href={PHONE}
        aria-label="Call Core Coffee"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-coffee-800 text-cream shadow-lg hover:bg-accent hover:text-coffee-950 transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone size={24} />
      </motion.a>
      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Core Coffee"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-500 transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
}
