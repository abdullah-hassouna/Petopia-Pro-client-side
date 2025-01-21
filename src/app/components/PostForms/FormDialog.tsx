'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Forms from './Form'

const FormDialog = ({
  open,
  handleClose,
  tag,
}: {
  open: boolean
  handleClose: () => void
  tag: { title: string; id: number }
}) => {
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-foreground border border-background outline-none">
        <DialogHeader>
          <DialogTitle>Create New {tag.title} Post </DialogTitle>
          <DialogDescription>Fill the form below to create a new {tag.title} post</DialogDescription>
        </DialogHeader>
        <Forms tag={tag} />
      </DialogContent>
    </Dialog>
  )
}
export default FormDialog
