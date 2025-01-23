import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'
import './globals.css'
import './themes.css'
// import ThemeToggle from './components/ThemeToggle';
<<<<<<< HEAD
import ProviderContainer from "@/lib/reduxStore/providerContainer/container";
import UserInfoSidebar from "./components/sidebars/UserinfoSidebar";
import UIToggle from "./components/sidebars/UserinfoSidebar/UserInfoSidebarToggle"
import BottomNavbar from "./components/sidebars/BottomNavbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
=======
import ProviderContainer from '@/lib/reduxStore/providerContainer/container'
import UserInfoSidebar from './components/sidebars/UserinfoSidebar'
import UIToggle from './components/sidebars/UserinfoSidebar/UserInfoSidebarToggle'
import BottomNavbar from './components/sidebars/BottomNavbar'
>>>>>>> ad43a0e68f1ce2c7a0283b2b4aa0f4fecc2c47dd

const readexPro = Readex_Pro({
  variable: '--font-readex-pro',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Prtopia',
  description: 'Prtopia Platform for animal Lovers',
  authors: [
    { name: 'Abdullah Hassouna', url: 'https://www.github.com/abdullah-hassouna' },
    { name: 'Haitham Abu-Lamdi', url: 'https://www.github.com/haitham-akram' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    //<Provider store={makeStore()}>
    <ProviderContainer>
      <html lang="en">
        <body
          className={`${readexPro.className} relative transition-all antialiased flex`}
        >
          <UserInfoSidebar />
          <ScrollArea className="flex-grow h-[100vh] mb-6 md:mb-0">
            {children}
          </ScrollArea>
          <BottomNavbar />
        </body>
      </html>
    </ProviderContainer>
  )
}
