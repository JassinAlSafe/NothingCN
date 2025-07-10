import { ReactNode } from "react";
import { StatsCards } from "../components/stats-cards";
import { UserCards } from "../components/user-cards";
import { SocialCard } from "../components/social-card";
import { EventCard } from "../components/event-card";

export interface Block {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  dependencies: string[];
  code: string;
  component: ReactNode;
}

export const blocks: Block[] = [
  {
    id: "stats-cards",
    title: "Stats Cards",
    description:
      "Display key metrics and statistics in a clean, organized layout",
    category: "Analytics",
    tags: ["dashboard", "metrics", "cards", "grid", "statistics"],
    difficulty: "beginner",
    dependencies: ["lucide-react"],
    code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react"

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2,350</div>
          <p className="text-xs text-muted-foreground">+180.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardContent>
      </Card>
    </div>
  )
}`,
    component: <StatsCards />,
  },
  {
    id: "user-cards",
    title: "User Cards",
    description:
      "Display user information with profile cards and contact details",
    category: "Profile",
    tags: ["profile", "user", "contact", "cards", "avatar"],
    difficulty: "beginner",
    dependencies: ["lucide-react"],
    code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, Mail, MapPin } from "lucide-react"

export function UserCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">john.doe@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">San Francisco, CA</span>
          </div>
          <div className="flex items-center space-x-2 pt-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
          </div>
          <div className="flex space-x-2 pt-4">
            <Button className="flex-1">Connect</Button>
            <Button variant="outline" className="flex-1">Message</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}`,
    component: <UserCards />,
  },
  {
    id: "social-cards",
    title: "Social Cards",
    description:
      "Social media post layout with engagement buttons and user info",
    category: "Social",
    tags: ["social", "post", "engagement", "timeline", "feed"],
    difficulty: "intermediate",
    dependencies: ["lucide-react"],
    code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Heart, MessageCircle, Share2 } from "lucide-react"

export function SocialCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-sm">Alex Johnson</CardTitle>
            <CardDescription className="text-xs">@alexj • 2h ago</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm">
            Just launched our new component library! 🎉 Building beautiful UIs has never been easier. 
            Check it out and let me know what you think!
          </p>
          <div className="flex items-center justify-between pt-2 border-t">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-1" />
              24
            </Button>
            <Button variant="ghost" size="sm">
              <MessageCircle className="h-4 w-4 mr-1" />
              8
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}`,
    component: <SocialCard />,
  },
  {
    id: "event-cards",
    title: "Event Cards",
    description:
      "Display event information with date, time, and location details",
    category: "Event",
    tags: ["event", "calendar", "schedule", "conference", "meeting"],
    difficulty: "intermediate",
    dependencies: ["lucide-react"],
    code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export function EventCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Calendar className="h-6 w-6 text-white" />
          </div>
          <div>
            <CardTitle>React Conference 2024</CardTitle>
            <CardDescription>Annual React developer conference</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">March 15, 2024 • 9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">San Francisco Convention Center</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">1,200 attendees</span>
          </div>
          <div className="flex items-center space-x-2 pt-2">
            <Badge>React</Badge>
            <Badge variant="secondary">JavaScript</Badge>
            <Badge variant="secondary">Web Development</Badge>
          </div>
          <div className="pt-4">
            <Button className="w-full">Register Now</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}`,
    component: <EventCard />,
  },
];
