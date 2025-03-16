import { Contact } from "./comp/contact-us";
import { Features } from "./comp/features";
import { Hero } from "./comp/hero";
import { Pricing } from "./comp/pricing";
import { Testimonials } from "./comp/testimonials";
import { ToolsShowcase } from "./comp/tool-showcase";

export const HomeComponents = () => {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      <Hero />
      <ToolsShowcase />
      <Features />
      <Testimonials />
      <Pricing />
      <Contact />
    </main>
  );
};
