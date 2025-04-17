import { cn } from "@/lib/utils"

interface UserSkeletonProps {
    className?: string
}

export function UserSkeleton({ className }: UserSkeletonProps) {
    return (
        <div className={cn("bg-green-50 p-4 rounded-md border border-green-100", className)}>
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
    )
}
