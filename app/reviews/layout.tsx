import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews – Core Coffee | DHA Lahore",
  description: "What customers say about Core Coffee. ⭐ 4.7 on Google. DHA Phase 8, Lahore.",
};

export default function ReviewsLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
