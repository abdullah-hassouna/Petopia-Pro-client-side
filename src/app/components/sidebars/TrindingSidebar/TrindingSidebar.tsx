import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
// import { Notification1,   Signpost, MessageSquare } from 'iconsax-react'
import { Bookmark, Message, NotificationBing, Setting, } from "iconsax-react"

import IconsBar from "./IconBar"

export default function TrindingSidebar() {

    const ICONS_BAR_DATA = [
        {
            title: "Notification",
            icon: NotificationBing,
            contents: [
                {
                    img: "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                    header: "Notification 1",
                    paragraph: "notification 1 desc notification 1 desc notification 1 desc notification 1 desc notification 1 desc notification 1 desc notification 1 desc notification 1 desc",
                    link: "link"
                },
                {
                    img: "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                    header: "Notification 2",
                    paragraph: "notification 2 desc",
                    link: "link"
                },
                {
                    img: "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                    header: "Notification 3",
                    paragraph: "notification 3 desc",
                    link: "link"
                }

            ]
        },
        {
            title: "Messages",
            icon: Message,
            contents: [
                {
                    img: "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                    header: "Message 1",
                    paragraph: "message 1 desc",
                    link: "link"
                },
                {
                    img: "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                    header: "Message 2",
                    paragraph: "message 2 desc",
                    link: "link"
                },
                {
                    img: "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                    header: "Message 3",
                    paragraph: "message 3 desc",
                    link: "link"
                }

            ]
        },

        {
            title: "Bookmark",
            icon: Bookmark,
            contents: [
                {
                    img: "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                    header: "Bookmark 1",
                    paragraph: "bookmark 1 desc",
                    link: "link"
                },
                {
                    img: "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                    header: "Bookmark 2",
                    paragraph: "bookmark 2 desc",
                    link: "link"
                },
                {
                    img: "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                    header: "Bookmark 3",
                    paragraph: "bookmark 3 desc",
                    link: "link",
                }

            ]
        },
        {
            title: "Settings",
            icon: Setting,
            contents: [
                {
                    header: "Your Profile",
                    link: "link"
                },
                {
                    header: "Account Settings",
                    link: "link"
                },
                {
                    header: "Logout",
                    link: "link",
                }

            ]
        }
    ]

    return (
        <div className="px-4 py-6 w-fit max-w-md bg-white min-h-screen">
            <IconsBar className="flex justify-between" items={ICONS_BAR_DATA} />
            <div className="mt-4">
                {/* <h2 className="text-xl font-semibold mb-4">Trending Products</h2> */}
                <div className="grid grid-cols-2 ">
                    {[
                        "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                        "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                        "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg",
                        "https://www.shutterstock.com/image-photo/funny-dog-licking-lips-tongue-260nw-1761385949.jpg"
                    ].map((src, index) => (
                        <div key={index} className="aspect-square w-fit h-fit p-2 overflow-hidden">
                            <img
                                src={src}
                                alt={`Trending product ${index + 1}`}
                                className=" object-cover h-32 w-32 rounded-2xl m-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-4">
                <h2 className="text-xl font-semibold mb-4">Who to follow</h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                        <div key={index} className="flex items-center justify-between">
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
                            <Button variant="outline" size="sm" className="rounded-full px-6">
                                Follow
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}