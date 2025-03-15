"use client";
// src/globalComponents/header/comp/mobile-navbar.tsx
import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Import the menu data
import { mainNavItems } from "@/data/menu-data";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // When closing the menu, reset expanded sections
    if (isOpen) {
      setExpandedSection(null);
    }
  };

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest(".mobile-menu-container")) {
        setIsOpen(false);
        setExpandedSection(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className="relative z-50"
        onClick={toggleMenu}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />

      {/* Mobile menu panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-background p-6 shadow-lg transition-transform duration-300 mobile-menu-container",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            {mainNavItems.map((item) => {
              // Check if item has children and the children array is not empty
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;

              return (
                <div
                  key={item.title}
                  className="border-b border-gray-200 pb-2">
                  {hasChildren ? (
                    <div>
                      <button
                        className="flex w-full items-center justify-between py-2 text-left font-medium"
                        onClick={() => toggleSection(item.title)}>
                        {item.title}
                        <svg
                          className={cn("h-4 w-4 transition-transform", expandedSection === item.title ? "rotate-180" : "")}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={cn(
                          "mt-2 space-y-3 overflow-hidden transition-all duration-300",
                          expandedSection === item.title ? "max-h-96" : "max-h-0"
                        )}>
                        {item.children?.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href}
                            className="block pl-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                            onClick={toggleMenu}>
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 font-medium"
                      onClick={toggleMenu}>
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Auth buttons */}
          <div className="mt-auto pt-6 space-y-4">
            <Button
              variant="outline"
              className="w-full"
              asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button
              className="w-full"
              asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
