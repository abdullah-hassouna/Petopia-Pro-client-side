import { Button } from '@/components/ui/button'
import clsx from 'clsx';
import { redirect, usePathname } from 'next/navigation';
import React from 'react'

type IconType = React.ComponentType<{
    color: string;
    variant: "Bulk" | "Linear" | "Outline" | "Broken" | "Bold" | "TwoTone";
    style?: React.CSSProperties;
}>;

function NavbarLink({ label, Icon, link }: { label: string, Icon: IconType, link: string }) {
    const areActive = link == (usePathname())
    console.log(areActive)
    return (
        <li key={label} >
            <Button
                onClick={() => redirect(link)}
                variant="ghost"
                className={clsx("w-full justify-start gap-3 font-normal", { "hover:bg-none bg-icon-color": areActive })}
            >
                <Icon
                    style={{ width: 28, height: 28 }}
                    color={areActive ? "var(--discuss-tag)" : "var(--icon-color)"}
                    variant="Bulk" />
                <p className={clsx('sm:text-base text-lg', { "text-whity": areActive })}>{label}</p>
            </Button>
        </li>
    )
}

export default NavbarLink