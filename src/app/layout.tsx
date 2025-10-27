import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apex Arena | Elevate Your Esports Journey",
  description:
    "Discover pro-level training plans, scrim schedules, scouting reports, and tournament intel tailored for competitive esports players.",
  openGraph: {
    title: "Apex Arena — Esports Player Command Center",
    description:
      "Build your roster, track upcoming tournaments, and stay ahead with intelligent practice plans for every role.",
    url: "https://agentic-2c6d6f5f.vercel.app",
    siteName: "Apex Arena",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Arena | Esports Player Hub",
    description:
      "Scrim, strategize, and succeed with a modern toolkit built for esports athletes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
