import { Sparkles } from "lucide-react";

export function PageHeader() {
  return (
    <div className="space-y-8 border-b border-border pb-12 mb-12">
      <div className="flex items-center space-x-4">
        <div className="w-3 h-16 bg-gradient-to-b from-accent to-accent/50 rounded-full" />
        <div>
          <h1 className="text-6xl font-bold tracking-tight font-ndot bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Blocks
          </h1>
          <div className="flex items-center space-x-2 mt-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Ready to use
            </span>
          </div>
        </div>
      </div>
      <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
        Beautiful, responsive component blocks that you can copy and paste into
        your projects. Perfect for rapid prototyping and building modern
        interfaces.
      </p>
    </div>
  );
}
