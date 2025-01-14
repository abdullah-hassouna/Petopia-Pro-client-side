import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import clsx from "clsx";
import { Icon } from "iconsax-react";
import { ReactNode } from "react";

export interface IiconBar {
    items: {
        title: string,
        icon: Icon,
        contents:
        {
            type?: 'danger' | undefined,
            img?: string,
            header: string,
            paragraph?: string,
            link: string,
        }[]
    }[];
    className?: string;
}

function IconsBar({ items, className }: IiconBar) {
    return (
        <NavigationMenu id="Hello" className={clsx(className)}>
            <NavigationMenuList className="flex justify-between w-full">
                {items.map(({ contents, icon: Icon, title }, ind) =>
                    <NavigationMenuItem key={"item" + ind}>
                        <NavigationMenuTrigger className="trigger-no-arrow border border-gray-300 rounded-[50%] p-2 h-auto" key={"trigger" + ind}>
                            <Icon className="block" color="black" style={{ width: "24px", height: "24px" }} /></NavigationMenuTrigger>
                        <NavigationMenuContent key={"content" + ind} >
                            {contents.map((content, ind2) =>
                                <NavigationMenuLink href={content.link} key={'menu' + ind2}>
                                    <div className="flex h-10 mt-2 justify-between gap-2 my-1 px-2 hover:text-primary-50" >
                                        <img src={content.img} className="h-8 w-8 object-cover rounded-[50%] m-auto" alt={content.img} />
                                        <div className="flex flex-col flex-grow">
                                            <h5>{content.header}</h5>
                                            <small className="text-gray-400 line-clamp-2">{content.paragraph}</small>
                                        </div>
                                    </div>
                                </NavigationMenuLink>
                            )}
                            <NavigationMenuLink>
                                <div className="px-2 py-3 w-full border-t border border-gray-200">
                                    <h5 className={"m-auto w-fit"}>{`Show more ${title}`}</h5>
                                </div>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                )}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default IconsBar