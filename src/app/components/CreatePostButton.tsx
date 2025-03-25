import { Button } from '@/components/ui/button'
import { AddSquare } from 'iconsax-react'
import clsx from 'clsx'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useState } from 'react'
import { IoArrowDown } from 'react-icons/io5'
import FormDialog from './PostForms/FormDialog'

const CreatePostButton = (props: {
  title: string
  options: { title: string; value: string }[]
  className?: string
}) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [option, setOption] = useState({ title: '', id: 0 })

  const handleOpenDialog = (option: { title: string; id: number }) => {
    setMenuOpen(false)
    setDialogOpen(true)
    setOption(option)
  }
  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  return (
    <div className={clsx('flex gap-0 overflow-clip items-center', props.className)}>
      <Button className="rounded-l-[20] rounded-r-[0]" onClick={()=>setMenuOpen(!menuOpen)}>
        <AddSquare size="32" color="white" />
        {props.title}
      </Button>
      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger className="flex bg-primary hover:bg-primary-90 rounded-l-[0] rounded-r-[20] h-[38] w-fit ring-0 focus:ring-background px-1 border border-background hidden-arrow">
          <div className="flex items-center w-full h-full">
            <IoArrowDown className="w-4 h-4 mx-1 text-white" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="shadow-md rounded-md w-32">
          {props.options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleOpenDialog({ title: option.title, id: +option.value })}
            >
              {option.title}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <FormDialog open={dialogOpen} handleClose={handleCloseDialog} tag={{ title: option.title, id: option.id }} />
    </div>
  )
}
export default CreatePostButton
