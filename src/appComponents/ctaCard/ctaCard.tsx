"use client";
import React from "react";
import PremiumCtaCard from "./comp/premiumCtaCard";

const CtaCard: React.FC = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <PremiumCtaCard
        title="Try Toolo for Free"
        description="Start your 14-day free trial and get unlimited access to all Toolo premium tools to convert, compress, edit, and more."
        buttonText="Start Free Trial"
        buttonHref="/signup"
        className="w-full max-w-6xl mx-auto"
      />
    </div>
  );
};

export default CtaCard;
