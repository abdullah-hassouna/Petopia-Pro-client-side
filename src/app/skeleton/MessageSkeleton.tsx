import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import React from 'react'

export default function MessageSkeleton({index}:{index:number}) {
  return (
    <Skeleton
    className={cn("min-h-20 rounded-lg px-4 py-2 max-w-[70%] shadow-sm", {
      "ml-auto": (index % 2),
      "mr-auto": !(index % 2),
      "bg-icon-color": (index % 2),
      "bg-background": !(index % 2),
    })}
  >
  </Skeleton>
  )
}