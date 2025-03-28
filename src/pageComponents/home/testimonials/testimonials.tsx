"use client";

import { TESTIMONIALS } from "@/contants/variables.constant";
import { Section } from "@/appComponents/container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Transform TESTIMONIALS data to match the InfiniteMovingCards component format
  const formattedTestimonials = TESTIMONIALS.map((testimonial) => ({
    quote: testimonial.content,
    name: testimonial.name,
    title: `${testimonial.role}, ${testimonial.company}`,
    rating: testimonial.rating,
    avatar: testimonial.avatar
  }));

  return (
    <Section
      subtitleClassName="text-sm md:text-lg"
      id="testimonials"
      title="What Our Users Say"
      subtitle=" Here's what people think about Toolo"
      className="bg-white overflow-hidden px-4 sm:px-6 md:px-8">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full">
        {/* Background decoration */}
        <div className="absolute -top-6 -left-6 hidden lg:block">
          <svg
            className="text-blue-100 w-24 h-24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
          </svg>
        </div>

        {/* Replace the old scrolling ticker with InfiniteMovingCards */}
        <div className="relative mt-10">
          <InfiniteMovingCards
            items={formattedTestimonials}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="py-2"
          />
        </div>
      </motion.div>
    </Section>
  );
};
