"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface DiscussionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: {
    text: string;
    dot?: boolean;
    dotColor?: "red" | "green" | "blue" | "purple" | "orange" | "yellow";
  };
  pills?: string[];
  lastPost?: {
    title: string;
    time: string;
  };
  selected?: boolean;
  variant?: "default" | "nothing";
}

const DiscussionCard = React.forwardRef<HTMLDivElement, DiscussionCardProps>(
  ({ 
    className,
    title,
    description,
    icon,
    badge,
    pills = [],
    lastPost,
    selected = false,
    variant = "default",
    children,
    ...props
  }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "transition-all duration-200 hover:shadow-md",
          selected && "border-red-500 border-2 bg-red-50/30 dark:bg-red-900/10",
          variant === "nothing" && "border-2 border-border/60 bg-background",
          className
        )}
        {...props}
      >
        {(title || description || badge || icon) && (
          <CardHeader className="pb-3">
            <div className="flex items-start gap-3">
              {icon && (
                <div className="mt-1 text-muted-foreground">
                  {icon}
                </div>
              )}
              <div className="flex-1 space-y-2">
                {badge && (
                  <Badge
                    variant="nothing"
                    dot={badge.dot}
                    dotColor={badge.dotColor}
                    size="sm"
                  >
                    <span className="font-ndot">{badge.text}</span>
                  </Badge>
                )}
                {title && (
                  <CardTitle className="text-xl leading-tight">
                    {title}
                  </CardTitle>
                )}
                {description && (
                  <CardDescription className="text-sm text-muted-foreground">
                    {description}
                  </CardDescription>
                )}
              </div>
            </div>
          </CardHeader>
        )}
        
        <CardContent className="pt-0">
          {pills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {pills.map((pill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs"
                >
                  <span className="font-ndot">{pill}</span>
                </Badge>
              ))}
            </div>
          )}
          
          {lastPost && (
            <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/50 pt-3">
              <span className="flex-1">{lastPost.title}</span>
              <span className="text-xs whitespace-nowrap ml-4 font-ndot">{lastPost.time}</span>
            </div>
          )}
          
          {children}
        </CardContent>
      </Card>
    );
  }
);

DiscussionCard.displayName = "DiscussionCard";

export { DiscussionCard };