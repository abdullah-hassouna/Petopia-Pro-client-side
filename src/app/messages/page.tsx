"use client"

import React from 'react'
import UsersList from '../components/messageRoom/UsersList'
import NewChatButton from '../components/messageRoom/NewChatBtn'
import ShowContacts from '../components/messageRoom/ShowContacts'
import { ContactsContext } from './CustomerContext/ContactsProvider'
import { useRouter } from 'next/navigation'

function Page() {
    const router = useRouter();

    const { selectedContact, setShowContactsSidebar, showContactsSidebar } = React.useContext(ContactsContext)

    function selectMessageRoom(roomId: string) {
        router.push(`/messages/${roomId}`)
    }

    return (
        <>
            <UsersList
                showContactsSidebar={showContactsSidebar}
                selectMessageRoom={selectMessageRoom}
                selectedContact={selectedContact} />
            <div className="flex-1 overflow-hidden min-h-[90vh] rounded-md bg-foreground m-2 flex flex-col">
                <ShowContacts onClick={() => setShowContactsSidebar((prev: boolean) => !prev)} />
                <div className="flex items-center gap-2 m-auto w-fit">
                    <h2 className="drop-shadow-lg text-xl">Start texting you Friends</h2>
                    <NewChatButton />
                </div>

            </div>
        </>
    )
}

export default Page