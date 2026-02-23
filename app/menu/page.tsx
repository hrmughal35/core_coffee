"use client";

import { motion } from "framer-motion";
import { Coffee, Snowflake, Sparkles, Cookie, ExternalLink } from "lucide-react";

const categories = [
  {
    id: "hot",
    title: "Hot Coffee",
    icon: Coffee,
    items: [
      "Espresso",
      "Americano",
      "Cappuccino",
      "Latte",
      "Mocha",
      "Flat White",
      "Macchiato",
      "Turkish Coffee",
      "Hot Chocolate",
    ],
  },
  {
    id: "cold",
    title: "Cold Coffee",
    icon: Snowflake,
    items: [
      "Iced Americano",
      "Iced Latte",
      "Iced Mocha",
      "Cold Brew",
      "Iced Cappuccino",
      "Frappé",
    ],
  },
  {
    id: "signature",
    title: "Signature Drinks",
    icon: Sparkles,
    items: [
      "Core Special",
      "Hazelnut Latte",
      "Caramel Macchiato",
      "Vanilla Latte",
      "Salted Caramel Mocha",
      "Dirty Chai",
    ],
  },
  {
    id: "snacks",
    title: "Snacks & Desserts",
    icon: Cookie,
    items: [
      "Croissant",
      "Brownie",
      "Muffins",
      "Sandwiches",
      "Waffles",
      "Cheesecake",
      "Cookies",
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-14">
          <motion.p
            className="font-display text-sm uppercase tracking-[0.3em] text-accent mb-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What we serve
          </motion.p>
          <motion.h1
            className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Our Menu
          </motion.h1>
          <motion.p
            className="text-coffee-600 text-lg max-w-xl mx-auto mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Hot & cold coffee, signature drinks, and bites.
          </motion.p>
          <motion.a
            href="https://www.foodpanda.com.pk/restaurant/v6en/core-coffee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-coffee-950 font-semibold hover:bg-accent-light transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Order on Foodpanda <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          {categories.map((cat, index) => (
            <motion.section
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-3xl border-2 border-coffee-100 shadow-xl shadow-coffee-900/5 overflow-hidden hover:border-accent/20 transition-colors"
            >
              <div className="flex items-center gap-4 px-8 py-5 bg-coffee-50/80 border-b border-coffee-100">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/20 text-accent group-hover:bg-accent/30 transition-colors">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl font-semibold text-coffee-800">
                  {cat.title}
                </h2>
              </div>
              <ul className="px-8 py-6 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="py-2 text-coffee-700 border-b border-coffee-50 last:border-0 font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </section>
    </div>
  );
}
