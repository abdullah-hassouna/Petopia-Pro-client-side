import type { Metadata } from 'next'
import { Readex_Pro } from 'next/font/google'
import './globals.css'
import './themes.css'
import ProviderContainer from '@/lib/reduxStore/providerContainer/container'
import UserInfoSidebar from './components/sidebars/UserinfoSidebar'
import BottomNavbar from './components/sidebars/BottomNavbar'
import { Toaster } from '@/components/ui/toaster'
import { ScrollArea } from '@/components/ui/scroll-area'

import NavigationWrapper from './NavigationWrapper'

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


// Server component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ProviderContainer>
      <html lang="en">
        <body className={`${readexPro.className} relative transition-all antialiased flex`}>
          <NavigationWrapper>{children}</NavigationWrapper>
          <Toaster />
        </body>
      </html>
    </ProviderContainer>
  )
}
