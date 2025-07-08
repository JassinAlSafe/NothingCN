"use client";

import { ComponentPreview } from "@/components/component-preview";
import { DiscussionCard } from "@/components/ui/discussion-card";
import { Badge } from "@/components/ui/badge";

export default function DiscussionCardPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-ndot tracking-wide">Discussion Card</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Forum-style discussion cards inspired by Nothing OS design. Perfect for community 
          platforms, discussion forums, and content organization.
        </p>
      </div>

      <div className="space-y-8">
        {/* Nothing OS Forum Style */}
        <ComponentPreview
          title="Nothing OS Forum Style"
          description="Recreating the exact Nothing OS forum layout with selection states"
          preview={
            <div className="space-y-4 max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-6 rounded-lg bg-muted flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">Tags</h2>
              </div>

              <DiscussionCard
                selected={true}
                variant="nothing"
                badge={{
                  text: "Newsroom",
                  dot: true,
                  dotColor: "red"
                }}
                title="General news, announcements, and updates from the Nothing team."
                lastPost={{
                  title: "Nothing Newsletter | June 2025",
                  time: "3 Hours Ago"
                }}
              />

              <DiscussionCard
                variant="nothing"
                badge={{
                  text: "Nothing Phone Series",
                  dot: true,
                  dotColor: "blue"
                }}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                }
                title="A space for conversation about Nothing smartphones and Nothing OS."
                pills={["Nothing OS", "Phone (1)", "Phone (2)", "Phone (2a)", "Phone (2a) Plus", "Phone (3a)", "Phone (3a) Pro", "Phone (3)"]}
                lastPost={{
                  title: "Why Phone (3) is better than other phones with the same processor",
                  time: "10 Minutes Ago"
                }}
              />

              <DiscussionCard
                variant="nothing"
                badge={{
                  text: "Nothing Ear Series",
                  dot: true,
                  dotColor: "green"
                }}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                }
                title="Use this section to chat about our audio products, including Nothing X."
                pills={["Nothing X", "Ear (1)", "Ear (stick)", "Ear (2)", "Ear", "Ear (a)", "Ear (open)", "Headphone (1)"]}
                lastPost={{
                  title: "Hearing aid for Nothing Ears",
                  time: "4 Hours Ago"
                }}
              />

              <DiscussionCard
                variant="nothing"
                badge={{
                  text: "CMF by Nothing",
                  dot: true,
                  dotColor: "purple"
                }}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                }
                title="Discuss everything relating to CMF by Nothing here."
              />
            </div>
          }
          code={`import { DiscussionCard } from "@/components/ui/discussion-card";

export default function NothingForumExample() {
  return (
    <div className="space-y-4">
      <DiscussionCard
        selected={true}
        variant="nothing"
        badge={{
          text: "Newsroom",
          dot: true,
          dotColor: "red"
        }}
        title="General news, announcements, and updates from the Nothing team."
        lastPost={{
          title: "Nothing Newsletter | June 2025",
          time: "3 Hours Ago"
        }}
      />

      <DiscussionCard
        variant="nothing"
        badge={{
          text: "Nothing Phone Series",
          dot: true,
          dotColor: "blue"
        }}
        title="A space for conversation about Nothing smartphones and Nothing OS."
        pills={["Nothing OS", "Phone (1)", "Phone (2)", "Phone (2a)", "Phone (3)"]}
        lastPost={{
          title: "Why Phone (3) is better than other phones with the same processor",
          time: "10 Minutes Ago"
        }}
      />
    </div>
  );
}`}
        />

        {/* Basic Discussion Cards */}
        <ComponentPreview
          title="Basic Discussion Cards"
          description="Simple discussion cards with different configurations"
          preview={
            <div className="space-y-4 max-w-2xl">
              <DiscussionCard
                title="General Discussion"
                description="Share your thoughts and ideas about the project"
                lastPost={{
                  title: "Welcome to the community!",
                  time: "2 hours ago"
                }}
              />

              <DiscussionCard
                badge={{
                  text: "Feature Request",
                  dot: true,
                  dotColor: "blue"
                }}
                title="New feature suggestions"
                description="Propose new features and improvements"
                pills={["UI", "UX", "Performance", "Accessibility"]}
                lastPost={{
                  title: "Dark mode toggle improvements",
                  time: "1 day ago"
                }}
              />

              <DiscussionCard
                selected={true}
                badge={{
                  text: "Bug Report",
                  dot: true,
                  dotColor: "red"
                }}
                title="Known issues and bug reports"
                description="Report bugs and track their resolution"
                lastPost={{
                  title: "Component rendering issue on mobile",
                  time: "3 hours ago"
                }}
              />
            </div>
          }
          code={`import { DiscussionCard } from "@/components/ui/discussion-card";

export default function BasicDiscussionExample() {
  return (
    <div className="space-y-4">
      <DiscussionCard
        title="General Discussion"
        description="Share your thoughts and ideas about the project"
        lastPost={{
          title: "Welcome to the community!",
          time: "2 hours ago"
        }}
      />

      <DiscussionCard
        badge={{
          text: "Feature Request",
          dot: true,
          dotColor: "blue"
        }}
        title="New feature suggestions"
        description="Propose new features and improvements"
        pills={["UI", "UX", "Performance", "Accessibility"]}
        lastPost={{
          title: "Dark mode toggle improvements",
          time: "1 day ago"
        }}
      />

      <DiscussionCard
        selected={true}
        badge={{
          text: "Bug Report",
          dot: true,
          dotColor: "red"
        }}
        title="Known issues and bug reports"
        description="Report bugs and track their resolution"
        lastPost={{
          title: "Component rendering issue on mobile",
          time: "3 hours ago"
        }}
      />
    </div>
  );
}`}
        />

        {/* Custom Content */}
        <ComponentPreview
          title="Custom Content"
          description="Discussion cards with custom content and layouts"
          preview={
            <div className="space-y-4 max-w-3xl">
              <DiscussionCard
                badge={{
                  text: "Announcement",
                  dot: true,
                  dotColor: "purple"
                }}
                title="Community Guidelines"
                description="Please read before participating"
              >
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Important Rules:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Be respectful to all community members</li>
                    <li>• No spam or self-promotion</li>
                    <li>• Use appropriate tags for your posts</li>
                    <li>• Search before posting duplicate questions</li>
                  </ul>
                </div>
              </DiscussionCard>

              <DiscussionCard
                badge={{
                  text: "Poll",
                  dot: true,
                  dotColor: "green"
                }}
                title="What features should we prioritize?"
                description="Help us decide what to build next"
              >
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Better mobile support</span>
                    <Badge variant="outline" size="sm"><span className="font-ndot">45%</span></Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">More components</span>
                    <Badge variant="outline" size="sm"><span className="font-ndot">30%</span></Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Documentation improvements</span>
                    <Badge variant="outline" size="sm"><span className="font-ndot">25%</span></Badge>
                  </div>
                </div>
              </DiscussionCard>
            </div>
          }
          code={`import { DiscussionCard } from "@/components/ui/discussion-card";
import { Badge } from "@/components/ui/badge";

export default function CustomContentExample() {
  return (
    <div className="space-y-4">
      <DiscussionCard
        badge={{
          text: "Announcement",
          dot: true,
          dotColor: "purple"
        }}
        title="Community Guidelines"
        description="Please read before participating"
      >
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2">Important Rules:</h4>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Be respectful to all community members</li>
            <li>• No spam or self-promotion</li>
            <li>• Use appropriate tags for your posts</li>
            <li>• Search before posting duplicate questions</li>
          </ul>
        </div>
      </DiscussionCard>

      <DiscussionCard
        badge={{
          text: "Poll",
          dot: true,
          dotColor: "green"
        }}
        title="What features should we prioritize?"
        description="Help us decide what to build next"
      >
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Better mobile support</span>
            <Badge variant="outline" size="sm">45%</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">More components</span>
            <Badge variant="outline" size="sm">30%</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Documentation improvements</span>
            <Badge variant="outline" size="sm">25%</Badge>
          </div>
        </div>
      </DiscussionCard>
    </div>
  );
}`}
        />
      </div>

      {/* Design Philosophy */}
      <div className="mt-8 p-6 bg-muted/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 font-ndot">🎨 Nothing OS Design Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2">
            <li>• **Card-based layout** - Clean, contained discussion sections</li>
            <li>• **Selection states** - Clear visual feedback for active items</li>
            <li>• **Dot indicators** - Meaningful color coding for categories</li>
            <li>• **Flexible content** - Supports custom layouts and rich content</li>
            <li>• **Responsive design** - Works across all device sizes</li>
          </ul>
          <ul className="space-y-2">
            <li>• **Subtle interactions** - Gentle hover effects and transitions</li>
            <li>• **Consistent spacing** - Harmonious padding and margins</li>
            <li>• **Typography hierarchy** - Clear title, description, and meta text</li>
            <li>• **Pill navigation** - Horizontal tag-based navigation</li>
            <li>• **Community focus** - Designed for discussion and engagement</li>
          </ul>
        </div>
      </div>
    </div>
  );
}