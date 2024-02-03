import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@radix-ui/react-icons";
import { STATIC_ENDPOINT } from "@/lib/utils";
import { dynamicBlurDataUrl } from "@/lib/data-blur";

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
  const [blurHash, setBlurHash] = useState<string>("");

  const ImageUrl = `${STATIC_ENDPOINT}${
    data?.attributes?.cover?.data?.attributes?.url as string
  }`;

  useEffect(() => {
    dynamicBlurDataUrl(ImageUrl).then((blur) => setBlurHash(blur));
  }, [ImageUrl]);

  return (
    <Card className="shrink-0 w-[300px]">
      <CardHeader>
        <CardTitle className="text-2xl">{data?.attributes?.title}</CardTitle>
        <CardDescription>{data?.attributes?.description}</CardDescription>
      </CardHeader>
      <CardContent className="justify-end">
        <Image
          src={ImageUrl}
          alt={
            data?.attributes?.cover?.data?.attributes?.alternativeText as string
          }
          blurDataURL={blurHash}
          width={200}
          height={200}
          placeholder={blurHash ? "blur" : "empty"}
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
