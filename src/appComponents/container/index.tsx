// src/appComponents/container/index.tsx
import { cn } from "@/lib/utils";
import type { ContainerProps } from "@/types";
import React from "react";

export const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div
      id={id}
      className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};

export const Section = ({
  children,
  className,
  id,
  title,
  subtitle,
  titleClassName,
  subtitleClassName
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) => {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", className)}>
      <Container>
        {(title !== undefined || subtitle !== undefined) && (
          <div className="mb-12 text-center">
            {title !== undefined && <h2 className={cn("text-3xl font-bold tracking-tight md:text-4xl", titleClassName)}>{title}</h2>}
            {subtitle !== undefined && <p className={cn("mt-4 text-lg text-gray-600  ", subtitleClassName)}>{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};
