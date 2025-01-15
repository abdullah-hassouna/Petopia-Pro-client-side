import { cn } from "@/lib/utils"
import SelectUser from "../SelectUser"
import { Add } from "iconsax-react"

const NewChatButton = ({ text }: { text?: string | undefined }) => {
    return (
        <SelectUser onSelectUser={console.log}>
            <div className="flex items-center justify-between w-full px-4 gap-2 h-12 bg-primary text-white rounded-md">
                <span className={cn("ml-2 hidden lg:inline", { "hidden": !text })}>{text}</span><Add color="white" style={{ width: 24, height: 24 }} />
            </div>
        </SelectUser>
    )
}

export default NewChatButton