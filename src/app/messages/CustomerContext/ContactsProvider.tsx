"use client"

import React from "react"

const ContactsContext = React.createContext({
    selectedContact: "",
    showContactsSidebar: false,
    setSelectedContact: function (params: string) { },
    setShowContactsSidebar: function (params: boolean | Function) { },
})

export default function ContactsContextProvider({ children }: { children: React.ReactNode }) {

    const [selectedContact, setSelectedContact] = React.useState<string | undefined>("")
    const [showContactsSidebar, setShowContactsSidebar] = React.useState(false)



    return <ContactsContext.Provider value={{
        selectedContact,
        showContactsSidebar,
        setSelectedContact,
        setShowContactsSidebar
    }}>
        {children}
    </ContactsContext.Provider>

}

export { ContactsContext }