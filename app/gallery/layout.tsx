import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery – Core Coffee | DHA Lahore",
  description: "Photos of our coffee, space and vibe. Core Coffee, Phase 8, DHA Lahore.",
};

export default function GalleryLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
