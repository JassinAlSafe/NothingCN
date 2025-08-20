import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/header";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/providers/theme-provider";
import { getPreHydrationScript } from "@/lib/theme-utils";
import { Toaster } from "@/components/ui/toaster";
import { ToastContextProvider } from "@/components/ui/toast";
import { BetaBanner } from "@/components/beta-banner";

// Both fonts are now loaded via CSS @font-face declarations in globals.css

export const metadata: Metadata = {
  title: {
    default: "NothingCN - Creative Component Library",
    template: "%s | NothingCN",
  },
  description:
    "Open source creative component library built with Next.js and React. Copy-paste ready components for modern web development. TypeScript-first, accessible, and production-ready.",
  keywords: [
    "React",
    "Next.js",
    "Components",
    "UI Library",
    "TypeScript",
    "Open Source",
    "Creative",
    "NothingCN",
    "Copy Paste Components",
    "Web Development",
    "Frontend",
    "Design System",
  ],
  authors: [{ name: "NothingCN Team", url: "https://github.com/nothingcn" }],
  creator: "NothingCN Team",
  publisher: "NothingCN",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nothingcn.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nothingcn.vercel.app",
    title: "NothingCN - Creative Component Library",
    description:
      "Open source creative component library built with Next.js and React. Copy-paste ready components for modern web development.",
    siteName: "NothingCN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NothingCN - Creative Component Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NothingCN - Creative Component Library",
    description:
      "Open source creative component library built with Next.js and React. Copy-paste ready components for modern web development.",
    images: ["/og-image.png"],
    creator: "@nothingcn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff5555" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
{process.env.NODE_ENV === 'production' && (
          <meta 
            httpEquiv="Content-Security-Policy" 
            content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: http: blob: https://avatars.githubusercontent.com; font-src 'self' data:; connect-src 'self' https://api.github.com; media-src 'self'; object-src 'none'; child-src 'self'; frame-src 'self'; worker-src 'self' blob:; form-action 'self'; base-uri 'self'; manifest-src 'self';"
          />
        )}

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/ndot/Web Fonts/d7a74ed36ff0603a3e41b6da32c47f03.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/commit-mono/CommitMono-400-Regular.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        {/* Theme initialization script - prevents flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: getPreHydrationScript(),
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "NothingCN",
              description:
                "Open source creative component library built with Next.js and React",
              url: "https://nothingcn.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Organization",
                name: "NothingCN Team",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-background font-sans">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-accent-foreground px-4 py-2 rounded-md z-50 focus:z-50"
        >
          Skip to main content
        </a>

        <ThemeProvider>
          <ToastContextProvider>
            <div className="relative flex min-h-screen flex-col">
              <BetaBanner />
              <SiteHeader />
              <main 
                id="main-content" 
                className="flex-1" 
                role="main"
                style={{ paddingTop: 'var(--banner-height, 0px)' }}
              >
                {children}
              </main>
            </div>
            <Toaster />
          </ToastContextProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
