import clsx from "clsx"
import { Icon } from "iconsax-react"
import Link from "next/link"

function NavItem({
    icon: Icon,
    link
}: {
    icon: Icon,
    link: string
}) {

    return (
        <Link href={link || ""} className={clsx("w-fit p-2 h-12", { "bg-icon-color": true })}>
            <Icon className={'w-6 h-full m-auto'} color={true ? "var(--background)" : `var(--icon-color)`} />
        </Link>
    )
}

export default NavItem
