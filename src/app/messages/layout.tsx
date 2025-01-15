"use client"

import React, { createContext } from "react";

export default function Messagelayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [selectedContact, setSelectedContact] = React.useState<string | undefined>("")
    const [showContactsSidebar, setShowContactsSidebar] = React.useState(false)


    const ContactsContext = createContext({
        selectedContact,
        showContactsSidebar,
        setSelectedContact,
        setShowContactsSidebar
    })

    return
    <ContactsContext.Provider value={{
        selectedContact,
        showContactsSidebar,
        setSelectedContact,
        setShowContactsSidebar
    }}>
        <div className="flex h-[50%] sm:h-[100vh] gap-2 relative">
            {children}
        </div>
    </ContactsContext.Provider>
}