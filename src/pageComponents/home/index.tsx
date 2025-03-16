// src/globalComponents/home/index.tsx
// import { Features } from "./features";
// import { Testimonials } from "./testimonials";
// import { Pricing } from "./pricing";
// import { Contact } from "./contact";
import { Hero } from "./comp/hero";
import { ToolsShowcase } from "./comp/tool-showcase";

export const HomeComponents = () => {
  return (
    <main className="flex flex-col items-center w-full overflow-hidden">
      <Hero />
      <ToolsShowcase />
      {/* <Features /> */}
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Contact /> */}
    </main>
  );
};
