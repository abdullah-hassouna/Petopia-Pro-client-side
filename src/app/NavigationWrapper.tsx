'use client'

import { usePathname } from 'next/navigation'
import UserInfoSidebar from './components/sidebars/UserinfoSidebar'
import BottomNavbar from './components/sidebars/BottomNavbar'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function NavigationWrapper({ children }) {
  const pathname = usePathname()
  const isAuthPage = pathname === '/login' || pathname === '/signup' || pathname === '/forget-password' || pathname === '/reset-password'

  return (
    <>
      {!isAuthPage && <UserInfoSidebar />}
      <ScrollArea className="flex-grow h-[100vh] mb-6 md:mb-0">{children}</ScrollArea>
      {!isAuthPage && <BottomNavbar />}
    </>
  )
}
