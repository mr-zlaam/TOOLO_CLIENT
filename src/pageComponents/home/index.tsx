import CtaCard from "@/appComponents/ctaCard/ctaCard";
import { Features } from "./features/features";
import { Hero } from "./hero/hero";
import { Testimonials } from "./testimonials/testimonials";
import { ToolsShowcase } from "./tool-showcase/tool-showcase";
import Pricing from "./pricing/pricing";
import Contact from "./contact-us/contact-us";

export const HomeComponents = () => {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      <Hero />
      <ToolsShowcase />
      <Features />
      <Testimonials />
      <CtaCard />
      <Pricing />
      <Contact />
    </main>
  );
};
