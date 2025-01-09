import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import "./themes.css";
// import ThemeToggle from './components/ThemeToggle';
import ProviderContainer from "@/lib/reduxStore/providerContainer/container";
import UserInfoSidebar from "./components/sidebars/UserinfoSidebar/UserInfoSidebar";
import UIToggle from "./components/sidebars/UserInfoSidebarToggle"
import TrindingSidebar from "./components/sidebars/TrindingSidebar/TrindingSidebar";

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prtopia",
  description: "Prtopia Platform for animal Lovers",
  authors: [
    { name: "Abdullah Hassouna", url: "https://www.github.com/abdullah-hassouna" },
    { name: "Haitham Abu-Lamdi", url: "https://www.github.com/haitham-akram" }
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
          className={`${readexPro.className} transition-all antialiased flex`}
        >
          <UserInfoSidebar />
          <div className="flex-grow m-3">
            <UIToggle />
            {children}
          </div>
          <TrindingSidebar />
        </body>
      </html>
    </ProviderContainer>

  );
}
