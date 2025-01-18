import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import "./globals.css";
import "./themes.css";
// import ThemeToggle from './components/ThemeToggle';
import ProviderContainer from "@/lib/reduxStore/providerContainer/container";
import UserInfoSidebar from "./components/sidebars/UserinfoSidebar";
import UIToggle from "./components/sidebars/UserinfoSidebar/UserInfoSidebarToggle"
import BottomNavbar from "./components/sidebars/BottomNavbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
          className={`${readexPro.className} relative transition-all antialiased flex`}
        >
          <UserInfoSidebar />
          {/* <UIToggle className="block m-5" /> */}
          <ScrollArea className="flex-grow h-[100vh]">
            {children}
          </ScrollArea>
          <BottomNavbar />
        </body>
      </html>
    </ProviderContainer>
  );
}
