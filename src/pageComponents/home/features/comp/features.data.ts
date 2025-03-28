export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
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
