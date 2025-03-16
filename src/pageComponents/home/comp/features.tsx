"use client";
import { FEATURES } from "@/contants/variables.constant";
import { Section } from "@/appComponents/container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Mock icon component
const Icon = ({ name }: { name: string }) => (
  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600", name)}>
    <div className="w-6 h-6 bg-current rounded-md"></div>
  </div>
);

export const Features = () => {
  return (
    <Section
      id="features"
      title="Why Choose Toolo"
      subtitle="Our platform is designed with privacy, performance, and usability in mind"
      className="bg-gray-50">
      <div className="relative">
        {/* Background decorative element */}
        <div className="hidden lg:block absolute top-0 right-0 -mt-24 -mr-24">
          <div className="w-64 h-64 bg-blue-50 rounded-full opacity-70 blur-3xl"></div>
        </div>

        {/* Features grid */}
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

const FeatureCard = ({ feature, index }: { feature: (typeof FEATURES)[0]; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1
      }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Icon name={feature.icon} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
        <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
      </div>
    </motion.div>
  );
};
