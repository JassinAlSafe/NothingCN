import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Analytics } from "@vercel/analytics/next";

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

        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
