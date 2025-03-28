import type React from "react";

export interface FeatureType {
  id: string;
  title: string;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

// Component types with children
export interface ChildrenProps {
  children: React.ReactNode;
}

// Container types
export interface ContainerProps extends ChildrenProps {
  className?: string;
  id?: string;
}

// Section types
export interface SectionProps extends ContainerProps {
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}
