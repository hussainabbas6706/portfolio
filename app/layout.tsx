import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syed Muhammad Hussain Abbas | Software Engineer & AI/ML",
  description:
    "Navigating high-dimensional spaces. Modeling cosmos with code. Seeking mathematical elegance in artificial intelligence.",
  keywords: [
    "Syed Muhammad Hussain Abbas",
    "Software Engineer",
    "Machine Learning",
    "Artificial Intelligence",
    "Linear Algebra",
    "Cosmic Grid Portfolio",
  ],
  authors: [{ name: "Syed Muhammad Hussain Abbas" }],
  openGraph: {
    title: "Syed Muhammad Hussain Abbas | Software Engineer & AI/ML",
    description:
      "Navigating high-dimensional spaces. Modeling cosmos with code. Seeking mathematical elegance in artificial intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-[#050811] text-[#E2E8F0] selection:bg-[#38BDF8]/20 selection:text-white overflow-x-hidden font-sans"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
