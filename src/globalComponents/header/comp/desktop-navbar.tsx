// src/globalComponents/header/comp/desktop-navbar.tsx
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

// Import the menu data
import { mainNavItems } from "@/data/menu-data";

export default function DesktopNavbar() {
  return (
    <div className="hidden md:flex items-center justify-between w-full">
      <NavigationMenu>
        <NavigationMenuList>
          {mainNavItems.map((item) => {
            // Check if item has children and the children array is not empty
            const hasChildren = Array.isArray(item.children) && item.children.length > 0;

            if (hasChildren) {
              return (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.children?.map((child) => (
                        <ListItem
                          key={child.title}
                          title={child.title}
                          href={child.href}>
                          {child.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            } else {
              return (
                <NavigationMenuItem key={item.title}>
                  <Link
                    href={item.href}
                    legacyBehavior
                    passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.title}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            }
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          asChild>
          <Link href="/auth/signin">Sign In</Link>
        </Button>
        <Button asChild>
          <Link href="/auth/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
