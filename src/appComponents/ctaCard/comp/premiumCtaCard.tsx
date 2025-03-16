"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface PremiumCtaCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

const PremiumCtaCard: React.FC<PremiumCtaCardProps> = ({ title, description, buttonText, buttonHref, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("relative overflow-hidden rounded-2xl border", className)}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white overflow-hidden">
        {/* Geometric shapes */}
        <motion.div
          initial={{ rotate: 0, x: "100%", y: "20%" }}
          animate={inView ? { rotate: 15, x: "80%", y: "10%" } : { rotate: 0, x: "100%", y: "20%" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute h-64 w-64 rounded-3xl bg-blue-500/20 backdrop-blur-sm"
        />
        <motion.div
          initial={{ rotate: 0, x: "90%", y: "70%" }}
          animate={inView ? { rotate: -10, x: "70%", y: "60%" } : { rotate: 0, x: "90%", y: "70%" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute h-80 w-80 rounded-full bg-yellow-400/80"
        />
        <motion.div
          initial={{ rotate: 0, x: "80%", y: "0%" }}
          animate={inView ? { rotate: 20, x: "75%", y: "-10%" } : { rotate: 0, x: "80%", y: "0%" }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="absolute h-40 w-40 rounded-lg bg-pink-500/80"
        />

        {/* Small decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute top-1/4 right-1/3 h-5 w-5 rounded-full bg-blue-600"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="absolute top-2/3 right-1/4 h-4 w-4 text-yellow-500">
          +
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="absolute top-1/3 right-1/5 h-4 w-4 text-pink-500">
          ×
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 mb-8 md:mb-0 md:pr-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-700">
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 text-base">
              {buttonText}
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Floating objects on right side - shown on mobile too but repositioned */}
        <div className="md:w-2/5 relative h-40 md:h-auto">{/* You can add any floating UI elements or images here */}</div>
      </div>
    </motion.div>
  );
};

export default PremiumCtaCard;
