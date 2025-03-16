"use client";
import { useState } from "react";
import { CONTACT } from "@/contants/variables.constant";
import { Section } from "@/appComponents/container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import Link from "next/link";

type FormData = {
  email: string;
  message: string;
};

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: FormData) => {
    // In a real app, you would send the data to your backend
    console.info(data);

    // Show success message
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      reset();
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Section
      id="contact"
      title={CONTACT.title}
      subtitle={CONTACT.subtitle}
      className="bg-white border-t border-gray-100">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <div className="md:flex">
            {/* Contact info */}
            <div className="bg-blue-600 text-white p-8 md:w-1/3">
              <h3 className="text-xl font-bold">Contact Information</h3>
              <p className="mt-2 text-blue-100">We&apos;re here to help with any questions or issues</p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-100">Email</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-white hover:text-blue-200 transition-colors">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-100">Response Time</p>
                    <p className="text-white">Within {CONTACT.response_time}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex space-x-4">
                  {/* Social media icons */}
                  {["twitter", "facebook", "github"].map((platform) => (
                    <Link
                      key={platform}
                      href="#"
                      className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-400 transition-colors">
                      <span className="sr-only">{platform}</span>
                      <div className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="p-8 md:w-2/3">
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <svg
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">Message Sent!</h3>
                    <p className="text-gray-600">We&apos;ll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : (
                //TODO:
                <form
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={cn(
                        "mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                        errors.email ? "border-red-300" : "border-gray-300"
                      )}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="How can we help you?"
                      className={cn(
                        "mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                        errors.message ? "border-red-300" : "border-gray-300"
                      )}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters"
                        }
                      })}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
