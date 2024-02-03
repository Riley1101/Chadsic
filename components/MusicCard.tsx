import * as React from "react";
import { NextImage } from "./NextImage";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Song } from "@/types/songs";

interface Props {
  data: Song;
}
export function MusicCard({ data }: Props) {
  const imageUrl = data?.attributes?.cover?.data?.attributes?.url as string;
  const alt = data?.attributes?.cover?.data?.attributes?.alternativeText;
  return (
    <Card className="shrink-0 w-[300px]">
      <CardHeader>
        <CardTitle className="text-2xl">{data?.attributes?.title}</CardTitle>
        <CardDescription>{data?.attributes?.description}</CardDescription>
      </CardHeader>
      <CardContent className="justify-end">
        <NextImage
          src={imageUrl}
          alt={alt || `Image of ${data?.attributes?.title}`}
          width={200}
          height={200}
          className="w-full object-cover  aspect-video rounded-md transition-transform cursor-pointer"
        />
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>
          <PlayIcon className="mr-2 " /> Play
        </Button>
      </CardFooter>
    </Card>
  );
}
