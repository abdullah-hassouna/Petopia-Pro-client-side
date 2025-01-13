"use client"

import { Button } from "@/components/ui/button";
import { AppDispatch, RootState, userInfoSidebarToggle } from "@/lib/reduxStore/store";
import clsx from "clsx";
import { Menu, } from "iconsax-react";
import { useDispatch, useSelector, } from "react-redux";

function UserInfoSidebarToggle({ className }: { className?: string }) {
    const isOpen = useSelector((state: RootState) => state.userSidebar.isOpen);

    const dispatch: AppDispatch = useDispatch();
    const toggleSidebar = () => dispatch(userInfoSidebarToggle());


    return (
        <Button className={clsx("bg-primary opacity-70 hover:opacity-100 border border-borderColorborder shadow-none", className)} onClick={toggleSidebar}>
            <Menu className={clsx("fill-background", { "animate-flipedArrowToLeft": isOpen, "animate-flipedArrowToRight": !isOpen, })} />
        </Button>
    );
}


export default UserInfoSidebarToggle