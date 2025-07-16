"use client";

import { ComponentLayout } from "@/components/component-layout";
import { ComponentCode } from "@/components/component-code";
import { InstallationTabs } from "@/components/installation-tabs";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Terminal, Shield, Smartphone, Wifi } from "lucide-react";

const sections = [
  { id: "default", title: "Default Alert" },
  { id: "variants", title: "Alert Variants" },
  { id: "nothing-variants", title: "Nothing OS Variants" },
  { id: "sizes", title: "Alert Sizes" },
  { id: "dismissible", title: "Dismissible Alerts" },
  { id: "custom-icons", title: "Custom Icons" },
  { id: "examples", title: "Real-world Examples" },
];

const previous = { title: "Accordion", href: "/components/accordion" };
const next = { title: "Button", href: "/components/button" };

export default function AlertPage() {
  return (
    <ComponentLayout sections={sections} previous={previous} next={next}>
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold font-ndot tracking-wide">Alert</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A clean, accessible alert component with Nothing OS design elements.
            Features ndot typography, subtle animations, and distinctive corner
            dots.
          </p>
        </div>

        <InstallationTabs
          cliCommand="npx nothingcn@latest add alert"
          manualSteps={[
            {
              title: "Copy and paste the following code into your project.",
              description: "Create a new file at src/components/ui/alert.tsx",
              code: `// See the component source code at the bottom of this page`,
            },
          ]}
        />

        <div id="default">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">
                Default Alert
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A simple alert with default styling and automatic icon
                selection.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="w-full max-w-2xl space-y-4">
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components and dependencies to your app using
                    the cli.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <ComponentCode
              title="Default Alert Example"
              description="A simple alert with default styling and automatic icon selection."
              code={`<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>`}
              previewLines={4}
            />
          </div>
        </div>

        <div id="variants">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">
                Alert Variants
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Different semantic variants with appropriate colors and icons.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="w-full max-w-2xl space-y-4">
                <Alert variant="default">
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>
                    This is a default alert message.
                  </AlertDescription>
                </Alert>

                <Alert variant="info">
                  <AlertTitle>Information</AlertTitle>
                  <AlertDescription>
                    This alert provides helpful information for the user.
                  </AlertDescription>
                </Alert>

                <Alert variant="success">
                  <AlertTitle>Success</AlertTitle>
                  <AlertDescription>
                    Your changes have been saved successfully.
                  </AlertDescription>
                </Alert>

                <Alert variant="warning">
                  <AlertTitle>Warning</AlertTitle>
                  <AlertDescription>
                    Please review your input before proceeding.
                  </AlertDescription>
                </Alert>

                <Alert variant="destructive">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Something went wrong. Please try again.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <ComponentCode
              title="Alert Variants Example"
              description="Different semantic variants with appropriate colors and icons."
              code={`<Alert variant="default">
  <AlertTitle>Default Alert</AlertTitle>
  <AlertDescription>This is a default alert message.</AlertDescription>
</Alert>

<Alert variant="info">
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>This alert provides helpful information for the user.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved successfully.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Please review your input before proceeding.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong. Please try again.</AlertDescription>
</Alert>`}
              previewLines={8}
            />
          </div>
        </div>

        <div id="nothing-variants">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">
                Nothing OS Variants
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Special variants inspired by Nothing OS design with ndot
                typography and distinctive styling.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="w-full max-w-2xl space-y-4">
                <Alert variant="nothing">
                  <AlertTitle variant="nothing">NOTHING OS UPDATE</AlertTitle>
                  <AlertDescription variant="nothing">
                    New system features available. Experience enhanced
                    transparency and unique design elements.
                  </AlertDescription>
                </Alert>

                <Alert variant="nothing" dotMatrix>
                  <AlertTitle variant="nothing">DEVICE SYNCHRONIZED</AlertTitle>
                  <AlertDescription variant="nothing">
                    Your Nothing Phone is now connected and ready. All settings
                    have been applied.
                  </AlertDescription>
                </Alert>

                <Alert variant="terminal">
                  <AlertTitle variant="terminal">SYSTEM STATUS</AlertTitle>
                  <AlertDescription variant="terminal">
                    {">"} All systems operational
                    <br />
                    {">"} Memory usage: 68%
                    <br />
                    {">"} Network: Connected
                    <br />
                    {">"} Last sync: 2 minutes ago
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <ComponentCode
              title="Nothing OS Variants Example"
              description="Special variants inspired by Nothing OS design with ndot typography and distinctive styling."
              code={`<Alert variant="nothing">
  <AlertTitle variant="nothing">NOTHING OS UPDATE</AlertTitle>
  <AlertDescription variant="nothing">
    New system features available. Experience enhanced transparency and unique design elements.
  </AlertDescription>
</Alert>

<Alert variant="nothing" dotMatrix>
  <AlertTitle variant="nothing">DEVICE SYNCHRONIZED</AlertTitle>
  <AlertDescription variant="nothing">
    Your Nothing Phone is now connected and ready. All settings have been applied.
  </AlertDescription>
</Alert>

<Alert variant="terminal">
  <AlertTitle variant="terminal">SYSTEM STATUS</AlertTitle>
  <AlertDescription variant="terminal">
    > All systems operational<br/>
    > Memory usage: 68%<br/>
    > Network: Connected<br/>
    > Last sync: 2 minutes ago
  </AlertDescription>
</Alert>`}
              previewLines={12}
            />
          </div>
        </div>

        <div id="sizes">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">
                Alert Sizes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Different sizes to match your design needs.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="w-full max-w-2xl space-y-4">
                <Alert size="sm" variant="info">
                  <AlertTitle>Small Alert</AlertTitle>
                  <AlertDescription>
                    Compact alert for subtle notifications.
                  </AlertDescription>
                </Alert>

                <Alert size="default" variant="success">
                  <AlertTitle>Default Alert</AlertTitle>
                  <AlertDescription>
                    Standard size alert for most use cases.
                  </AlertDescription>
                </Alert>

                <Alert size="lg" variant="nothing">
                  <AlertTitle variant="nothing">LARGE ALERT</AlertTitle>
                  <AlertDescription variant="nothing">
                    Prominent alert for important announcements and critical
                    information.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <ComponentCode
              title="Alert Sizes Example"
              description="Different sizes to match your design needs."
              code={`<Alert size="sm" variant="info">
  <AlertTitle>Small Alert</AlertTitle>
  <AlertDescription>Compact alert for subtle notifications.</AlertDescription>
</Alert>

<Alert size="default" variant="success">
  <AlertTitle>Default Alert</AlertTitle>
  <AlertDescription>Standard size alert for most use cases.</AlertDescription>
</Alert>

<Alert size="lg" variant="nothing">
  <AlertTitle variant="nothing">LARGE ALERT</AlertTitle>
  <AlertDescription variant="nothing">
    Prominent alert for important announcements and critical information.
  </AlertDescription>
</Alert>`}
              previewLines={10}
            />
          </div>
        </div>

        <div id="dismissible">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">
                Dismissible Alerts
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Alerts that can be dismissed by the user.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="w-full max-w-2xl space-y-4">
                <Alert variant="info" dismissible>
                  <AlertTitle>Dismissible Alert</AlertTitle>
                  <AlertDescription>
                    Click the X button to dismiss this alert.
                  </AlertDescription>
                </Alert>

                <Alert
                  variant="nothing"
                  dismissible
                  onDismiss={() => console.log("Alert dismissed")}
                >
                  <AlertTitle variant="nothing">
                    NOTHING NOTIFICATION
                  </AlertTitle>
                  <AlertDescription variant="nothing">
                    This alert can be dismissed and will trigger a callback.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <ComponentCode
              title="Dismissible Alerts Example"
              description="Alerts that can be dismissed by the user."
              code={`<Alert variant="info" dismissible>
  <AlertTitle>Dismissible Alert</AlertTitle>
  <AlertDescription>
    Click the X button to dismiss this alert.
  </AlertDescription>
</Alert>

<Alert variant="nothing" dismissible onDismiss={() => console.log("Alert dismissed")}>
  <AlertTitle variant="nothing">NOTHING NOTIFICATION</AlertTitle>
  <AlertDescription variant="nothing">
    This alert can be dismissed and will trigger a callback.
  </AlertDescription>
</Alert>`}
              previewLines={8}
            />
          </div>
        </div>

        <div id="custom-icons">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">
                Custom Icons
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Use custom icons or hide the icon completely.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="w-full max-w-2xl space-y-4">
                <Alert variant="info" icon={<Shield className="h-5 w-5" />}>
                  <AlertTitle>Security Update</AlertTitle>
                  <AlertDescription>
                    Your security settings have been updated.
                  </AlertDescription>
                </Alert>

                <Alert
                  variant="nothing"
                  icon={<Smartphone className="h-5 w-5" />}
                >
                  <AlertTitle variant="nothing">DEVICE CONNECTED</AlertTitle>
                  <AlertDescription variant="nothing">
                    Nothing Phone (2a) is now paired with your account.
                  </AlertDescription>
                </Alert>

                <Alert variant="success" showIcon={false}>
                  <AlertTitle>No Icon Alert</AlertTitle>
                  <AlertDescription>
                    This alert doesn&apos;t show an icon.
                  </AlertDescription>
                </Alert>

                <Alert variant="terminal" icon={<Wifi className="h-5 w-5" />}>
                  <AlertTitle variant="terminal">NETWORK STATUS</AlertTitle>
                  <AlertDescription variant="terminal">
                    Connection established: 5G Ultra Wideband
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <ComponentCode
              title="Custom Icons Example"
              description="Use custom icons or hide the icon completely."
              code={`<Alert variant="info" icon={<Shield className="h-5 w-5" />}>
  <AlertTitle>Security Update</AlertTitle>
  <AlertDescription>Your security settings have been updated.</AlertDescription>
</Alert>

<Alert variant="nothing" icon={<Smartphone className="h-5 w-5" />}>
  <AlertTitle variant="nothing">DEVICE CONNECTED</AlertTitle>
  <AlertDescription variant="nothing">
    Nothing Phone (2a) is now paired with your account.
  </AlertDescription>
</Alert>

<Alert variant="success" showIcon={false}>
  <AlertTitle>No Icon Alert</AlertTitle>
  <AlertDescription>This alert doesn't show an icon.</AlertDescription>
</Alert>

<Alert variant="terminal" icon={<Wifi className="h-5 w-5" />}>
  <AlertTitle variant="terminal">NETWORK STATUS</AlertTitle>
  <AlertDescription variant="terminal">
    Connection established: 5G Ultra Wideband
  </AlertDescription>
</Alert>`}
              previewLines={12}
            />
          </div>
        </div>

        <div id="examples">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight font-ndot">
                Real-world Examples
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Practical examples showing how to use alerts in real
                applications.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-muted/20">
              <div className="w-full max-w-2xl space-y-6">
                {/* Form validation */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm font-ndot">
                    Form Validation
                  </h4>
                  <Alert variant="destructive" size="sm">
                    <AlertTitle>Validation Error</AlertTitle>
                    <AlertDescription>
                      Please fill in all required fields before submitting.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Success message */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm font-ndot">
                    Success Message
                  </h4>
                  <Alert variant="success" dismissible>
                    <AlertTitle>Profile Updated</AlertTitle>
                    <AlertDescription>
                      Your profile information has been successfully updated.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Nothing OS System Alert */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm font-ndot">
                    Nothing OS System Alert
                  </h4>
                  <Alert variant="nothing" dotMatrix size="lg">
                    <AlertTitle variant="nothing">
                      TRANSPARENCY MODE ACTIVE
                    </AlertTitle>
                    <AlertDescription variant="nothing">
                      Experience the unique Nothing Phone transparency with
                      enhanced visual effects and system integration.
                    </AlertDescription>
                  </Alert>
                </div>

                {/* Terminal Status */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm font-ndot">
                    Developer Console
                  </h4>
                  <Alert
                    variant="terminal"
                    icon={<Terminal className="h-5 w-5" />}
                  >
                    <AlertTitle variant="terminal">BUILD COMPLETED</AlertTitle>
                    <AlertDescription variant="terminal">
                      {">"} npm run build
                      <br />
                      {">"} ✓ Compiled successfully
                      <br />
                      {">"} Ready in 2.3s
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>

            <ComponentCode
              title="Real-world Examples"
              description="Practical examples showing how to use alerts in real applications."
              code={`// Form validation
<Alert variant="destructive" size="sm">
  <AlertTitle>Validation Error</AlertTitle>
  <AlertDescription>
    Please fill in all required fields before submitting.
  </AlertDescription>
</Alert>

// Success message
<Alert variant="success" dismissible>
  <AlertTitle>Profile Updated</AlertTitle>
  <AlertDescription>
    Your profile information has been successfully updated.
  </AlertDescription>
</Alert>

// Nothing OS System Alert
<Alert variant="nothing" dotMatrix size="lg">
  <AlertTitle variant="nothing">TRANSPARENCY MODE ACTIVE</AlertTitle>
  <AlertDescription variant="nothing">
    Experience the unique Nothing Phone transparency with enhanced visual effects.
  </AlertDescription>
</Alert>

// Terminal Status
<Alert variant="terminal" icon={<Terminal className="h-5 w-5" />}>
  <AlertTitle variant="terminal">BUILD COMPLETED</AlertTitle>
  <AlertDescription variant="terminal">
    > npm run build<br/>
    > ✓ Compiled successfully<br/>
    > Ready in 2.3s
  </AlertDescription>
</Alert>`}
              previewLines={15}
            />
          </div>
        </div>

        <ComponentCode
          title="Component Source"
          description="Copy and paste the following code into your project."
          code={`// src/components/ui/alert.tsx
"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertTriangle, CheckCircle, Info, X, XCircle, Terminal, Zap, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

// Enhanced alert variants with modern gradients and shadows
const alertVariants = cva(
  "relative rounded-2xl border px-6 py-4 transition-all duration-300 animate-fade-in-up overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-background via-background to-muted/30 border-border/50 text-foreground shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 backdrop-blur-sm",
        destructive: "bg-gradient-to-br from-red-50 via-red-100/50 to-red-200/30 border-red-300/50 text-red-800 dark:from-red-950/40 dark:via-red-900/30 dark:to-red-800/20 dark:border-red-800/40 dark:text-red-100 shadow-xl shadow-red-500/20 hover:shadow-2xl hover:shadow-red-500/30 backdrop-blur-sm",
        warning: "bg-gradient-to-br from-amber-50 via-amber-100/50 to-amber-200/30 border-amber-300/50 text-amber-800 dark:from-amber-950/40 dark:via-amber-900/30 dark:to-amber-800/20 dark:border-amber-800/40 dark:text-amber-100 shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/30 backdrop-blur-sm",
        success: "bg-gradient-to-br from-emerald-50 via-emerald-100/50 to-emerald-200/30 border-emerald-300/50 text-emerald-800 dark:from-emerald-950/40 dark:via-emerald-900/30 dark:to-emerald-800/20 dark:border-emerald-800/40 dark:text-emerald-100 shadow-xl shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 backdrop-blur-sm",
        info: "bg-gradient-to-br from-blue-50 via-blue-100/50 to-blue-200/30 border-blue-300/50 text-blue-800 dark:from-blue-950/40 dark:via-blue-900/30 dark:to-blue-800/20 dark:border-blue-800/40 dark:text-blue-100 shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/30 backdrop-blur-sm",
        nothing: "bg-gradient-to-br from-background/95 via-background/90 to-accent/5 border-accent/30 text-foreground shadow-2xl shadow-accent/10 hover:shadow-accent/20 backdrop-blur-md relative",
        terminal: "bg-gradient-to-br from-background via-background to-accent/5 border-accent/40 text-foreground font-commit-mono text-sm shadow-2xl shadow-accent/15 hover:shadow-accent/25 backdrop-blur-md relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/5 before:to-transparent before:pointer-events-none",
      },
      size: {
        sm: "text-sm py-3 px-4",
        default: "text-sm py-4 px-6",
        lg: "text-base py-6 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// See full component implementation in src/components/ui/alert.tsx
// Features include:
// - Enhanced gradients and shadows
// - Accent stripes for semantic variants
// - Nothing OS corner dots with pulse animation
// - Icon containers with subtle backgrounds
// - Improved dismiss button styling
// - Backdrop blur effects
// - Responsive design`}
          previewLines={25}
        />
      </div>
    </ComponentLayout>
  );
  
}
