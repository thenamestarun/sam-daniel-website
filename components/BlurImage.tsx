"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

// Dark shimmer placeholder — 8×8 dark gray, base64 encoded
const BLUR_DATA =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVQI12NgYGD4z8BQDwAEgAF/QualIQAAAABJRU5ErkJggg==";

export default function BlurImage({ className = "", style, ...props }: ImageProps & { className?: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      placeholder="blur"
      blurDataURL={BLUR_DATA}
      onLoad={() => setLoaded(true)}
      style={{ ...style, transition: "opacity 0.9s ease" }}
      className={`${loaded ? "opacity-100" : "opacity-0"} ${className}`}
    />
  );
}
