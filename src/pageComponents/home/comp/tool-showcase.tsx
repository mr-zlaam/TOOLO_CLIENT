"use client";
import Link from "next/link";
import { TOOLS_CATEGORIES } from "@/contants/variables.constant";
import { Section } from "@/appComponents/container";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

// Mock import for Icons - in real app you'd import from your icon library
const getIcon = (iconName: string) => {
  return (
    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600", iconName)}>
      <div className="w-5 h-5 bg-current rounded-sm"></div>
    </div>
  );
};

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

const ToolCard = ({ tool, isVisible, delay = 0 }: { tool: (typeof TOOLS_CATEGORIES)[0]["tools"][0]; isVisible: boolean; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}>
      <Link
        href={tool.path}
        className={cn(
          "group relative p-6 rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-300 flex flex-col h-full"
        )}>
        <div className="flex items-start gap-4">
          {getIcon(tool.icon)}

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{tool.name}</h4>

              {tool.isPremium && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500 to-yellow-400 text-white">
                  Premium
                </span>
              )}
            </div>

            <p className="mt-1 text-sm text-gray-600 line-clamp-2">{tool.description}</p>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
          <span className="text-sm font-medium text-blue-600 group-hover:text-blue-800 transition-colors flex items-center">
            Try tool
            <svg
              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};
