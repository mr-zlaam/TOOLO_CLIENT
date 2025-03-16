"use client";
import { useState } from "react";
import { TESTIMONIALS } from "@/contants/variables.constant";
import { Section } from "@/appComponents/container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <Section
      id="testimonials"
      title="What Our Users Say"
      subtitle="Don't just take our word for it. Here's what people think about Toolo"
      className="bg-white overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7 }}>
        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Background decoration */}
          <div className="absolute -top-6 -left-6">
            <svg
              className="text-blue-100 w-24 h-24"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
            </svg>
          </div>

          {/* Testimonial cards */}
          <div className="relative mt-10">
            <div className="mx-auto overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`
                }}>
                {TESTIMONIALS.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                      {/* Star rating */}
                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={cn("w-5 h-5", i < testimonial.rating ? "text-yellow-400" : "text-gray-300")}
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial content */}
                      <p className="text-lg text-gray-700 italic mb-6">&quot;{testimonial.content}&quot;</p>

                      {/* User info */}
                      <div className="flex items-center">
                        {testimonial.avatar !== null ? (
                          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                            {/* Image would go here in production */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-4">
                            <span className="text-lg font-medium">{testimonial.name.charAt(0)}</span>
                          </div>
                        )}
                        <div>
                          <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-4">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full mx-1 transition-all",
                    index === activeIndex ? "bg-blue-600 w-4" : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
