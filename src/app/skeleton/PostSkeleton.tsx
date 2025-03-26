import { Skeleton } from "@/components/ui/skeleton"

export default function PostSkeleton() {
  return (
    <div className="relative min-h-[32.771875rem] w-full max-w-2xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto mt-5">
      {/* User header skeleton */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-10 rounded-full bg-zinc-800" />
          <div className="space-y-2">
            <Skeleton className="h-3 w-40 bg-zinc-800" />
            <Skeleton className="h-2 w-20 bg-zinc-800" />
          </div>
        </div>
        <Skeleton className="h-6 w-20 rounded-md bg-zinc-800" />
      </div>

      {/* Post content skeleton */}
      <div className="px-4 pb-3">
        <Skeleton className="h-3 w-full bg-zinc-800 mb-2" />
        <Skeleton className="h-3 w-full bg-zinc-800 mb-2" />
        <Skeleton className="h-3 w-3/4 bg-zinc-800" />
      </div>

      {/* Tags skeleton */}
      <div className="px-4 pb-3 flex items-center gap-2">
        <Skeleton className="h-6 w-16 rounded-full bg-zinc-800" />
        <Skeleton className="h-6 w-6 rounded-full bg-zinc-800 ml-auto" />
      </div>

      {/* Image carousel skeleton */}
      <div className="relative">
        <Skeleton className="w-full h-48 md:h-64 bg-zinc-800" />

        {/* Carousel navigation dots skeleton */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          <Skeleton className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <Skeleton className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <Skeleton className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
          <Skeleton className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
        </div>

        {/* Carousel navigation buttons skeleton */}
        <Skeleton className="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-zinc-700" />
        <Skeleton className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-zinc-700" />
      </div>

      {/* Interaction buttons skeleton */}
      <div className="flex items-center justify-between px-4 py-3">
        <Skeleton className="h-6 w-16 bg-zinc-800 rounded" />
        <Skeleton className="h-6 w-20 bg-zinc-800 rounded" />
        <Skeleton className="h-6 w-16 bg-zinc-800 rounded" />
        <Skeleton className="h-6 w-16 bg-zinc-800 rounded" />
      </div>

      {/* Comment input skeleton */}
      <div className="flex items-center px-4 py-3 border-t border-zinc-800">
        <Skeleton className="h-8 w-8 rounded-full bg-zinc-800" />
        <Skeleton className="flex-1 h-8 mx-3 bg-zinc-800 rounded-full" />
        <Skeleton className="h-8 w-8 rounded-full bg-zinc-800" />
      </div>
    </div>
  )
}

