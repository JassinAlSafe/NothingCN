import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

// Enhanced testimonials with more details
const testimonials = [
  {
    content:
      "NothingCN components are absolutely stunning. They've transformed how our app looks and feels. The copy-paste approach saves hours of development time.",
    author: "Sarah Chen",
    role: "Frontend Developer",
    company: "TechCorp",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
  },
  {
    content:
      "The copy-paste approach saves so much time. These components are production-ready out of the box with excellent TypeScript support.",
    author: "Alex Rodriguez",
    role: "Lead Engineer",
    company: "StartupXYZ",
    avatar: "/avatars/alex.jpg",
    rating: 5,
  },
  {
    content:
      "Finally, a component library that focuses on creativity without sacrificing accessibility. The documentation is top-notch.",
    author: "Jordan Kim",
    role: "Design Engineer",
    company: "DesignStudio",
    avatar: "/avatars/jordan.jpg",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Nothing OS Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, currentColor 0.5px, transparent 0.5px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Geometric accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* Enhanced Nothing OS style header */}
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              {/* Animated geometric elements */}
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <div
                    className="absolute -top-1 -left-1 w-4 h-4 border border-accent/30 rounded-full animate-spin"
                    style={{ animationDuration: "8s" }}
                  />
                </div>
                <div className="w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse delay-300" />
                <div className="w-1 h-1 bg-accent/50 rounded-full animate-pulse delay-500" />
              </div>

              <Badge
                variant="secondary"
                className="bg-accent/10 text-accent border-accent/30 font-ndot tracking-wider"
              >
                TESTIMONIALS
              </Badge>

              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-accent/50 rounded-full animate-pulse delay-700" />
                <div className="w-1.5 h-1.5 bg-accent/70 rounded-full animate-pulse delay-500" />
                <div className="relative">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-200" />
                  <div
                    className="absolute -top-1 -left-1 w-4 h-4 border border-accent/30 rounded-full animate-spin"
                    style={{
                      animationDuration: "6s",
                      animationDirection: "reverse",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2
                id="testimonials-heading"
                className="font-bold text-4xl md:text-6xl tracking-wider font-ndot bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent"
              >
                WHAT PEOPLE
                <span className="block text-accent">ARE SAYING</span>
              </h2>
              <div className="flex items-center justify-center space-x-3">
                <div className="h-0.5 w-16 bg-gradient-to-r from-accent to-accent/50" />
                <span className="text-xs text-accent tracking-widest font-ndot">
                  COMMUNITY VOICES
                </span>
                <div className="h-0.5 w-12 bg-gradient-to-r from-accent/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.author}-${testimonial.company}`}
              className="border border-border/50 bg-card/80 backdrop-blur-sm p-6 hover:border-accent/50 transition-all duration-300 group hover:shadow-xl hover:shadow-accent/5 relative overflow-hidden"
              style={{
                animationDelay: `${index * 200}ms`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              {/* Nothing OS card styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />

              {/* Geometric accent dot */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-accent/30 rounded-full group-hover:bg-accent/60 transition-all duration-300" />

              <div className="mb-6 relative z-10">
                <div
                  className="flex items-center text-accent mb-4"
                  aria-label={`${testimonial.rating} star rating`}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={`star-${i}`} className="w-4 h-4 fill-current mr-1" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground leading-relaxed font-ndot text-base">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center space-x-4 relative z-10">
                <div 
                  className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center text-accent font-bold group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300 font-ndot text-lg border border-accent/20"
                  aria-label={`${testimonial.author} avatar`}
                >
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent font-ndot">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground font-ndot">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Additional accent lines */}
              <div className="absolute left-6 top-1/2 w-px h-8 bg-gradient-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
            </Card>
          ))}
        </div>

        {/* Enhanced metrics */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground font-ndot">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>5.0 Average Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200" />
              <span>100+ Happy Developers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-400" />
              <span>Production Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-accent/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "6s" }}
        />
      </div>
    </section>
  );
}
