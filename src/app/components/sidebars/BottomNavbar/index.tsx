
import { Home2, Message, NotificationBing, SearchNormal1 } from "iconsax-react"
import NavItem from "./NavbarItem"
import ProfileNavItem from "./ProfileAvatarIcon"

export default function BottomNavbar() {
    return (
        <nav className="fixed bottom-0 z-[999] left-0 right-0 bg-foreground border-t border-icon-color px-2 md:hidden ">
            <ul className="flex h-fit items-center justify-evenly">
                {
                    [
                        { icon: SearchNormal1, link: "SearchNormal1" },
                        { icon: NotificationBing, link: "NotificationBing" },
                        { icon: Home2, link: "/" },
                        { icon: Message, link: "/messages" },
                    ].map(item => <NavItem key={item.link} {...item} />)}
                <ProfileNavItem  />
            </ul>
        </nav>
    )
}
