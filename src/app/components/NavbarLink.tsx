import { Button } from '@/components/ui/button'
import React from 'react'

type IconType = React.ComponentType<{
    color: string;
    variant: "Bulk" | "Linear" | "Outline" | "Broken" | "Bold" | "TwoTone";
    style?: React.CSSProperties;
  }>;

function NavbarLink({ label, Icon, link }: { label: string, Icon: IconType, link: string }) {
    return (
        <li key={label}>
            <Button
                onClick={() => console.log(link)}
                variant="ghost"
                className="w-full justify-start gap-3 font-normal"
            >
                <Icon
                    style={{ width: 28, height: 28 }}
                    color="var(--icon-color)"
                    variant="Bulk" />
               <p className='sm:text-base text-lg'>{label}</p>
            </Button>
        </li>
    )
}

export default NavbarLink