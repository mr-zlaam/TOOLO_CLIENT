"use client";
import { FEATURES } from "@/contants/variables.constant";
import { Section } from "@/appComponents/container";
import { FeatureCard } from "./comp/featureCard";

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
