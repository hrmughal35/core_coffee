"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ayesha K.",
    rating: 5,
    text: "Best coffee in DHA! The vibe is so cozy and they're open till 2 AM — perfect for late-night work sessions.",
  },
  {
    name: "Hassan R.",
    rating: 5,
    text: "Core Special is a must-try. Great place to hang out with friends. Staff is super friendly.",
  },
  {
    name: "Sana T.",
    rating: 4,
    text: "Love the cold brew and the seating. Only wish they had more dessert options. Still a favourite spot.",
  },
  {
    name: "Omar F.",
    rating: 5,
    text: "Consistently good coffee and chill environment. My go-to café in Phase 8.",
  },
  {
    name: "Zainab M.",
    rating: 5,
    text: "Open late is a game-changer. Quality coffee and snacks. Highly recommend!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-accent">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < count ? "fill-current" : "opacity-30"}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-14">
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 text-accent font-semibold mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Star className="w-5 h-5 fill-current" /> 4.7 · 31 Google reviews
          </motion.div>
          <motion.p
            className="font-display text-sm uppercase tracking-[0.3em] text-accent mb-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Testimonials
          </motion.p>
          <motion.h1
            className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            What Our Customers Say
          </motion.h1>
          <motion.p
            className="text-coffee-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Real experiences from people who love Core Coffee.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.article
                key={review.name}
                className="group bg-white rounded-3xl border-2 border-coffee-100 p-8 shadow-xl shadow-coffee-900/5 hover:border-accent/20 transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Quote className="w-12 h-12 text-accent/30 mb-4 group-hover:text-accent/50 transition-colors" />
                <Stars count={review.rating} />
                <p className="text-coffee-700 mt-4 mb-5 leading-relaxed text-lg">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-coffee-600 font-semibold">— {review.name}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
