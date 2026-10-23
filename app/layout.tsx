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
  title: "Syed Muhammad Hussain Abbas | Full Stack Developer & Software Engineer",
  description:
    "Portfolio of Syed Muhammad Hussain Abbas — BSCS Undergraduate, Full Stack Developer, and Software Engineer building AI-ready production applications.",
  keywords: [
    "Syed Muhammad Hussain Abbas",
    "Full Stack Developer",
    "Software Engineer",
    "AI-Ready Production Applications",
    "React",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "Node.js",
  ],
  authors: [{ name: "Syed Muhammad Hussain Abbas" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Syed Muhammad Hussain Abbas | Full Stack Developer & Software Engineer",
    description:
      "BSCS Undergraduate, Full Stack Developer, and Software Engineer building AI-ready production applications.",
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
