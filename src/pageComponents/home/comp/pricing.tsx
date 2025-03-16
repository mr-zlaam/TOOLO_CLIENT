"use client";
import { useState } from "react";
import { Section } from "@/appComponents/container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/utils";

type BillingPeriod = "monthly" | "yearly";

// Updated pricing plans with three tiers
const PRICING_PLANS = [
  {
    id: "free",
    name: "Free",
    description: "Basic tools for personal use",
    price: 0,
    currency: "USD",
    buttonText: "Get Started",
    isPopular: false,
    features: [
      { title: "5 file conversions per day", included: true },
      { title: "Max file size: 10MB", included: true },
      { title: "Basic image editing", included: true },
      { title: "Simple PDF tools", included: true },
      { title: "Text tools", included: true },
      { title: "Ads supported", included: true },
      { title: "Batch processing", included: false },
      { title: "Priority processing", included: false },
      { title: "Priority support", included: false },
      { title: "Advanced tools", included: false }
    ]
  },
  {
    id: "pro",
    name: "Pro",
    description: "Everything you need for regular use",
    price: 9.99,
    currency: "USD",
    buttonText: "Start Free Trial",
    isPopular: true,
    features: [
      { title: "25 file conversions per day", included: true },
      { title: "Max file size: 50MB", included: true },
      { title: "Advanced image editing", included: true },
      { title: "Complete PDF toolkit", included: true },
      { title: "Advanced text tools", included: true },
      { title: "No ads", included: true },
      { title: "Basic batch processing", included: true },
      { title: "Standard processing speed", included: true },
      { title: "Email support", included: true },
      { title: "Access to beta features", included: false }
    ]
  },
  {
    id: "business",
    name: "Business",
    description: "For professionals and teams",
    price: 24.99,
    currency: "USD",
    buttonText: "Contact Sales",
    isPopular: false,
    features: [
      { title: "Unlimited conversions", included: true },
      { title: "Max file size: 500MB", included: true },
      { title: "Professional image editing", included: true },
      { title: "Advanced PDF toolkit", included: true },
      { title: "All text & code tools", included: true },
      { title: "No ads", included: true },
      { title: "Advanced batch processing", included: true },
      { title: "Priority processing", included: true },
      { title: "Priority support", included: true },
      { title: "Early access to new features", included: true }
    ]
  }
];

export const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const discount = 20; // Percentage discount for yearly billing

  return (
    <Section
      id="pricing"
      title="Simple, Transparent Pricing"
      subtitle="Choose the plan that's right for you"
      className="bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
        transition={{ duration: 0.7 }}>
        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                billingPeriod === "monthly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-700 hover:text-gray-900"
              )}>
              Monthly billing
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center",
                billingPeriod === "yearly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-700 hover:text-gray-900"
              )}>
              Annual billing
              <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">Save {discount}%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards - updated to 3 columns with full width */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "rounded-md overflow-hidden transition-all",
                plan.isPopular === true
                  ? "border-2 border-blue-600 shadow-lg relative transform hover:-translate-y-1 md:scale-105"
                  : "border border-gray-200 shadow-sm hover:shadow-md"
              )}>
              {plan.isPopular === true && (
                <div className="absolute top-5 right-0 rounded-xl">
                  <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wide transform translate-x-2 -translate-y-2 rotate-45 rounded">
                    Popular
                  </div>
                </div>
              )}

              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>

                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold">
                      {formatCurrency(billingPeriod === "yearly" ? plan.price * (1 - discount / 100) * 12 : plan.price, plan.currency)}
                    </span>
                    <span className="ml-1.5 text-gray-500">/{billingPeriod === "yearly" ? "year" : "month"}</span>
                  </div>
                  {plan.price > 0 && billingPeriod === "yearly" && (
                    <p className="mt-1 text-sm text-green-600">Save {formatCurrency(((plan.price * discount) / 100) * 12, plan.currency)} per year</p>
                  )}
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className={cn("h-5 w-5", feature.included ? "text-blue-600" : "text-gray-300")}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className={cn("ml-3 text-sm", feature.included ? "text-gray-700" : "text-gray-400 line-through")}>{feature.title}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <button
                    className={cn(
                      "w-full py-3 px-6 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors",
                      (plan.isPopular ?? false)
                        ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                        : plan.id === "free"
                          ? "bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200 focus:ring-blue-500"
                          : "bg-white border border-blue-300 text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
                    )}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">All paid plans include a 14-day free trial. No credit card required.</p>
        </div>
      </motion.div>
    </Section>
  );
};

export default Pricing;
