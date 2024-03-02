"use client";
import { HoverEffect } from "@/components/ui-ani/cardHoverEffect";

interface pricingProps {
  title: string;
  description: string;
  link: string;
}

const pricing: pricingProps[] = [
  {
    title: "Basic",
    description: "Free A, B, C, D",
    link: "https://example.com",
  },
];

const PricingPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={pricing} />
    </div>
  );
};

export default PricingPage;
