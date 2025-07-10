import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Heart, MessageCircle, Share2 } from "lucide-react";

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
            <CardDescription className="text-xs">
              @alexj • 2h ago
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm">
            Just launched our new component library! 🎉 Building beautiful UIs
            has never been easier. Check it out and let me know what you think!
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
  );
}
