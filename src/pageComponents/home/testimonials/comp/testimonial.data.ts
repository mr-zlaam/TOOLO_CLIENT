export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

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
