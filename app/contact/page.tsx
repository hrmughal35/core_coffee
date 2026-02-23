"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const ADDRESS = "Phase 8 (X), Park View, 23 CCA, DHA, Lahore, Pakistan";
const PHONE = "+92 341 9423283";
const GOOGLE_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Phase+8+Park+View+23+CCA+DHA+Lahore";
const HOURS = "Open daily · Closes 2:00 AM";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-14">
          <motion.p
            className="font-display text-sm uppercase tracking-[0.3em] text-accent mb-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Find us
          </motion.p>
          <motion.h1
            className="font-display text-4xl sm:text-5xl font-bold text-coffee-900 mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            Location & Contact
          </motion.h1>
          <motion.p
            className="text-coffee-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Find us in DHA Phase 8. Call, visit, or order online.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <motion.div
            id="map"
            className="rounded-3xl overflow-hidden border-2 border-coffee-200 shadow-xl aspect-video bg-coffee-100"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <iframe
              title="Core Coffee on Google Maps"
              src="https://maps.google.com/maps?q=Phase+8+Park+View+23+CCA+DHA+Lahore+Pakistan&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[300px]"
            />
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {},
            }}
          >
            <motion.a
              href={GOOGLE_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center sm:items-start p-8 rounded-2xl bg-white border-2 border-coffee-100 shadow-lg hover:border-accent/30 transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            >
              <MapPin className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold text-coffee-800 mb-2">
                Address
              </h3>
              <p className="text-coffee-600 text-sm text-center sm:text-left mb-3">
                {ADDRESS}
              </p>
              <span className="text-accent text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Get directions <ExternalLink className="w-4 h-4" />
              </span>
            </motion.a>

            <motion.a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="group flex flex-col items-center sm:items-start p-8 rounded-2xl bg-white border-2 border-coffee-100 shadow-lg hover:border-accent/30 transition-all duration-300"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            >
              <Phone className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-xl font-semibold text-coffee-800 mb-2">
                Phone
              </h3>
              <p className="text-coffee-600 text-sm mb-3">{PHONE}</p>
              <span className="text-accent text-sm font-semibold">
                Click to call
              </span>
            </motion.a>

            <motion.div
              className="flex flex-col items-center sm:items-start p-8 rounded-2xl bg-white border-2 border-coffee-100 shadow-lg"
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            >
              <Clock className="w-10 h-10 text-accent mb-4" />
              <h3 className="font-display text-xl font-semibold text-coffee-800 mb-2">
                Hours
              </h3>
              <p className="text-coffee-600 text-sm mb-3">{HOURS}</p>
              <p className="text-green-700 text-sm font-semibold">
                Open till 2 AM
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
