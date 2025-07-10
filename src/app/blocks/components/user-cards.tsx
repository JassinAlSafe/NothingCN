import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, MapPin } from "lucide-react";

export function UserCards() {
  return (
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
  );
}
