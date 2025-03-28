export type BillingPeriod = "monthly" | "yearly";

// Updated pricing plans with three tiers
export const PRICING_PLANS = [
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
