import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import ScrollRestoration from "@/components/ScrollRestoration";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CodeQor Technologies | Grow Your Business With Us",
  description:
    "We blend creative marketing strategies with novel solutions that help businesses grow, connect, and thrive in their niche.",
  icons: {
    icon: "/CodeQorLogo-transparent-600.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
