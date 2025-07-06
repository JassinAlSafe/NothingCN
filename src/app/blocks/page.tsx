import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import {
  User,
  Mail,
  MapPin,
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Activity,
  DollarSign,
} from "lucide-react";

const statsCardCode = `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
      {/* More cards... */}
    </div>
  )
}`;

const userCardCode = `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
}`;

export default function BlocksPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8 lg:py-12">
        {/* Page Header */}
        <div className="space-y-4 border-b border-border pb-8 mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-12 bg-accent rounded-full" />
            <h1 className="text-5xl font-bold tracking-tight font-ndot">Blocks</h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Pre-built component blocks that you can copy and paste into your projects. 
            Perfect for rapid prototyping and development.
          </p>
        </div>

        <div className="space-y-16">
          {/* Stats Cards Block */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-accent rounded-full" />
                <h2 className="text-3xl font-bold tracking-tight">Stats Cards</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed ml-4">
                Display key metrics and statistics in a clean, organized layout.
              </p>
            </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card>
          </div>

          <CodeBlock
            code={statsCardCode}
            language="tsx"
            title="StatsCards.tsx"
          />
        </div>

          {/* User Cards Block */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-accent rounded-full" />
                <h2 className="text-3xl font-bold tracking-tight">User Cards</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed ml-4">
                Display user information with profile cards and contact details.
              </p>
            </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="w-full">
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
                    <Button variant="outline" className="flex-1">
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <CardTitle>Jane Smith</CardTitle>
                    <CardDescription>Product Designer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">jane.smith@example.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">New York, NY</span>
                  </div>
                  <div className="flex items-center space-x-2 pt-2">
                    <Badge variant="secondary">Figma</Badge>
                    <Badge variant="secondary">Design</Badge>
                  </div>
                  <div className="flex space-x-2 pt-4">
                    <Button className="flex-1">Connect</Button>
                    <Button variant="outline" className="flex-1">
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <CodeBlock code={userCardCode} language="tsx" title="UserCard.tsx" />
        </div>

          {/* Social Media Post Block */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-accent rounded-full" />
                <h2 className="text-3xl font-bold tracking-tight">Social Media Post</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed ml-4">
                A social media post layout with engagement buttons and user info.
              </p>
            </div>

          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-sm">Alex Johnson</CardTitle>
                  <CardDescription className="text-xs">
                    @alexj • 2h ago
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm">
                  Just launched our new component library! 🎉 Building beautiful
                  UIs has never been easier. Check it out and let me know what
                  you think!
                </p>
                <div className="flex items-center justify-between pt-2 border-t">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4 mr-1" />
                    24
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageCircle className="h-4 w-4 mr-1" />8
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

          {/* Event Card Block */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-1 h-8 bg-accent rounded-full" />
                <h2 className="text-3xl font-bold tracking-tight">Event Card</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed ml-4">
                Display event information with date, time, and location details.
              </p>
            </div>

          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle>React Conference 2024</CardTitle>
                  <CardDescription>
                    Annual React developer conference
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    March 15, 2024 • 9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    San Francisco Convention Center
                  </span>
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
        </div>
        </div>
      </div>
    </div>
  );
}
