import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { AddSquare } from 'iconsax-react'
import clsx from 'clsx';
const CreatePostButton = (props: { title: string; options: { title: string; value: string }[], className?: string }) => {
  return (
    <div className={clsx("flex gap-0 overflow-clip items-center", props.className)}>
      <Button className="rounded-l-[20] rounded-r-[0]">
        <AddSquare size="32" color="white" />
        {props.title}
      </Button>
      <Select>
        <SelectTrigger className=" bg-primary-90 rounded-l-[0] rounded-r-[20] h-[38] w-fit">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {props.options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
export default CreatePostButton
