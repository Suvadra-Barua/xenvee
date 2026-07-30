import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/custom/TopNav";
import Footer from "@/components/custom/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://sbarua.netlify.app/";

export const metadata: Metadata = {
  title: "Suvadra Barua",
  description:
    "Suvadra Barua — software engineer and researcher working on blockchain systems, smart contracts, and secure software. Publications, projects, and experience.",
  keywords:
    "Suvadra Barua, blockchain engineer, smart contracts, software security, research assistant, University at Buffalo, CUET",
  robots: "index, follow",
  openGraph: {
    title: "Suvadra Barua",
    description:
      "Software engineer and researcher — blockchain, smart contracts, and secure software.",
    url: siteUrl,
    type: "website",
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
        className={`${inter.variable} ${serif.variable} ${mono.variable} font-sans bg-background text-foreground`}
      >
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
