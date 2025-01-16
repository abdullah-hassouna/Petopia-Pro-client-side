import { Button } from '@/components/ui/button'
import { RootState } from '@/lib/reduxStore/store';
import clsx from 'clsx';
import { redirect, usePathname } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux';

type IconType = React.ComponentType<{
    color: string;
    variant: "Bulk" | "Linear" | "Outline" | "Broken" | "Bold" | "TwoTone";
    style?: React.CSSProperties;
}>;

function NavbarLink({ label, Icon, link }: { label: string, Icon: IconType, link: string }) {
    const areActive = link == (usePathname())
    const isOpen = useSelector((state: RootState) => state.userSidebar.isOpen);

    // console.log(areActive)
    return (
        <li key={label} >
            <Button
                onClick={() => redirect(link)}
                variant="ghost"
                className={clsx("w-full justify-start gap-3 font-normal", { "hover:bg-none bg-icon-color": areActive, "justify-start": isOpen, "justify-evenly my-2": !isOpen })}
            >
                <Icon
                    style={{ width: 28, height: 28 }}
                    color={areActive ? "var(--discuss-tag)" : "var(--icon-color)"}
                    variant="Bulk" />
                <p className={clsx('sm:text-base text-lg', { "text-white": areActive, "opacity-100": isOpen, "opacity-100 md:opacity-0": !isOpen })}>{label}</p>
            </Button>
        </li>
    )
}

export default NavbarLink