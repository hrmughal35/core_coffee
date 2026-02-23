import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import OpenNowBadge from "@/components/OpenNowBadge";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Core Coffee – Best Coffee Shop in DHA Phase 8 Lahore",
  description:
    "Premium coffee shop in DHA Phase 8 (X), Park View, Lahore. Open till 2 AM. Dine-in, takeaway & Foodpanda delivery. ⭐ 4.7 · Rs 1,000–2,000 per person.",
  keywords: [
    "Core Coffee",
    "coffee shop DHA Lahore",
    "café Phase 8 Lahore",
    "best coffee DHA",
    "late night café Lahore",
    "Park View café",
  ],
  openGraph: {
    title: "Core Coffee – Best Coffee Shop in DHA Phase 8 Lahore",
    description:
      "Premium coffee in DHA Lahore. Open till 2 AM. Dine-in, takeaway & delivery.",
    type: "website",
  },
  robots: "index, follow",
  alternates: { canonical: "https://corecoffee.pk" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Core Coffee",
              image: "https://corecoffee.pk/og.jpg",
              "@id": "https://corecoffee.pk",
              url: "https://corecoffee.pk",
              telephone: "+923419423283",
              priceRange: "Rs 1,000 – 2,000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Phase 8 (X), Park View, 23 CCA",
                addressLocality: "DHA",
                addressRegion: "Lahore",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 31.4697,
                longitude: 74.3636,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "02:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.7",
                reviewCount: "31",
                bestRating: "5",
              },
            }),
          }}
        />
      </head>
      <body className="font-body min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <OpenNowBadge />
      </body>
    </html>
  );
}
