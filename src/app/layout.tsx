import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

// Secondary font: Commit Mono (loaded from local files)
const commitMono = localFont({
  src: [
    {
      path: "../../public/fonts/commit-mono/CommitMono-400-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/commit-mono/CommitMono-400-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/commit-mono/CommitMono-700-Regular.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/commit-mono/CommitMono-700-Italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-commit-mono",
  display: "swap",
});


export const metadata: Metadata = {
  title: "NothingCN - Creative Component Library",
  description: "Open source creative component library built with Next.js and React. Copy-paste ready components for developers.",
  keywords: ["React", "Next.js", "Components", "UI Library", "TypeScript", "Open Source", "Creative", "NothingCN"],
  authors: [{ name: "NothingCN Team" }],
  creator: "NothingCN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${commitMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
