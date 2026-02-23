import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Core Coffee | DHA Lahore",
  description:
    "Our story: quality coffee, a chill environment, and a late-night friendly space in DHA Phase 8, Lahore.",
};

export default function AboutLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
