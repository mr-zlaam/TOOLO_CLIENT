"use client";
import type { FEATURES } from "@/contants/variables.constant";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Icon } from "@/appComponents/mockIcon/mockIcon";
export const FeatureCard = ({ feature, index }: { feature: (typeof FEATURES)[0]; index: number }) => {
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
