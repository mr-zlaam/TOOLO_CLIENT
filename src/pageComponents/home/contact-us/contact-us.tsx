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
  name: string;
  email: string;
  subject: string;
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
      name: "",
      email: "",
      subject: "",
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
      className="bg-gradient-to-t rounded-md from-white to-blue-50 ">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
        transition={{ duration: 0.7 }}
        className="w-full mx-auto">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            {/* Contact info */}
            <div className="bg-blue-600 text-white p-8 lg:col-span-1">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-blue-100">Customer Support</p>
                    <p className="text-white">24/7 Available</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex space-x-4">
                  {/* Social media icons */}
                  {[
                    {
                      name: "twitter",
                      icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    },
                    { name: "facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                    {
                      name: "instagram",
                      icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.5 6a1.5 1.5 0 10.001 3.001A1.5 1.5 0 007.5 6zM21 9a2 2 0 00-2-2h-1.5a.5.5 0 01-.5-.5v-1A2 2 0 0015 3H9a2 2 0 00-2 2v1a.5.5 0 01-.5.5H5a2 2 0 00-2 2v6a2 2 0 002 2h1.5a.5.5 0 01.5.5v1a2 2 0 002 2h6a2 2 0 002-2v-1a.5.5 0 01.5-.5H19a2 2 0 002-2V9z"
                    }
                  ].map((platform) => (
                    <Link
                      key={platform.name}
                      href="#"
                      className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-400 transition-colors">
                      <span className="sr-only">{platform.name}</span>
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={platform.icon}
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="p-8 lg:col-span-3">
              {submitted ? (
                <div className="h-full flex items-center justify-center py-16">
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
                <form
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className={cn(
                          "mt-1 block w-full border rounded-md  py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                          errors.name ? "border-red-300" : "border-gray-300"
                        )}
                        {...register("name", {
                          required: "Name is required"
                        })}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>

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
                          "mt-1 block w-full border rounded-md  py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500",
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
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What is this regarding?"
                      className={cn(
                        "mt-1 block w-full border rounded-md  py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500",
                        errors.subject ? "border-red-300" : "border-gray-300"
                      )}
                      {...register("subject", {
                        required: "Subject is required"
                      })}
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      placeholder="How can we help you?"
                      className={cn(
                        "mt-1 block w-full border rounded-md  py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500",
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

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
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

export default Contact;
