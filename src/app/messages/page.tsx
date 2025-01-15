"use client"

import React from 'react'
import UsersList from '../components/messageRoom/UsersList'
import NewChatButton from '../components/messageRoom/NewChatBtn'
import ShowContacts from '../components/messageRoom/ShowContacts'

function Page() {
    const [showContactsSidebar, setShowContactsSidebar] = React.useState(false)

    return (
        <>
            <UsersList showContactsSidebar={showContactsSidebar} selectMessageRoom={undefined} selectedContact={''} />
            <div className="flex-1 overflow-hidden min-h-[90vh] rounded-md bg-foreground m-2 flex flex-col">
                <ShowContacts onClick={() => setShowContactsSidebar(prev => !prev)} />
                <div className="flex items-center gap-2 m-auto w-fit">
                    <h2 className="drop-shadow-lg text-xl">Start texting you Friends</h2>
                    <NewChatButton />
                </div>

            </div>
        </>
    )
}

export default Page