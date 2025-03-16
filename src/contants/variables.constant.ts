export const SITE_NAME = "TOOLO";
// src/constants/variables.constant.ts
import type { ToolCategory, Feature, Testimonial, PricingPlan } from "@/types";

// Main app constants
export const APP_NAME = "Toolo";
export const APP_DESCRIPTION = "A platform that offers various online utilities and conversion tools";
export const APP_TAGLINE = "Every Tool You Need, Right in Your Browser";

// Hero section constants
export const HERO_TITLE = "Transform Files with Ease";
export const HERO_SUBTITLE = "Powerful utilities and conversion tools at your fingertips, no installation required";
export const HERO_CTA_PRIMARY = "Try for Free";
export const HERO_CTA_SECONDARY = "Explore Tools";

// Tool categories and tools
export const TOOLS_CATEGORIES: ToolCategory[] = [
  {
    id: "file-conversion",
    name: "File Conversion",
    tools: [
      {
        id: "image-converter",
        name: "Image Converter",
        description: "Convert images between JPG, PNG, WebP, and more",
        icon: "ImageIcon",
        path: "/tools/image-converter",
        isPremium: false
      },
      {
        id: "pdf-converter",
        name: "PDF Converter",
        description: "Convert documents to and from PDF format",
        icon: "FileIcon",
        path: "/tools/pdf-converter",
        isPremium: false
      },
      {
        id: "audio-converter",
        name: "Audio Converter",
        description: "Convert audio files between MP3, WAV, and more",
        icon: "MusicIcon",
        path: "/tools/audio-converter",
        isPremium: true
      }
    ]
  },
  {
    id: "image-editing",
    name: "Image Editing",
    tools: [
      {
        id: "image-resizer",
        name: "Image Resizer",
        description: "Resize and crop images with precision",
        icon: "CropIcon",
        path: "/tools/image-resizer",
        isPremium: false
      },
      {
        id: "image-compressor",
        name: "Image Compressor",
        description: "Compress images without losing quality",
        icon: "CompressIcon",
        path: "/tools/image-compressor",
        isPremium: false
      },
      {
        id: "background-remover",
        name: "Background Remover",
        description: "Remove backgrounds from images automatically",
        icon: "ScissorsIcon",
        path: "/tools/background-remover",
        isPremium: true
      }
    ]
  },
  {
    id: "pdf-tools",
    name: "PDF Tools",
    tools: [
      {
        id: "pdf-merger",
        name: "PDF Merger",
        description: "Combine multiple PDFs into one document",
        icon: "MergeIcon",
        path: "/tools/pdf-merger",
        isPremium: false
      },
      {
        id: "pdf-compressor",
        name: "PDF Compressor",
        description: "Reduce the size of PDF files",
        icon: "MinimizeIcon",
        path: "/tools/pdf-compressor",
        isPremium: false
      },
      {
        id: "pdf-editor",
        name: "PDF Editor",
        description: "Edit text and images in PDF files",
        icon: "EditIcon",
        path: "/tools/pdf-editor",
        isPremium: true
      }
    ]
  }
];

// Features list
export const FEATURES: Feature[] = [
  {
    id: "privacy",
    title: "Privacy Focused",
    description: "All processing happens in your browser. We don't store your files or data.",
    icon: "ShieldIcon"
  },
  {
    id: "speed",
    title: "Lightning Fast",
    description: "Optimized algorithms ensure your files are processed quickly and efficiently.",
    icon: "ZapIcon"
  },
  {
    id: "cross-platform",
    title: "Use Anywhere",
    description: "Works on any device with a browser - no downloads or installations required.",
    icon: "GlobeIcon"
  },
  {
    id: "multi-format",
    title: "Multi-Format Support",
    description: "Support for a wide range of file formats across all our tools.",
    icon: "FileTypeIcon"
  },
  {
    id: "batch-processing",
    title: "Batch Processing",
    description: "Process multiple files at once with our premium subscription.",
    icon: "LayersIcon"
  },
  {
    id: "no-limits",
    title: "No Size Limits",
    description: "Process files of any size with our premium subscription.",
    icon: "MaximizeIcon"
  }
];

// Testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Alex Johnson",
    role: "Graphic Designer",
    company: "Creative Studios",
    content: "Toolo has completely streamlined my workflow. The image compression tool preserves quality while significantly reducing file sizes.",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Sarah Miller",
    role: "Content Manager",
    company: "Digital Media Inc",
    content: "The PDF tools have saved our team countless hours. Being able to merge and edit PDFs directly in the browser is game-changing.",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Michael Zhang",
    role: "Web Developer",
    company: "Tech Solutions",
    content:
      "As a developer, I appreciate the code formatting tools. They're fast, support multiple languages, and have great options for customization.",
    rating: 4
  }
];

// Pricing plans
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    description: "Basic access to essential tools",
    price: 0,
    billingPeriod: "monthly",
    currency: "USD",
    buttonText: "Get Started",
    buttonVariant: "outline",
    features: [
      { title: "Basic tool access", included: true },
      { title: "Process up to 5 files per day", included: true },
      { title: "Max file size: 10MB", included: true },
      { title: "Standard processing speed", included: true },
      { title: "Batch processing", included: false },
      { title: "Priority support", included: false },
      { title: "Advanced features", included: false },
      { title: "Analytics dashboard", included: false }
    ]
  },
  {
    id: "premium",
    name: "Premium",
    description: "Enhanced features for professionals",
    price: 9.99,
    billingPeriod: "monthly",
    currency: "USD",
    buttonText: "Upgrade Now",
    buttonVariant: "default",
    isPopular: true,
    features: [
      { title: "Full access to all tools", included: true },
      { title: "Unlimited file processing", included: true },
      { title: "Max file size: 1GB", included: true },
      { title: "Faster processing speeds", included: true },
      { title: "Batch processing", included: true },
      { title: "Priority support", included: true },
      { title: "Advanced features", included: true },
      { title: "Analytics dashboard", included: true }
    ]
  }
];

// Contact section
export const CONTACT = {
  title: "Need Help?",
  subtitle: "Our team is here to assist you with any questions or issues",
  email: "support@toolo.app",
  response_time: "24 hours"
};
