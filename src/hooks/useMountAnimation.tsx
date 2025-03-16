// src/hooks/useMountAnimation.tsx

type MountAnimationOptions = {
  delay?: number;
  duration?: number;
};

export const useMountAnimation = (options: MountAnimationOptions = {}) => {
  const { delay = 0, duration = 500 } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return {
    isVisible,
    animationStyles: {
      transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)"
    }
  };
};

// src/hooks/useScrollAnimation.tsx
import { useEffect, useState, useRef } from "react";

type ScrollAnimationOptions = {
  threshold?: number;
  rootMargin?: string;
};

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px" } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [threshold, rootMargin]);

  return { ref, isInView };
};
