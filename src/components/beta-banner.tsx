"use client";

import { Banner, useBanner } from "@/components/ui/banner";

export function BetaBanner() {
  const { isVisible, dismiss } = useBanner("beta-notice");

  if (!isVisible) return null;

  return (
    <Banner
      variant="nothing"
      position="top"
      size="default"
      onDismiss={dismiss}
      dismissible={true}
    >
      <span className="text-center">
        🚧 This website is still in beta - Feel free to reach out at{" "}
        <a
          href="https://www.threads.com/@babajassin"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-accent-foreground/80 transition-colors"
        >
          @babajassin
        </a>
      </span>
    </Banner>
  );
}