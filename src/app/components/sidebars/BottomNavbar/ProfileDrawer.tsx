'use client'

import * as React from 'react'
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Bookmark, Logout, Message, NotificationBing, Profile, ProfileCircle, Setting } from 'iconsax-react'
import NavbarLink from '../../NavbarLink'
import ThemeToggle from '../../ThemeToggle'
import ROUTES from '@/routes'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { loginService } from '@/lib/services/auth/login'

export function ProfileDrawer({
  children: ButtonTrigger,
}: Readonly<{
  children: React.ReactNode
}>) {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    loginService.logout(dispatch) // Call the logout function from loginService
    router.push('/login') // Redirect to the login page
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>{ButtonTrigger}</DrawerTrigger>
      <DrawerContent className="border-icon-color bg-foreground h-[68%]">
        <DrawerTitle></DrawerTitle>
        <div className="mx-auto flex flex-col sm:flex-row justify-between  w-full max-w-sm">
          <nav className="flex-1 py-2 align-middle">
            <ul className="space-y-1">
              {[
                { Icon: NotificationBing, label: 'Notifications', link: '' },
                { Icon: Message, label: ROUTES['messages-page'], link: '' },
                { Icon: Bookmark, label: 'Bookmarks', link: '' },
                // { Icon: Profile, label: "Profile", link: "" },
              ].map((item) => (
                <NavbarLink key={item.label} {...item} />
              ))}
              <li key={'themeToggle'}>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
          <hr className="w-full my-5 border border-background" />
          <nav className="flex-1 py-2 align-middle">
            <ul className="space-y-1">
              {[
                {
                  Icon: ProfileCircle,
                  label: 'Your Profile',
                  link: ROUTES['profile-page'],
                },
                {
                  Icon: Setting,
                  label: 'Account Settings',
                  link: 'link',
                },
                {
                  Icon: Logout,
                  label: 'Logout',
                  onClick: handleLogout,
                },
              ].map((item) => (
                <NavbarLink key={item.label} {...item} />
              ))}
            </ul>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
