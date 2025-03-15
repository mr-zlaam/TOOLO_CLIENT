import { cn } from "@/lib/utils";
import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function Container({ children, className }: ContainerProps) {
  return (
    <React.Fragment>
      <section className={cn("container min-h-[100%] max-w-[95%] overflow-auto flex flex-col", className)}>{children}</section>
    </React.Fragment>
  );
}
