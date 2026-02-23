"use client";

import { motion } from "framer-motion";

const ABOUT_IMG = "/images/about.svg";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-coffee-950/75" aria-hidden />
          <img
            src={ABOUT_IMG}
            alt="Core Coffee interior — DHA Phase 8"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-accent mb-3">
            Our story
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 drop-shadow-lg">
            About Core Coffee
          </h1>
          <p className="text-white/95 text-lg max-w-2xl mx-auto">
            Where great coffee meets a cozy space — right in the heart of DHA
            Phase 8.
          </p>
        </motion.div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            className="space-y-8 text-coffee-700 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Core Coffee started with a simple idea: serve excellent coffee in a
              place that feels like a second home. We’re in Phase 8 (X), Park
              View, 23 CCA, DHA Lahore — a spot that’s become a go-to for
              students, professionals, and anyone who loves a good cup and a
              relaxed vibe.
            </p>
            <p>
              We focus on <strong className="text-coffee-900">quality coffee</strong> — from
              classic espressos to cold brews and signature drinks — and a{" "}
              <strong className="text-coffee-900">chill environment</strong> where
              you can work, catch up with friends, or just unwind. Whether
              you’re here for a quick takeaway or a long sit-down, we’ve got you
              covered.
            </p>
            <p>
              We know Lahore doesn’t sleep early. That’s why we’re{" "}
              <strong className="text-coffee-900">open till 2 AM</strong> every
              day — so you can enjoy your favourite drinks and snacks whenever
              you need them. Dine in, take away, or order through Foodpanda.
              We’re here for you.
            </p>
          </motion.div>

          <motion.div
            className="mt-16 grid sm:grid-cols-3 gap-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            {[
              "Quality coffee, every cup",
              "Work, hangouts & late nights",
              "Dine-in · Takeaway · Delivery",
            ].map((line) => (
              <motion.div
                key={line}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="px-6 py-5 rounded-2xl bg-white border-2 border-coffee-100 text-coffee-700 font-medium shadow-lg shadow-coffee-900/5"
              >
                {line}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
