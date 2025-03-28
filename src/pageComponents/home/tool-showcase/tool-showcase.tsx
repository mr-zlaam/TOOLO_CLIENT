"use client";
import { Section } from "@/appComponents/container";
import { useInView } from "react-intersection-observer";
import { TOOLS_CATEGORIES } from "./comp/tool-showcase.data";
import { ToolCard } from "./comp/toolCard";

export const ToolsShowcase = () => {
  return (
    <Section
      id="tools-showcase"
      title="Our Tools"
      subtitle="Discover our powerful collection of online tools designed to make your life easier"
      className="bg-white">
      <div className="space-y-16">
        {TOOLS_CATEGORIES.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </Section>
  );
};

const CategorySection = ({ category }: { category: (typeof TOOLS_CATEGORIES)[0] }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div
      ref={ref}
      className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.tools.map((tool, index) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            isVisible={inView}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
};
