"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

// Opens in the morning (9 AM), closes at 2 AM. Closed 2 AM – 9 AM.
function getOpenStatus() {
  const now = new Date();
  const hour = now.getHours();
  const isOpen = hour >= 9 || hour < 2;
  return { isOpen };
}

export default function OpenNowBadge() {
  const { isOpen } = getOpenStatus();

  return (
    <motion.div
      className="fixed bottom-6 left-4 sm:left-6 z-40 flex items-center gap-2 px-3 py-2 rounded-full shadow-lg text-sm font-medium"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      style={{
        backgroundColor: isOpen ? "#166534" : "#991b1b",
        color: "white",
      }}
    >
      <span
        className="w-2 h-2 rounded-full bg-current animate-pulse"
        style={{ opacity: isOpen ? 1 : 0.6 }}
      />
      <span>{isOpen ? "Open Now" : "Closed · Opens 12 AM"}</span>
      <Clock className="w-4 h-4 opacity-80" />
    </motion.div>
  );
}
