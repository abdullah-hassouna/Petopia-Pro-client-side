// "use client"

import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import "./themes.css";
import UIToggle from "./components/sidebars/UserInfoSidebarToggle"
// import ThemeToggle from './components/ThemeToggle';
import ProviderContainer from "@/lib/providerContainer/container";
import UserInfoSidebar from "./components/sidebars/UserInfoSidebar";

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
    //<Provider store={makeStore()}>
    <ProviderContainer>
      <html lang="en">
        <body
          className={`${readexPro.className} antialiased flex`}
        >
          <UserInfoSidebar />
          <UIToggle />

          {children}
        </body>
      </html>
    </ProviderContainer>

  );
}
