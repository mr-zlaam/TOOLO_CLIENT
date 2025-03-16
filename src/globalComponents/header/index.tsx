"use client";
import * as React from "react";
import Link from "next/link";
import DesktopNavbar from "./comp/desktop-navbar";
import MobileNavbar from "./comp/mobile-navbar";
import Logo from "@/globalComponents/logo";
import { Container } from "@/appComponents/container";

export default function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 w-full py-4 transition-all duration-300 ${
        scrolled ? "bg-gradient-to-b from-blue-50 to-white " : "bg-white/90  border-b-[1px]"
      }`}>
      <Container>
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center justify-center">
              <Logo
                width={80}
                height={80}
              />
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
      </Container>
    </header>
  );
}
