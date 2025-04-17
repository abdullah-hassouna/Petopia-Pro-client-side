import { cn } from "@/lib/utils"

interface CommentSkeletonProps {
    className?: string
}

export function CommentSkeleton({ className }: CommentSkeletonProps) {
    return (
        <div className={cn("bg-green-50 p-4 rounded-md border border-green-100", className)}>
            <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
                    <div>
                        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />

                    <div className="h-4 w-4 rounded bg-gray-200 animate-pulse" />
                </div>
            </div>
            <div className="mt-3 space-y-2">
                <div className="h-3 bg-gray-200 rounded animate-pulse w-full" />
                <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6" />
            </div>
        </div>
    )
}
