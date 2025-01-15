import React from "react";
import ContactsContextProvider from "./CustomerContext/ContactsProvider";

export default function MessageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<ContactsContextProvider>
        <div className="flex h-[50%] sm:h-[100vh] gap-2 relative">
            {children}
        </div>
    </ContactsContextProvider>)
}