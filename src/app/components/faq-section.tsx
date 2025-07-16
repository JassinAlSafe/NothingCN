"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Search,
  ChevronRight,
  Heart,
  Users,
  ExternalLink,
  Rocket,
  Code,
  Sparkles,
} from "lucide-react";

// Enhanced FAQ data with categories and better organization
const faqData = [
  {
    category: "Getting Started",
    icon: <Rocket className="h-5 w-5" />,
    faqs: [
      {
        id: "what-is-nothingcn",
        question: "What is NothingCN?",
        answer:
          "NothingCN is an open-source creative component library built with Next.js and React. It provides copy-paste ready components with a unique design language inspired by Nothing OS. Our components are designed to be beautiful, accessible, and production-ready.",
        tags: ["library", "react", "nextjs", "components"],
      },
      {
        id: "getting-started",
        question: "How do I get started with NothingCN?",
        answer:
          "Getting started is simple! Browse our component library, find a component you like, copy the code, and paste it into your project. No installation or setup required - just copy, paste, and customize to your needs.",
        tags: ["setup", "installation", "getting started"],
      },
      {
        id: "prerequisites",
        question: "What do I need to use NothingCN?",
        answer:
          "You need a React or Next.js project with Tailwind CSS configured. Our components are built with modern React patterns and TypeScript, so having these set up in your project is recommended for the best experience.",
        tags: ["requirements", "react", "tailwind", "typescript"],
      },
    ],
  },
  {
    category: "Installation & Setup",
    icon: <Code className="h-5 w-5" />,
    faqs: [
      {
        id: "dependencies",
        question: "Do I need to install any dependencies?",
        answer:
          "No! NothingCN components are designed to be dependency-free. Just copy the component code and paste it into your project. Some components may use Lucide React for icons, but that's clearly mentioned in the component documentation.",
        tags: ["dependencies", "installation", "setup"],
      },
      {
        id: "tailwind-setup",
        question: "How do I set up Tailwind CSS for NothingCN?",
        answer:
          "NothingCN works with standard Tailwind CSS. Install Tailwind CSS in your project following their official guide. Our components use custom CSS variables for theming, which you can find in our documentation.",
        tags: ["tailwind", "css", "setup", "configuration"],
      },
      {
        id: "typescript-support",
        question: "Does NothingCN support TypeScript?",
        answer:
          "Yes! All NothingCN components are built with TypeScript and include full type definitions. You'll get excellent IntelliSense support and type safety when using our components in your TypeScript projects.",
        tags: ["typescript", "types", "intellisense"],
      },
    ],
  },
  {
    category: "Customization",
    icon: <Sparkles className="h-5 w-5" />,
    faqs: [
      {
        id: "customization",
        question: "Can I customize the components?",
        answer:
          "Absolutely! All components are fully customizable and built with Tailwind CSS. You can easily modify colors, spacing, typography, and styling to match your brand. We use CSS variables for theming, making global customization simple.",
        tags: ["customization", "theming", "branding", "css"],
      },
      {
        id: "theming",
        question: "How does theming work in NothingCN?",
        answer:
          "NothingCN uses CSS custom properties (variables) for theming. You can override these variables in your global CSS to create custom themes. We support light/dark mode out of the box and make it easy to create your own color schemes.",
        tags: ["theming", "dark mode", "css variables", "colors"],
      },
      {
        id: "responsive-design",
        question: "Are the components responsive?",
        answer:
          "Yes! All NothingCN components are built mobile-first and fully responsive. They work beautifully across all device sizes, from mobile phones to large desktop screens. We use Tailwind's responsive utilities for consistent behavior.",
        tags: ["responsive", "mobile", "desktop", "breakpoints"],
      },
    ],
  },
  {
    category: "Accessibility & Support",
    icon: <Users className="h-5 w-5" />,
    faqs: [
      {
        id: "accessibility",
        question: "Are the components accessible?",
        answer:
          "Yes! Accessibility is a core principle of NothingCN. All components follow WCAG guidelines and best practices for screen readers, keyboard navigation, focus management, and semantic HTML. We regularly test with assistive technologies.",
        tags: ["accessibility", "a11y", "wcag", "screen readers"],
      },
      {
        id: "browser-support",
        question: "Which browsers are supported?",
        answer:
          "NothingCN components work in all modern browsers including Chrome, Firefox, Safari, and Edge. We support the last 2 versions of each major browser. For Internet Explorer, we recommend using a polyfill for CSS custom properties.",
        tags: ["browsers", "compatibility", "support"],
      },
      {
        id: "performance",
        question: "How do NothingCN components affect performance?",
        answer:
          "NothingCN components are optimized for performance. They're lightweight, use modern CSS features, and follow React best practices. Since you copy only the components you need, there's no bundle size overhead from unused code.",
        tags: ["performance", "optimization", "bundle size"],
      },
    ],
  },
];

// Enhanced FAQ Section with accordion functionality and search
export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    return faqData
      .filter(
        (categoryData) =>
          selectedCategory === "All" ||
          categoryData.category === selectedCategory
      )
      .map((categoryData) => ({
        ...categoryData,
        faqs: categoryData.faqs.filter((faq) => {
          const searchLower = searchQuery.toLowerCase();
          return (
            faq.question.toLowerCase().includes(searchLower) ||
            faq.answer.toLowerCase().includes(searchLower) ||
            faq.tags.some((tag) => tag.toLowerCase().includes(searchLower))
          );
        }),
      }))
      .filter((categoryData) => categoryData.faqs.length > 0);
  }, [searchQuery, selectedCategory]);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const categories = ["All", ...faqData.map((cat) => cat.category)];

  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Nothing OS Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 70%, rgba(120, 119, 198, 0.35) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* Complex geometric patterns */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent" />

        {/* Curved accent elements */}
        <div className="absolute top-1/3 left-1/5 w-40 h-px bg-gradient-to-r from-accent/25 to-transparent rotate-12 origin-left" />
        <div className="absolute bottom-1/3 right-1/5 w-32 h-px bg-gradient-to-r from-accent/20 to-transparent -rotate-12 origin-right" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Enhanced Nothing OS style header */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              {/* Animated geometric elements */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse" />
                  <div
                    className="absolute -top-1.5 -left-1.5 w-5 h-5 border border-accent/30 rounded-full animate-spin"
                    style={{ animationDuration: "20s" }}
                  />
                </div>
                <div className="w-1.5 h-1.5 bg-accent/80 rounded-full animate-pulse delay-250" />
                <div className="w-1 h-1 bg-accent/60 rounded-full animate-pulse delay-500" />
              </div>

              <Badge
                variant="secondary"
                className="bg-accent/10 text-accent border-accent/30 font-ndot tracking-wider"
              >
                FREQUENTLY ASKED
              </Badge>

              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-accent/60 rounded-full animate-pulse delay-750" />
                <div className="w-1.5 h-1.5 bg-accent/80 rounded-full animate-pulse delay-500" />
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse delay-250" />
                  <div
                    className="absolute -top-1.5 -left-1.5 w-5 h-5 border border-accent/30 rounded-full animate-spin"
                    style={{
                      animationDuration: "16s",
                      animationDirection: "reverse",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2
                id="faq-heading"
                className="font-bold text-4xl md:text-6xl tracking-wider font-ndot bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
              >
                FREQUENTLY ASKED
                <span className="block text-accent">QUESTIONS</span>
              </h2>
              <div className="flex items-center justify-center space-x-3">
                <div className="h-0.5 w-20 bg-gradient-to-r from-accent to-accent/50" />
                <span className="text-xs text-accent tracking-widest font-ndot">
                  FIND ANSWERS
                </span>
                <div className="h-0.5 w-16 bg-gradient-to-r from-accent/50 to-transparent" />
              </div>
            </div>

            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed font-ndot">
              Find answers to common questions about NothingCN. Can&apos;t find
              what you&apos;re looking for?
              <Link
                href="/contribute"
                className="text-accent hover:underline ml-1 font-medium"
              >
                Ask our community
              </Link>
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Enhanced Search and Filter Controls */}
          <div className="mb-12 space-y-6">
            {/* Search Bar with Nothing OS styling */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search FAQ questions, answers, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 border border-border/50 rounded-xl bg-card/60 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-accent/20 focus:border-accent transition-all duration-300 text-base placeholder:text-muted-foreground font-ndot"
              />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 focus-within:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Enhanced Category Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 font-ndot tracking-wide ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-accent to-accent/90 text-accent-foreground shadow-lg shadow-accent/25"
                      : "bg-card/60 text-muted-foreground hover:bg-card hover:text-foreground border border-border/30 hover:border-accent/30 backdrop-blur-sm"
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Content */}
          <div className="space-y-8">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-16">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-muted/50 rounded-full" />
                  <div className="absolute inset-2 border-2 border-dashed border-muted-foreground/30 rounded-full" />
                  <div className="absolute inset-4 bg-muted-foreground/10 rounded-full flex items-center justify-center">
                    <Search className="h-8 w-8 text-muted-foreground/50" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent/20 rounded-full animate-ping" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold font-ndot">
                    No results found
                  </h3>
                  <p className="text-muted-foreground font-ndot">
                    Try adjusting your search or selecting a different category.
                  </p>
                </div>
              </div>
            ) : (
              filteredFAQs.map((categoryData, categoryIndex) => (
                <div
                  key={`category-${categoryData.category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="space-y-6"
                  style={{
                    animation: "fadeInUp 0.6s ease-out forwards",
                    animationDelay: `${categoryIndex * 150}ms`,
                  }}
                >
                  {/* Enhanced Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 text-accent rounded-2xl flex items-center justify-center border border-accent/20">
                      {categoryData.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent font-ndot tracking-wide">
                        {categoryData.category.toUpperCase()}
                      </h3>
                      <div className="flex items-center space-x-3 mt-1">
                        <p className="text-sm text-muted-foreground font-ndot">
                          {categoryData.faqs.length} question
                          {categoryData.faqs.length !== 1 ? "s" : ""}
                        </p>
                        <div className="h-px w-12 bg-gradient-to-r from-accent/30 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* FAQ Items */}
                  <div className="space-y-4">
                    {categoryData.faqs.map((faq) => {
                      const isOpen = openItems.has(faq.id);
                      return (
                        <Card
                          key={`faq-${faq.id}`}
                          className="border border-border/50 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group relative"
                        >
                          {/* Nothing OS card enhancements */}
                          <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          <button
                            onClick={() => toggleItem(faq.id)}
                            className="w-full p-6 text-left focus:outline-none focus:ring-4 focus:ring-accent/20 rounded-lg relative z-10"
                            aria-expanded={isOpen}
                            aria-controls={`faq-content-${faq.id}`}
                            aria-describedby={`faq-question-${faq.id}`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <h4 
                                id={`faq-question-${faq.id}`}
                                className="font-bold text-lg leading-relaxed bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-accent group-hover:to-accent/80 transition-all duration-300 font-ndot"
                              >
                                {faq.question}
                              </h4>
                              <div
                                className={`w-10 h-10 bg-gradient-to-br from-accent/15 to-accent/10 text-accent rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:from-accent/25 group-hover:to-accent/20 border border-accent/20 ${
                                  isOpen ? "rotate-90" : ""
                                }`}
                              >
                                <ChevronRight className="h-5 w-5" />
                              </div>
                            </div>

                            {/* Enhanced Tags */}
                            <div className="flex flex-wrap gap-2 mt-4">
                              {faq.tags.slice(0, 3).map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="text-xs bg-accent/8 text-accent/80 border-accent/20 font-ndot"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </button>

                          <div
                            id={`faq-content-${faq.id}`}
                            className={`overflow-hidden transition-all duration-500 ease-in-out relative z-10 ${
                              isOpen
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-6 pb-6">
                              <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
                              <p className="text-muted-foreground leading-relaxed text-base font-ndot">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Enhanced Help CTA */}
          <div className="mt-16 text-center">
            <Card className="border border-accent/30 bg-gradient-to-br from-accent/8 to-accent/12 p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/8" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

              <div className="space-y-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/25 to-accent/15 text-accent rounded-2xl flex items-center justify-center mx-auto border border-accent/30">
                  <Heart className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-ndot tracking-wide">
                    STILL HAVE QUESTIONS?
                  </h3>
                  <div className="h-0.5 w-16 bg-gradient-to-r from-accent/50 to-transparent mx-auto" />
                </div>
                <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed font-ndot">
                  Our community is here to help! Join our discussions, report
                  issues, or contribute to making NothingCN even better.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground shadow-lg shadow-accent/20 font-ndot tracking-wide"
                  >
                    <Link href="/contribute">
                      <Users className="mr-2 h-4 w-4" />
                      JOIN COMMUNITY
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-accent/30 hover:border-accent hover:bg-accent/8 font-ndot tracking-wide"
                  >
                    <Link
                      href="https://github.com/JassinAlSafe/NothingCN"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      GITHUB ISSUES
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/6 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/4 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-64 h-64 bg-accent/3 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "6s" }}
        />
        <div
          className="absolute top-1/6 left-1/3 w-72 h-72 bg-accent/2 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "9s" }}
        />
      </div>
    </section>
  );
}
