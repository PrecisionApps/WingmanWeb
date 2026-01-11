import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050508",
};

export const metadata: Metadata = {
  title: "Wingman — A Better Process for Real Connection",
  description: "Wingman replaces the firehose with a conversation. An anti-dopamine dating experience designed for trust, pacing, and real outcomes.",
  keywords: ["dating", "relationships", "connection", "intentional dating", "slow dating"],
  authors: [{ name: "Wingman" }],
  openGraph: {
    title: "Wingman — A Better Process for Real Connection",
    description: "You don't need more options. You need a better process.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wingman — A Better Process for Real Connection",
    description: "You don't need more options. You need a better process.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-mesh`}>
        {children}
      </body>
    </html>
  );
}
