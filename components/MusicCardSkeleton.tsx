import { Skeleton } from "@/components/ui/skeleton";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MusicCardSkeleton() {
  return (
    <Card className="shrink-0 w-[300px]">
      <CardHeader>
        <CardTitle className="text-2xl">
          <Skeleton className="h-4 w-[250px] mb-4" />
          <Skeleton className="h-3 w-[200px] mb-2" />
          <Skeleton className="h-3 w-[100px]" />
        </CardTitle>
      </CardHeader>
      <CardContent className="justify-end">
        <Skeleton className="aspect-video  w-full  rounded-xl" />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Skeleton className="h-[42px] w-[90px] rounded-xl" />
      </CardFooter>
    </Card>
  );
}
