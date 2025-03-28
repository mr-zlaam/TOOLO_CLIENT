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
