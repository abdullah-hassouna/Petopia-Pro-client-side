import { cn } from "@/lib/utils"
import SelectUser from "../SelectUser"
import { Add } from "iconsax-react"

const NewChatButton = ({ text }: { text?: string | undefined }) => {
    return (
        <SelectUser onSelectUser={console.log}>
            <div className={cn("flex items-center justify-center w-full px-4 gap-2 h-12 bg-primary text-white rounded-md", { "justify-between": text })}>
                {text && <span className={cn("ml-2 hidden lg:inline")}>{text}</span>}
                <Add color="white" style={{ width: 24, height: 24 }} />
            </div>
        </SelectUser>
    )
}

export default NewChatButton