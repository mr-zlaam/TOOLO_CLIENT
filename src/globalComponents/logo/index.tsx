import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export interface LogoProps extends React.HTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
}
export default function Logo({ width, height, className }: LogoProps) {
  return (
    <Image
      src="/logo/toolologo.png"
      alt="Logo"
      width={width ?? 100}
      height={height ?? 100}
      className={cn(className)}
    />
  );
}
