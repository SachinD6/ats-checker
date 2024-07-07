import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 my-12">
      <Skeleton className="h-[200px] w-full rounded-xl" />
      <div className="gap-4 flex">
        <Skeleton className="h-[125px] w-1/2" />
        <Skeleton className="h-[125px] w-1/2" />
      </div>
    </div>
  )
}
