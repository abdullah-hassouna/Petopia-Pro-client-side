"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bookmark, Home2, Message, NotificationBing, Profile, SearchNormal1, } from "iconsax-react"
import ThemeToggle from "../ThemeToggle"
import clsx from "clsx"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/reduxStore/store"
import NavbarLink from "../NavbarLink"
import ProfileAvatar from "../ProfileAvatar"


export default function UserInfoSidebar() {


    const isOpen = useSelector((state: RootState) => state.userSidebar.isOpen);

    return (
        <div
            className={clsx("bg-foreground overflow-hidden h-screen flex flex-col border-r border-borderColor", { "animate-slideinFromLeft w-auto": isOpen, "animate-slideOutToLeft w-0": !isOpen })}>

            <div className="p-4">
                <div>
                    <img src="/logo.svg" height={45} width={45} />
                </div>
                <ProfileAvatar />
                <div className="flex text-sm w-full justify-between">
                    <div className="px-2 text-center">
                        <div className="font-semibold">386</div>
                        <div className="text-gray-600 font-thin text-sm">Following</div>
                    </div>
                    <div className="px-2 text-center">
                        <div className="font-semibold">15.4k</div>
                        <div className="text-gray-600 font-thin text-sm">Followers</div>
                    </div>
                    <div className="px-2">
                        <div className="font-semibold text-center">468</div>
                        <div className="text-gray-600 font-thin text-sm">Posts</div>
                    </div>
                </div>
            </div>

            <nav className="flex-1 p-2">
                <ul className="space-y-1">
                    {[
                        { Icon: Home2, label: "Home", link: "" },
                        { Icon: SearchNormal1, label: "Explore", link: "" },
                        { Icon: NotificationBing, label: "Notifications", link: "" },
                        { Icon: Message, label: "Messages", link: "" },
                        { Icon: Bookmark, label: "Bookmarks", link: "" },
                        { Icon: Profile, label: "Profile", link: "" },
                    ].map((item) => (
                        <NavbarLink key={item.label} {...item} />
                    ))}
                    <li key={"themeToggle"}>
                        <ThemeToggle />
                    </li>
                </ul>
            </nav>
        </div>
    )
}