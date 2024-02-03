import React from "react";

import { dynamicBlurDataUrl } from "@/lib/data-blur";
import Image from "next/image";
import { useState, useEffect } from "react";

import { STATIC_ENDPOINT } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function NextImage({
  className,
  src,
  width,
  height,
  alt,
  ...props
}: Props) {
  const [blurHash, setBlurHash] = useState<string>("");
  const ImageUrl = `${STATIC_ENDPOINT}${src}`;
  useEffect(() => {
    dynamicBlurDataUrl(ImageUrl).then((blur) => setBlurHash(blur));
  }, [ImageUrl]);
  return (
    <Image
      src={ImageUrl}
      {...props}
      width={width}
      height={height}
      alt={alt}
      blurDataURL={blurHash}
      placeholder={blurHash ? "blur" : "empty"}
      className={className}
    />
  );
}
