import type React from "react";

export interface FeatureType {
  id: string;
  title: string;
}
// src/types/index.ts

// Tool types
export interface Tool {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
  isPremium: boolean;
}

export interface ToolCategory {
  id: string;
  name: string;
  tools: Tool[];
}

// Feature types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

// Pricing plan types
export interface PricingFeature {
  title: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  billingPeriod: "monthly" | "yearly";
  currency: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant?: "default" | "outline" | "premium";
}

// Animation types
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
