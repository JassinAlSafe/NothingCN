import type { Metadata } from "next";
import { FAQSection } from "./components/faq-section";
import { HeroSection } from "./components/hero-section";
import { StatsSection } from "./components/stats-section";
import { FeaturesSection } from "./components/features-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { ContributionSection } from "./components/contribution-section";
import { CTASection } from "./components/cta-section";

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  title: "NothingCN - Creative Component Library",
  description:
    "Open source creative component library built with Next.js and React. Copy-paste ready components for modern web development. TypeScript-first, accessible, and production-ready.",
  keywords: [
    "React components",
    "Next.js",
    "UI library",
    "TypeScript",
    "Open source",
    "Creative components",
    "Web development",
  ],
  openGraph: {
    title: "NothingCN - Creative Component Library",
    description:
      "Open source creative component library built with Next.js and React. Copy-paste ready components for modern web development.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NothingCN Component Library Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NothingCN - Creative Component Library",
    description:
      "Open source creative component library built with Next.js and React. Copy-paste ready components for modern web development.",
    images: ["/og-image.png"],
  },
};

// Main Homepage Component
export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContributionSection />
      <CTASection />
    </div>
  );
}
