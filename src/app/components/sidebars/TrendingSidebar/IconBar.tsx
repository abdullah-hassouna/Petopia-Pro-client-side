import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import { Icon } from "iconsax-react";

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
            link?: string,
            onClick?: () => void
        }[]
    }[];
    className?: string;
}

function IconsBar({ items, className }: IiconBar) {
    return (
        <NavigationMenu>
            <NavigationMenuList className={cn("flex flex-col xl:flex-row gap-2 xl:gap-0 justify-start xl:justify-between w-full", className)}>
                {items.map(({ contents, icon: Icon, title }, ind) =>
                    <NavigationMenuItem key={"item" + ind}>
                        <NavigationMenuTrigger className="trigger-no-arrow border bg-foreground border-gray-300 rounded-full p-2 h-auto w-auto" key={"trigger" + ind}>
                            <Icon className="block" color="var(--icon-color)" style={{ width: "24px", height: "24px" }} />
                            <span className="inline xl:hidden pl-2">{title}</span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent key={"content" + ind} >
                            {contents.map((content, ind2) =>
                                <NavigationMenuLink href={content.link} key={'menu' + ind2} onClick={content.onClick} className={cn("flex items-center justify-start gap-2", content.type === 'danger' ? "text-red-500" : "")}>
                                    <div className="flex w-72 h-10 mt-2 justify-between gap-2 my-1 px-2 hover:text-primary-50" >
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