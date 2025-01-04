// "use client"

import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";

import "./globals.css";
import "./themes.css";
import ThemeToggle from './components/ThemeToggle';

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prtopia",
  description: "Prtopia Platform for animal Lovers",
  authors: [
    { name: "Abdullah Hassouna", url: "https://www.github.com/abdullah-hassouna" },
    { name: "Haitham Abu-Lumdi", url: "https://www.github.com/haitham-akram" }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${readexPro.className} antialiased`}
      >
        <header className="p-4 bg-background">
          <div className="container mx-auto flex justify-end">
            <ThemeToggle />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
