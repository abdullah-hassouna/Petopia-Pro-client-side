'use client'

import { usePathname } from 'next/navigation'
import UserInfoSidebar from './components/sidebars/UserinfoSidebar'
import BottomNavbar from './components/sidebars/BottomNavbar'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function NavigationWrapper({ children }) {
  const pathname = usePathname()
  const authPages = ['/login', '/signup', '/forget-password', '/reset-password', '/google-callback', '/validate-user']
  // Check if the current pathname is one of the auth pages
  const isAuthPage = authPages.some((page) => pathname.startsWith(page))

  return (
    <>
      {!isAuthPage && <UserInfoSidebar />}
      <ScrollArea className="flex-grow h-[100vh] mb-6 md:mb-0">{children}</ScrollArea>
      {!isAuthPage && <BottomNavbar />}
    </>
  )
}
