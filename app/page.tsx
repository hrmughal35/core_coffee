"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Coffee,
  MapPin,
  Star,
  Clock,
  UtensilsCrossed,
  Sparkles,
  Moon,
} from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import CoffeePourIntro from "@/components/CoffeePourIntro";

const HERO_IMG = "/images/hero.svg";

export default function HomePage() {
  return (
    <>
      {/* Intro: coffee pour animation (plays once when page opens) */}
      <CoffeePourIntro />

      {/* Hero — video background (fallback to image if no video) */}
      <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-coffee-950">
        <HeroVideo />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-coffee-950/70 text-accent text-sm font-semibold backdrop-blur-md border border-accent/40">
              <Star className="w-4 h-4 fill-current" /> 4.7 · 31 reviews
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-coffee-950/80 text-white text-sm backdrop-blur-md border border-white/20">
              <Clock className="w-4 h-4" /> Open Now · Closes 2 AM
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-coffee-950/80 text-white text-sm backdrop-blur-md border border-white/20">
              Rs 1,000 – 2,000 per person
            </span>
          </motion.div>

          <motion.p
            className="font-display text-sm sm:text-base uppercase tracking-[0.35em] text-white mb-4 drop-shadow-hero"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            DHA Phase 8 · Lahore
          </motion.p>
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-5 tracking-tight leading-[1.05] drop-shadow-hero"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Brewed to the Core.
          </motion.h1>
          <motion.p
            className="text-white text-lg sm:text-xl max-w-xl mx-auto mb-12 font-light drop-shadow-hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Premium coffee and a cozy vibe. Work, hang out, or unwind till 2 AM.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Link
              href="/menu"
              className="btn-hero-glow group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-coffee-950 font-semibold hover:bg-accent-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            >
              <UtensilsCrossed className="w-5 h-5" /> View Menu
            </Link>
            <a
              href="https://www.foodpanda.com.pk/restaurant/v6en/core-coffee"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-coffee-950/90 text-white font-semibold hover:bg-coffee-900 transition-all duration-300 border-2 border-white/50 backdrop-blur-md shadow-lg"
            >
              Order Now
            </a>
            <Link
              href="/contact#map"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-coffee-800/80 text-white font-semibold hover:bg-coffee-700 transition-all duration-300 border border-white/20"
            >
              <MapPin className="w-5 h-5" /> Get Directions
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            className="w-8 h-12 rounded-full border-2 border-white/40 flex justify-center pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.span
              className="w-1.5 h-3 bg-white/60 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Bento-style features */}
      <section className="py-20 sm:py-28 bg-cream overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.p
            className="font-display text-sm uppercase tracking-[0.3em] text-accent mb-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Core Coffee
          </motion.p>
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-coffee-900 mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The experience
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.12 } },
              hidden: {},
            }}
          >
            {[
              {
                icon: Coffee,
                title: "Quality Coffee",
                text: "Carefully sourced beans, brewed to perfection every time.",
                className: "md:col-span-1",
              },
              {
                icon: Moon,
                title: "Open Late",
                text: "We close at 2 AM — perfect for night owls and late workers.",
                className: "md:col-span-1",
              },
              {
                icon: MapPin,
                title: "DHA Phase 8",
                text: "Park View, 23 CCA. Easy to find, easy to park.",
                className: "md:col-span-1",
              },
            ].map(({ icon: Icon, title, text, className }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`group p-8 rounded-3xl bg-white border border-coffee-100 shadow-xl shadow-coffee-900/5 hover:shadow-2xl hover:border-accent/30 transition-all duration-300 ${className}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/15 text-accent mb-6 group-hover:bg-accent/25 transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-coffee-800 mb-3">
                  {title}
                </h3>
                <p className="text-coffee-600 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick links strip */}
      <section className="py-16 bg-coffee-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } },
              hidden: {},
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="text-center">
              <Sparkles className="w-8 h-8 text-accent mx-auto mb-2" />
              <Link href="/menu" className="font-semibold hover:text-accent transition-colors">
                Menu
              </Link>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="text-center">
              <Coffee className="w-8 h-8 text-accent mx-auto mb-2" />
              <Link href="/gallery" className="font-semibold hover:text-accent transition-colors">
                Gallery
              </Link>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="text-center">
              <Star className="w-8 h-8 text-accent mx-auto mb-2" />
              <Link href="/reviews" className="font-semibold hover:text-accent transition-colors">
                Reviews
              </Link>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} className="text-center">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
              <Link href="/contact" className="font-semibold hover:text-accent transition-colors">
                Contact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA block */}
      <section className="py-20 bg-coffee-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" aria-hidden />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Visit us in DHA Phase 8
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Phase 8 (X), Park View, 23 CCA, DHA, Lahore · Open daily till 2 AM
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-coffee-950 font-semibold hover:bg-accent-light transition-all hover:scale-[1.02]"
            >
              <MapPin className="w-5 h-5" /> Contact & Map
            </Link>
            <a
              href="tel:+923419423283"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/15 text-white font-semibold hover:bg-white/25 transition-colors border border-white/30"
            >
              Call +92 341 9423283
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
