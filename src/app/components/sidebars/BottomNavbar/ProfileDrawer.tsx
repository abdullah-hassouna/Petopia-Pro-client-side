"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Bookmark, Home2, Logout, Message, NotificationBing, Profile, ProfileCircle, SearchNormal1, Setting } from "iconsax-react";
import NavbarLink from "../../NavbarLink";
import ThemeToggle from "../../ThemeToggle";
import CreatePostButton from "../../CreatePostButton";

export function ProfileDrawer({
    children: ButtonTrigger,
}: Readonly<{
    children: React.ReactNode;
}>
) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                {ButtonTrigger}
            </DrawerTrigger>
            <DrawerContent className="border-icon-color bg-foreground h-[68%]">
                    <DrawerTitle></DrawerTitle>
                <div className="mx-auto flex flex-col justify-between  w-full max-w-sm">

                    <nav className="flex-1 py-2 align-middle">
                        <ul className="space-y-1">
                            {[
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
                    <hr className="w-full my-5 border border-background" />
                    <nav className="flex-1 py-2 align-middle">
                        <ul className="space-y-1">
                            {[{
                                Icon: ProfileCircle,
                                label: "Your Profile",
                                link: "link"
                            },
                            {
                                Icon: Setting,
                                label: "Account Settings",
                                link: "link"
                            },
                            {
                                Icon: Logout,
                                label: "Logout",
                                link: "link",
                            }].map((item) => (
                                <NavbarLink key={item.label} {...item} />
                            ))}
                        </ul>
                    </nav>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
