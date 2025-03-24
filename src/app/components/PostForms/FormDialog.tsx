'use client'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Forms from './Form'
import { PostDetails } from '@/app/interfaces/postInterface'

const FormDialog = ({
  open,
  handleClose,
  tag,
  post,
}: {
  open: boolean
  handleClose: () => void
  tag: { title: string; id: number }
  post?: PostDetails
}) => {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => (isOpen ? null : handleClose())}>
      <DialogContent
        className="bg-foreground border border-background outline-none "
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>
            {post ? 'Edit' : 'Create new'} {tag.title.toLowerCase()} post{' '}
          </DialogTitle>
          <DialogDescription>Fill the form below to create a new {tag.title} post</DialogDescription>
        </DialogHeader>
        <Forms tag={tag} postData={post} />
      </DialogContent>
    </Dialog>
  )
}
export default FormDialog
