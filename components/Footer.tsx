import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-950 text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-xl font-semibold text-accent mb-4">
              Core Coffee
            </h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              Brewed to the Core. Quality coffee and a chill vibe in DHA Phase
              8, Lahore.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="/menu" className="hover:text-accent transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-accent transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://www.foodpanda.com.pk/restaurant/v6en/core-coffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Order on Foodpanda
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              Visit Us
            </h3>
            <div className="space-y-4 text-sm text-white/80">
              <p className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-accent" />
                Phase 8 (X), Park View, 23 CCA, DHA, Lahore
              </p>
              <a
                href="tel:+923419423283"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0 text-accent" />
                +92 341 9423283
              </a>
              <p className="flex items-center gap-3">
                <Clock className="w-4 h-4 shrink-0 text-accent" />
                Open daily · Closes 2:00 AM
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-coffee-800 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Core Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
