"use client";

import { ComponentLayout } from "@/components/component-layout";
import { ComponentPreview } from "@/components/component-preview";
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
          <ComponentPreview
            title="Default Alert"
            description="A simple alert with default styling and automatic icon selection."
            preview={
              <div className="w-full max-w-2xl space-y-4">
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    You can add components and dependencies to your app using
                    the cli.
                  </AlertDescription>
                </Alert>
              </div>
            }
            code={`<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>`}
          />
        </div>

        <div id="variants">
          <ComponentPreview
            title="Alert Variants"
            description="Different semantic variants with appropriate colors and icons."
            preview={
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
            }
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
          />
        </div>

        <div id="nothing-variants">
          <ComponentPreview
            title="Nothing OS Variants"
            description="Special variants inspired by Nothing OS design with ndot typography and distinctive styling."
            preview={
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
            }
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
          />
        </div>

        <div id="sizes">
          <ComponentPreview
            title="Alert Sizes"
            description="Different sizes to match your design needs."
            preview={
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
            }
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
          />
        </div>

        <div id="dismissible">
          <ComponentPreview
            title="Dismissible Alerts"
            description="Alerts that can be dismissed by the user."
            preview={
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
            }
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
          />
        </div>

        <div id="custom-icons">
          <ComponentPreview
            title="Custom Icons"
            description="Use custom icons or hide the icon completely."
            preview={
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
            }
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
          />
        </div>

        <div id="examples">
          <ComponentPreview
            title="Real-world Examples"
            description="Practical examples showing how to use alerts in real applications."
            preview={
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
            }
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
          />
        </div>

        <ComponentCode
          title="Component Source"
          description="Copy and paste the following code into your project."
          code={`"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  X, 
  XCircle,
  Terminal,
  Zap,
  Bell
} from "lucide-react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative rounded-xl border-2 px-6 py-4 transition-all duration-300 animate-fade-in-up",
  {
    variants: {
      variant: {
        default:
          "bg-background border-border text-foreground shadow-sm hover:shadow-md",
        destructive:
          "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/30 dark:border-red-800 dark:text-red-200 shadow-sm shadow-red-500/20",
        warning:
          "bg-orange-50 border-orange-200 text-orange-900 dark:bg-orange-950/30 dark:border-orange-800 dark:text-orange-200 shadow-sm shadow-orange-500/20",
        success:
          "bg-green-50 border-green-200 text-green-900 dark:bg-green-950/30 dark:border-green-800 dark:text-green-200 shadow-sm shadow-green-500/20",
        info:
          "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-200 shadow-sm shadow-blue-500/20",
        nothing:
          "bg-background/95 backdrop-blur-sm border-accent/30 text-foreground shadow-lg shadow-accent/10 relative overflow-hidden",
        terminal:
          "bg-background border-accent/40 text-foreground font-commit-mono text-sm shadow-lg relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-accent/5 before:to-transparent before:pointer-events-none",
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

const alertIconVariants = cva("flex-shrink-0", {
  variants: {
    variant: {
      default: "text-foreground",
      destructive: "text-red-600 dark:text-red-400",
      warning: "text-orange-600 dark:text-orange-400",
      success: "text-green-600 dark:text-green-400",
      info: "text-blue-600 dark:text-blue-400",
      nothing: "text-accent",
      terminal: "text-accent",
    },
    size: {
      sm: "h-4 w-4",
      default: "h-5 w-5",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  showIcon?: boolean;
  dismissible?: boolean;
  onDismiss?: () => void;
  dotMatrix?: boolean;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ 
    className, 
    variant, 
    size, 
    icon, 
    showIcon = true,
    dismissible = false,
    onDismiss,
    dotMatrix = false,
    children, 
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true);

    const handleDismiss = () => {
      setIsVisible(false);
      onDismiss?.();
    };

    const getDefaultIcon = () => {
      switch (variant) {
        case "destructive":
          return <XCircle className={cn(alertIconVariants({ variant, size }))} />;
        case "warning":
          return <AlertTriangle className={cn(alertIconVariants({ variant, size }))} />;
        case "success":
          return <CheckCircle className={cn(alertIconVariants({ variant, size }))} />;
        case "info":
          return <Info className={cn(alertIconVariants({ variant, size }))} />;
        case "nothing":
          return <Zap className={cn(alertIconVariants({ variant, size }))} />;
        case "terminal":
          return <Terminal className={cn(alertIconVariants({ variant, size }))} />;
        default:
          return <Bell className={cn(alertIconVariants({ variant, size }))} />;
      }
    };

    if (!isVisible) return null;

    return (
      <div
        ref={ref}
        className={cn(alertVariants({ variant, size }), className)}
        {...props}
      >
        {/* Nothing OS corner dots */}
        {variant === "nothing" && (
          <>
            <div className="absolute top-2 left-2 w-1 h-1 bg-accent/30 rounded-full" />
            <div className="absolute top-2 right-2 w-1 h-1 bg-accent/30 rounded-full" />
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent/30 rounded-full" />
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-accent/30 rounded-full" />
          </>
        )}

        {/* Dot matrix background for Nothing variant */}
        {variant === "nothing" && dotMatrix && (
          <div 
            className="absolute inset-0 pointer-events-none opacity-5"
            style={{
              backgroundImage: \`radial-gradient(circle at center, currentColor 0.5px, transparent 0.5px)\`,
              backgroundSize: "8px 8px",
            }}
          />
        )}

        <div className="flex items-start space-x-3 relative z-10">
          {/* Icon */}
          {showIcon && (
            <div className="mt-0.5">
              {icon || getDefaultIcon()}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            {children}
          </div>

          {/* Dismiss button */}
          {dismissible && (
            <button
              onClick={handleDismiss}
              className={cn(
                "mt-0.5 p-1 rounded-md transition-colors duration-200 hover:bg-current/10 flex-shrink-0",
                variant === "nothing" ? "text-accent hover:bg-accent/10" : "text-current"
              )}
              aria-label="Dismiss alert"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: VariantProps<typeof alertVariants>["variant"];
}

const AlertTitle = React.forwardRef<HTMLParagraphElement, AlertTitleProps>(
  ({ className, variant, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn(
        "mb-2 font-medium leading-none tracking-tight",
        variant === "nothing" || variant === "terminal" ? "font-ndot text-base" : "text-sm",
        className
      )}
      {...props}
    />
  )
);
AlertTitle.displayName = "AlertTitle";

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: VariantProps<typeof alertVariants>["variant"];
}

const AlertDescription = React.forwardRef<HTMLParagraphElement, AlertDescriptionProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "text-sm leading-relaxed",
        variant === "nothing" ? "font-ndot text-foreground/90" : "[&_p]:leading-relaxed",
        variant === "terminal" ? "font-commit-mono text-xs" : "",
        className
      )}
      {...props}
    />
  )
);
AlertDescription.displayName = "AlertDescription";

export { 
  Alert, 
  AlertTitle, 
  AlertDescription, 
  alertVariants, 
  alertIconVariants 
};`}
        />

        </div>
    </ComponentLayout>
  );
}
