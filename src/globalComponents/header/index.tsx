import * as React from "react";
import Link from "next/link";

import DesktopNavbar from "./comp/desktop-navbar";
import MobileNavbar from "./comp/mobile-navbar";
import Logo from "@/globalComponents/logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 bg-background shadow-md">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="flex items-center">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden md:block md:flex-grow md:ml-10">
          <DesktopNavbar />
        </div>

        {/* Mobile Navigation - visible only on mobile */}
        <div className="md:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}
