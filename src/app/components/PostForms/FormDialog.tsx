'use client'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '@/components/ui/dialog'
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
    <Dialog open={open} onOpenChange={(isOpen) => (isOpen ? null : handleClose())}>
      <DialogContent
        className="bg-foreground border border-background outline-none"
        onInteractOutside={(e) => e.preventDefault()}
      >
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
