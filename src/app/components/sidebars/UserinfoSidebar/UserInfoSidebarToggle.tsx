"use client"

import { Button } from "@/components/ui/button";
import { AppDispatch, RootState, userInfoSidebarToggle } from "@/lib/reduxStore/store";
import clsx from "clsx";
import { ArrowLeft, } from "iconsax-react";
import { useDispatch, useSelector, } from "react-redux";

function UserInfoSidebarToggle({ className }: { className?: string }) {
    const isOpen = useSelector((state: RootState) => state.userSidebar.isOpen);

    const dispatch: AppDispatch = useDispatch();
    const toggleSidebar = () => dispatch(userInfoSidebarToggle());


    return (
        <Button className={clsx(" hidden sm:block px-auto bg-primary opacity-70 hover:opacity-100 border border-borderColorborder shadow-none", className)} onClick={toggleSidebar}>
            <ArrowLeft className={clsx("fill-background", { "animate-flipedArrowToLeft": !isOpen, "animate-flipedArrowToRight": isOpen, })} />
        </Button>
    );
}


export default UserInfoSidebarToggle