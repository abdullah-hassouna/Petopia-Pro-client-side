"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
// import { Bell, Bookmark, Home, Mail, Search, User, Sun, Moon, SunMoon } from 'lucide-react'
import { Bookmark, Home2, Message, NotificationBing, Profile, SearchNormal1, } from "iconsax-react"
import ThemeToggle from "../ThemeToggle"
import clsx from "clsx"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"



export default function UserInfoSidebar() {
    const isOpen = useSelector((state: RootState) => state.userSidebar.isOpen);

    // console.log(isOpen)

    return (
        <aside
            //  className="w-[240px] w-max-[340px] bg-foreground h-screen flex flex-col border-r border-border">
            // className={clsx("bg-foreground h-screen flex flex-col border-r border-border", { "animate-slideinFromLeft": isOpen, "animate-slideOutToLeft": !isOpen })}

            className={clsx(
                "bg-foreground h-screen flex flex-col border-r border-border transition-transform duration-500 ease-in-out", // Smooth transitions
                {
                    "-translate-x-full": !isOpen, // Start hidden off-screen
                    "translate-x-0": isOpen,     // Slide into view
                }
            )}
        >

            <div className="p-4 ">
                <div>
                    <img src="/logo.svg" height={45} width={45} />
                </div>
                <div className="flex flex-col items-center mb-4">
                    <Avatar className="w-16 h-16 mb-4">
                        <AvatarImage src="/defaultAvatar.png" alt="Mohammad" />
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <span className="font-semibold text-lg">Mohammad</span>
                    <small className="text-gray-600 text-sm font-thin" >username</small>
                </div>
                <div className="flex text-sm">
                    <div className="px-2 border-r-2 text-center">
                        <div className="font-semibold">386</div>
                        <div className="text-gray-600 font-thin text-sm">Following</div>
                    </div>
                    <div className="px-2 border-r-2 text-center">
                        <div className="font-semibold">15.4k</div>
                        <div className="text-gray-600 font-thin text-sm">Followers</div>
                    </div>
                    <div className="px-2">
                        <div className="font-semibold text-center">468</div>
                        <div className="text-gray-600 font-thin text-sm">Posts</div>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="flex-1 p-2">
                <ul className="space-y-1">
                    {[
                        { icon: Home2, label: "Home", link: "" },
                        { icon: SearchNormal1, label: "Explore", link: "" },
                        { icon: NotificationBing, label: "Notifications", link: "" },
                        { icon: Message, label: "Messages", link: "" },
                        { icon: Bookmark, label: "Bookmarks", link: "" },
                        { icon: Profile, label: "Profile", link: "" },
                    ].map((item) => (
                        <li key={item.label}>
                            <Button
                                // onClick={() => console.log(item.link)}
                                variant="ghost"
                                className="w-full justify-start gap-3 font-normal"
                            >
                                <item.icon
                                    style={{ width: 24, height: 24 }}
                                    color="#FF8A65"
                                    variant="Bulk" />
                                {item.label}
                            </Button>
                        </li>
                    ))}
                    <li key={"themeToggle"}>
                        <ThemeToggle />
                    </li>
                </ul>
            </nav>
        </aside>
    )
}