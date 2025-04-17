'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
// import { Notification1,   Signpost, MessageSquare } from 'iconsax-react'
import { AddCircle, Bookmark, Message, NotificationBing, Setting } from 'iconsax-react'
import IconsBar from './IconBar'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { loginService } from '@/lib/services/auth/login'

export default function TrindingSidebar() {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    loginService.logout(dispatch) // Call the logout function from loginService
    router.push('/login') // Redirect to the login page
  }

  const ICONS_BAR_DATA = [
    {
      title: 'Notification',
      icon: NotificationBing,
      contents: [
        {
          img: 'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
          header: 'Notification 1',
          paragraph:
            'notification 1 desc notification 1 desc notification 1 desc notification 1 desc notification 1 desc notification 1 desc notification 1 desc notification 1 desc',
          link: 'link',
        },
        {
          img: 'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
          header: 'Notification 2',
          paragraph: 'notification 2 desc',
          link: 'link',
        },
        {
          img: 'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
          header: 'Notification 3',
          paragraph: 'notification 3 desc',
          link: 'link',
        },
      ],
    },
    {
      title: 'Messages',
      icon: Message,
      contents: [
        {
          img: 'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
          header: 'Message 1',
          paragraph: 'message 1 desc',
          link: 'link',
        },
        {
          img: 'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
          header: 'Message 2',
          paragraph: 'message 2 desc',
          link: 'link',
        },
        {
          img: 'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
          header: 'Message 3',
          paragraph: 'message 3 desc',
          link: 'link',
        },
      ],
    },

    {
      title: 'Bookmark',
      icon: Bookmark,
      contents: [
        {
          img: 'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
          header: 'Bookmark 1',
          paragraph: 'bookmark 1 desc',
          link: 'link',
        },
        {
          img: 'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
          header: 'Bookmark 2',
          paragraph: 'bookmark 2 desc',
          link: 'link',
        },
        {
          img: 'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
          header: 'Bookmark 3',
          paragraph: 'bookmark 3 desc',
          link: 'link',
        },
      ],
    },
    {
      title: 'Settings',
      icon: Setting,
      contents: [
        {
          header: 'Your Profile',
          link: 'link',
        },
        {
          header: 'Account Settings',
          link: 'link',
        },
        {
          header: 'Logout',
          link: '#', // Replace with an onClick handler
          onClick: handleLogout, // Call the logout handler
        },
      ],
    },
  ]

  return (
    <div
      id="trending-bar"
      className="hidden overflow-y-auto lg:block px-4 py-6 max-w-[300px] lg:w-[20rem] bg-foreground h-screen"
    >
      <IconsBar className="grid grid-cols-2 lg:flex justify-between" items={ICONS_BAR_DATA} />
      <div className="mt-4">
        {/* <h2 className="text-xl font-semibold mb-4">Trending Products</h2> */}
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
          {[
            'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
            'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
            'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
            'https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg',
          ].map((src, index) => (
            <div key={index} className=" w-fit h-fit p-1 overflow-hidden">
              <img
                src={src}
                alt={`Trending product ${index + 1}`}
                className=" object-cover xl:h-full xl:w-full h-[40%] rounded-2xl m-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-4">Who to follow</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Mohammad</div>
                  <div className="text-sm text-gray-500">@username</div>
                </div>
              </div>
              <AddCircle className="h-6 w-6 xl:block hidden" color="var(--prime-color)" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
