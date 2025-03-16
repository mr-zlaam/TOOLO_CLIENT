"use client";
import React from "react";
import Link from "next/link";

// Social media icons - you can replace these with your preferred icon library
import {
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  LocateIcon,
  PhoneCall,
  Heart,
  Shield,
  Zap,
  Globe,
  Lock,
  FileCheck
} from "lucide-react";
import Logo from "@/globalComponents/logo";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
    aria-label={typeof children === "string" ? children : undefined}>
    {children}
  </Link>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <Link
    href={href}
    className="p-2 rounded-full bg-white hover:bg-blue-600 text-gray-500 hover:text-white shadow-sm hover:shadow-md transition-all duration-200"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer">
    {icon}
  </Link>
);

// Tool type definition for additional content
interface Tool {
  name: string;
  href: string;
  description: string;
}

// Feature type definition
interface Feature {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Features we provide
  const features: Feature[] = [
    {
      name: "100% Private & Secure",
      description: "Your files never leave your browser - we can't access your data",
      icon: (
        <Shield
          size={18}
          className="text-blue-600"
        />
      )
    },
    {
      name: "Real-time Processing",
      description: "All conversions happen instantly without server uploads",
      icon: (
        <Zap
          size={18}
          className="text-blue-600"
        />
      )
    },
    {
      name: "No Data Storage",
      description: "We don't store any of your files or content",
      icon: (
        <Lock
          size={18}
          className="text-blue-600"
        />
      )
    },
    {
      name: "Works Everywhere",
      description: "Use on any device with a modern web browser",
      icon: (
        <Globe
          size={18}
          className="text-blue-600"
        />
      )
    },
    {
      name: "High-Quality Output",
      description: "Maintain the highest quality for your converted files",
      icon: (
        <FileCheck
          size={18}
          className="text-blue-600"
        />
      )
    }
  ];

  // More descriptive tool names with examples
  const popularTools: Tool[] = [
    {
      name: "PDF Compressor",
      href: "/tools/pdf/compress",
      description: "Reduce PDF file size without losing quality"
    },
    {
      name: "Image Converter",
      href: "/tools/image-converter",
      description: "Convert between JPG, PNG, WebP and more"
    },
    {
      name: "Text Case Converter",
      href: "/tools/text/case-converter",
      description: "Change text case with one click"
    },
    {
      name: "Code Beautifier",
      href: "/tools/code-formatter",
      description: "Format and beautify code in any language"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 text-gray-800 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {/* Company & Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center mb-8">
              <Link
                href="/"
                aria-label="Toolo Home">
                <Logo />
              </Link>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Toolo provides powerful online utilities and conversion tools to make your work easier. Convert files, edit images, and process
              documents right in your browser.
            </p>
            <div className="flex space-x-3">
              <SocialLink
                href="https://twitter.com/tooloapp"
                icon={<Twitter size={18} />}
                label="Follow on Twitter"
              />
              <SocialLink
                href="https://facebook.com/tooloapp"
                icon={<Facebook size={18} />}
                label="Follow on Facebook"
              />
              <SocialLink
                href="https://instagram.com/tooloapp"
                icon={<Instagram size={18} />}
                label="Follow on Instagram"
              />
              <SocialLink
                href="https://linkedin.com/company/tooloapp"
                icon={<Linkedin size={18} />}
                label="Follow on LinkedIn"
              />
              <SocialLink
                href="https://github.com/tooloapp"
                icon={<Github size={18} />}
                label="Follow on GitHub"
              />
            </div>
          </div>

          {/* Features We Provide Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-600">Features We Provide</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start">
                  <div className="mr-3 mt-0.5">{feature.icon}</div>
                  <div>
                    <span className="block text-sm font-medium text-gray-800">{feature.name}</span>
                    <span className="text-xs text-gray-500">{feature.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-600">Popular Tools</h3>
            <ul className="space-y-4">
              {popularTools.map((tool) => (
                <li
                  key={tool.href}
                  className="group">
                  <Link
                    href={tool.href}
                    className="block group">
                    <span className="block text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">{tool.name}</span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">{tool.description}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/tools"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View all tools
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-blue-600">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <LocateIcon className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-600 text-sm">123 Conversion Lane, Digital City, 54321</span>
              </div>
              <div className="flex items-center">
                <PhoneCall className="mr-2 h-5 w-5 text-blue-600" />
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-600" />
                <a
                  href="mailto:info@toolo.app"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm">
                  info@toolo.app
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="text-base font-medium mb-3 text-gray-800">Subscribe to our newsletter</h4>
              <form
                className="flex mt-2"
                onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-white border border-gray-300 text-gray-800 text-sm rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 w-full shadow-sm"
                  aria-label="Email for newsletter"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium shadow-sm"
                  aria-label="Subscribe">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section with Legal Links */}
        <div className="border-t border-gray-200 pt-10 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center py-4">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Toolo. All rights reserved.{" "}
              <span className="inline-flex items-center text-xs ml-2">
                Made with{" "}
                <Heart
                  size={12}
                  className="mx-1 text-red-500"
                />{" "}
                by Toolo Team
              </span>
            </div>
            <div className="flex flex-wrap space-x-6 justify-center">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
              <FooterLink href="/cookies">Cookies</FooterLink>
              <FooterLink href="/sitemap">Sitemap</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
