import { Button } from "@/components/ui/button"
import { ArrowLeft } from "iconsax-react"

const ShowContacts = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <Button size="icon" className="bg-transparent" onClick={onClick}>
            <ArrowLeft color="gray" className="h-5 w-5" />
        </Button>
    )
}

export default ShowContacts
