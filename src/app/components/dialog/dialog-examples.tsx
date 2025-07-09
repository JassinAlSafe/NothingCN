"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Settings, 
  AlertTriangle, 
  Search,
  Edit3,
  Trash2,
  Zap,
  Sparkles,
  Circle,
  ArrowRight,
  Bell,
  Star,
  Cpu,
  Wifi
} from "lucide-react";

export function BasicDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Basic Dialog</DialogTitle>
          <DialogDescription>
            This is a basic dialog example with a title and description.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Dialog content goes here. You can add any content you need.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function FormDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Edit3 className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" defaultValue="john@example.com" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ConfirmationDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete Account
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            Confirm Deletion
          </DialogTitle>
          <DialogDescription>
            Are you sure you want to delete your account? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete Account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function SearchDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-start">
          <Search className="mr-2 h-4 w-4" />
          Search documentation...
          <kbd className="ml-auto text-xs bg-muted px-1.5 py-0.5 rounded">⌘K</kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="flex items-center border-b px-4 py-3">
          <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
          <Input
            placeholder="Search components, pages, and more..."
            className="flex-1 border-0 bg-transparent px-0 py-0 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0"
          />
        </div>
        <div className="max-h-[400px] overflow-y-auto p-4">
          <p className="text-sm text-muted-foreground">
            Start typing to search for components and documentation.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function CustomDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Application Settings
          </DialogTitle>
          <DialogDescription>
            Configure your application preferences and settings.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="theme">Theme</Label>
            <select 
              id="theme" 
              className="w-full p-2 border rounded-md bg-background"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notifications">Notifications</Label>
            <Textarea 
              id="notifications" 
              placeholder="Configure notification preferences..."
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save Settings</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function NothingDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative group">
          <Circle className="mr-2 h-4 w-4 animate-pulse" />
          <span className="font-ndot">Nothing (1)</span>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[520px] border-2 border-border bg-background/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 font-ndot text-xl">
            <div className="relative">
              <Circle className="h-6 w-6 text-accent" />
              <div className="absolute inset-0 h-6 w-6 border-2 border-accent rounded-full animate-ping" />
            </div>
            Nothing OS 3.0
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Experience the power of Nothing with our signature ndot typography and minimal design
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-6">
          <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="font-ndot text-sm font-medium">Glyph Interface</p>
                <p className="text-xs text-muted-foreground">LED pattern notifications</p>
              </div>
            </div>
            <div className="flex gap-1">
              <Circle className="h-2 w-2 bg-accent rounded-full animate-pulse" />
              <Circle className="h-2 w-2 bg-accent rounded-full animate-pulse [animation-delay:0.2s]" />
              <Circle className="h-2 w-2 bg-accent rounded-full animate-pulse [animation-delay:0.4s]" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted/20 rounded-lg border border-border/30 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="h-4 w-4 text-accent" />
                <span className="font-ndot text-sm">Performance</span>
              </div>
              <p className="text-xs text-muted-foreground">Snapdragon optimized</p>
            </div>
            
            <div className="p-4 bg-muted/20 rounded-lg border border-border/30 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Wifi className="h-4 w-4 text-accent" />
                <span className="font-ndot text-sm">Connectivity</span>
              </div>
              <p className="text-xs text-muted-foreground">5G ready</p>
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-accent" />
              <span className="font-ndot text-sm">Nothing Special</span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Unique design elements that make Nothing stand out
            </p>
            <div className="flex items-center gap-2">
              <Button size="sm" className="font-ndot">
                Explore <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" className="font-ndot">
            Close
          </Button>
          <Button className="font-ndot bg-accent hover:bg-accent/90">
            <Sparkles className="mr-2 h-4 w-4" />
            Activate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function NothingNotificationDialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="relative">
          <Bell className="mr-2 h-4 w-4" />
          <span className="font-ndot">Notifications</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full flex items-center justify-center">
            <span className="text-[10px] font-ndot text-background">3</span>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[480px] border-2 border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-ndot">
            <div className="relative">
              <Bell className="h-5 w-5 text-accent" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            Nothing Notifications
          </DialogTitle>
          <DialogDescription>
            Glyph Interface notifications and system alerts
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg border-l-4 border-l-accent">
            <div className="flex-shrink-0 mt-1">
              <Circle className="h-2 w-2 bg-accent rounded-full animate-pulse" />
            </div>
            <div className="flex-1">
              <p className="font-ndot text-sm font-medium">Glyph Pattern Active</p>
              <p className="text-xs text-muted-foreground">LED notification system is running</p>
              <p className="text-xs text-muted-foreground mt-1">2 minutes ago</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border-l-4 border-l-blue-500">
            <div className="flex-shrink-0 mt-1">
              <Circle className="h-2 w-2 bg-blue-500 rounded-full" />
            </div>
            <div className="flex-1">
              <p className="font-ndot text-sm font-medium">System Update</p>
              <p className="text-xs text-muted-foreground">Nothing OS 3.0.1 is available</p>
              <p className="text-xs text-muted-foreground mt-1">1 hour ago</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 bg-muted/20 rounded-lg border-l-4 border-l-green-500">
            <div className="flex-shrink-0 mt-1">
              <Circle className="h-2 w-2 bg-green-500 rounded-full" />
            </div>
            <div className="flex-1">
              <p className="font-ndot text-sm font-medium">Battery Optimized</p>
              <p className="text-xs text-muted-foreground">Adaptive battery learning complete</p>
              <p className="text-xs text-muted-foreground mt-1">3 hours ago</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" className="font-ndot">
            Mark All Read
          </Button>
          <Button className="font-ndot">
            Settings
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}