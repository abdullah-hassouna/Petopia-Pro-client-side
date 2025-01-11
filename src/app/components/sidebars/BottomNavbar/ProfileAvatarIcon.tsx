import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import clsx from "clsx";
import { Profile2User } from "iconsax-react"
import { ProfileDrawer } from "./ProfileDrawer";

export default function ProfileNavItem({
    active
}: {
    active?: boolean | undefined
}) {

    return (
        <ProfileDrawer>
            <li className={clsx("w-fit h-fit p-2 rounded-full", { "bg-icon-color": active })}>
                <Avatar className="h-6 w-6">
                    <AvatarImage className="" src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback>
                        <Profile2User className="h-6 w-6" color={active ? "var(--background)" : `var(--icon-color)`} /></AvatarFallback>
                </Avatar>
            </li>
        </ProfileDrawer>

    )
}