import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollRestoration from "@/components/ScrollRestoration";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeQor Technologies | Grow Your Business With Us",
  description:
    "We blend creative marketing strategies with novel solutions that help businesses grow, connect, and thrive in their niche.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
