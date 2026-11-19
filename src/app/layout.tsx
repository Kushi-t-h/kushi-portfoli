import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kushi T H — Software Developer & Data Science Engineer",
  description: "Personal portfolio of Kushi T H, Computer Science & Data Science undergraduate at CMRIT Bengaluru (CGPA 9.13). Projects in CloudFinOps, Full-Stack POS Systems, and MySQL pipelines.",
  keywords: [
    "Kushi T H",
    "Software Developer",
    "Data Science Engineer",
    "CMRIT",
    "CloudFinOps",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "MySQL",
    "Bengaluru"
  ],
  authors: [{ name: "Kushi T H" }],
  openGraph: {
    title: "Kushi T H — Software Developer & Data Science Engineer",
    description: "Personal portfolio showcasing CloudFinOps AI, Smart Pharmacy POS, and MySQL data engineering pipelines.",
    type: "website",
    locale: "en_US",
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
      className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F7F0E8] text-[#2B1F1A] font-sans antialiased selection:bg-[#B5583C] selection:text-white">
        {children}
      </body>
    </html>
  );
}
