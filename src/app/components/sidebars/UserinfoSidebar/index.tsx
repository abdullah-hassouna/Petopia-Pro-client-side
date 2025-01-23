'use client'

import { Bookmark, Home2, Message, NotificationBing, Profile, SearchNormal1, } from "iconsax-react"
import ThemeToggle from "../../ThemeToggle"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/reduxStore/store"
import NavbarLink from "../../NavbarLink"
import ProfileAvatar from "../../ProfileAvatar"
import CreatePostButton from "../../CreatePostButton"
import UIToggle from "./UserInfoSidebarToggle"
import { cn } from "@/lib/utils"


export default function UserInfoSidebar() {
  const isOpen = useSelector((state: RootState) => state.userSidebar.isOpen)

    return (
        <div
            className={cn("max-w-[320px] min-w-[250px] bg-foreground overflow-hidden h-screen hidden md:flex flex-col border-r border-borderColor duration-500", { "w-[15rem] sm:w-[20rem]": isOpen, "w-[5rem] ": !isOpen })}>
            <div className="p-4">
                <div className="flex justify-between">
                    <img src="/logo.svg" height={45} width={45} />
                    <UIToggle />
                </div>
                <ProfileAvatar />
                <div className={cn("text-sm w-full justify-between", { "hidden": !isOpen, "flex": isOpen })}>
                    <div className="px-2 text-center">
                        <div className="font-semibold">386</div>
                        <div className="text-whity font-thin text-sm">Following</div>
                    </div>
                    <div className="px-2 text-center">
                        <div className="font-semibold">15.4k</div>
                        <div className="text-whity font-thin text-sm">Followers</div>
                    </div>
                    <div className="px-2">
                        <div className="font-semibold text-center">468</div>
                        <div className="text-whity font-thin text-sm">Posts</div>
                    </div>
                </div>
            </div>

            <nav className="flex-1 p-2 align-middle">
                <ul className="space-y-1">
                    {[
                        { Icon: Home2, label: "Home", link: "/" },
                        { Icon: SearchNormal1, label: "Explore", link: "/search" },
                        { Icon: NotificationBing, label: "Notifications", link: "/notifcations" },
                        { Icon: Message, label: "Messages", link: "/messages" },
                        { Icon: Bookmark, label: "Bookmarks", link: "/bookmark" },
                        { Icon: Profile, label: "Profile", link: "/profile" },
                    ].map((item) => (
                        <NavbarLink key={item.label} {...item} />
                    ))}
                    <li key={"themeToggle"}>
                        <ThemeToggle />
                    </li>
                </ul>
                <CreatePostButton className={cn("mt-10", { "block": isOpen, "hidden": !isOpen })} title={"Create Post"} options={[{ title: "Adopte", value: "3" }]} />
            </nav>
        </div>
    )
}
