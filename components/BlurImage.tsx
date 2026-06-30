"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

const BLUR_DATA =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

export default function BlurImage({ className = "", ...props }: ImageProps & { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      placeholder="blur"
      blurDataURL={BLUR_DATA}
      onLoad={() => setLoaded(true)}
      className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
    />
  );
}
