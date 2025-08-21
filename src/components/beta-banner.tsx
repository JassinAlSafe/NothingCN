"use client";

import { Banner } from "@/components/ui/banner";

export function BetaBanner() {
  return (
    <Banner variant="nothing" position="top" size="default" dismissible={false}>
      <span className="text-center">
        🚧 This website is still in beta - Feel free to reach out at{" "}
        <a
          href="https://www.threads.com/@babajassin"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-accent-foreground/80 transition-colors"
        >
          @Threads
        </a>
      </span>
    </Banner>
  );
}
