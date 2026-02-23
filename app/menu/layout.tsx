import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu – Core Coffee | DHA Phase 8 Lahore",
  description:
    "Hot coffee, cold coffee, signature drinks & snacks. Order on Foodpanda. Core Coffee, DHA Lahore.",
};

export default function MenuLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
