import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

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
  );
}
