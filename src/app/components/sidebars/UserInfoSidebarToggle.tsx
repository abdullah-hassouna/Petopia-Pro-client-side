"use client"

import { Button } from "@/components/ui/button";
import { AppDispatch, RootState, userInfoSidebarToggle } from "@/lib/store";
import { Menu } from "iconsax-react";
import { useDispatch, useSelector, } from "react-redux";

function UserInfoSidebarToggle() {
    const isOpen = useSelector((state: RootState) => state.userSidebar.isOpen);

    const dispatch: AppDispatch = useDispatch();
    const toggleSidebar = () => dispatch(userInfoSidebarToggle());


    return (
        <Button className="bg-foreground" onClick={toggleSidebar}>
            <Menu className="fill-primary" size={40} />
            {isOpen ? "open" : "closed"}
        </Button>
    );
}


export default UserInfoSidebarToggle