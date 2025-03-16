export interface MenuItem {
  title: string;
  href: string;
  description?: string;
  children?: MenuItem[];
}

export const mainNavItems: MenuItem[] = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "See Features",
    href: "/features",
    children: [
      {
        title: "Blazing-Fast Conversions 🚀",
        href: "/features/fast-conversions",
        description: "Convert documents and images efficiently without delays."
      },
      {
        title: "Batch Processing 🗂️",
        href: "/features/batch-processing",
        description: "Premium users can convert multiple files at once."
      },
      {
        title: "Privacy-Focused 🔒",
        href: "/features/privacy",
        description: "No data storage, no tracking of user files—everything is processed in real-time."
      },
      {
        title: "AI-Powered OCR (Coming Soon) 🤖",
        href: "/features/ai-ocr",
        description: "Future feature to extract text from images and scanned documents."
      },
      {
        title: "Intuitive & User-Friendly UI 🎨",
        href: "/features/ui",
        description: "Clean, minimal design to keep things simple."
      },
      {
        title: "Multi-Format Support 🔄",
        href: "/features/formats",
        description: "Convert between various document and image formats effortlessly."
      },
      {
        title: "Subscription Perks 💎",
        href: "/features/premium",
        description: "Higher limits, priority processing, batch conversion, and more for premium users."
      },
      {
        title: "One-Click Downloads ⏬",
        href: "/features/downloads",
        description: "No unnecessary steps—just upload, convert, and download instantly."
      },
      {
        title: "Cross-Platform Accessibility 🌍",
        href: "/features/cross-platform",
        description: "Works on any device, no installation required."
      },
      {
        title: "Analytics & Usage Insights 📊",
        href: "/features/analytics",
        description: "Dashboard for premium users to see their conversion history and usage."
      }
    ]
  },
  {
    title: "Checkout Tools",
    href: "/tools",
    children: [
      {
        title: "File Converter",
        href: "/tools/file-converter",
        description: "Convert files between different formats quickly and easily."
      },
      {
        title: "Image Editor",
        href: "/tools/image-editor",
        description: "Edit and enhance your images with our powerful editing tools."
      },
      {
        title: "PDF Tools",
        href: "/tools/pdf",
        description: "Create, edit, merge, and convert PDF files."
      },
      {
        title: "Text Tools",
        href: "/tools/text",
        description: "Useful tools for text manipulation and conversion."
      },
      {
        title: "Code Formatter",
        href: "/tools/code-formatter",
        description: "Format and beautify your code in various programming languages."
      },
      {
        title: "Calculator",
        href: "/tools/calculator",
        description: "Perform various calculations online with our versatile calculator."
      }
    ]
  },
  {
    title: "See Pricing",
    href: "/pricing"
  },
  {
    title: "Contact Us",
    href: "/contact"
  }
];
