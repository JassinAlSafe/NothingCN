export const accordionSourceCode = `"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Main accordion container variants
const accordionVariants = cva("w-full space-y-4", {
  variants: {
    variant: {
      default: "",
      bordered:
        "border-2 border-border/40 rounded-3xl p-4 bg-background/80 backdrop-blur-sm",
      minimal: "space-y-2",
      pixel: "space-y-0 font-mono",
      nothing: "space-y-3",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Individual accordion item variants
const accordionItemVariants = cva("group relative", {
  variants: {
    variant: {
      default:
        "border-2 border-border/60 rounded-2xl overflow-hidden bg-background/90 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-lg",
      bordered:
        "border border-border/40 rounded-xl overflow-hidden bg-background/60 backdrop-blur-sm",
      minimal: "border-b border-border/30 last:border-b-0 bg-transparent",
      pixel:
        "border-2 border-foreground bg-background overflow-hidden shadow-[4px_4px_0px_0px_theme(colors.foreground)] mb-2 last:mb-0 rounded-none",
      nothing:
        "border-2 border-border/40 rounded-3xl overflow-hidden bg-background/95 backdrop-blur-md transition-all duration-300 hover:border-accent/60 hover:bg-background shadow-sm hover:shadow-xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Trigger button variants
const accordionTriggerVariants = cva(
  "flex w-full items-center justify-between p-6 text-left font-medium transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "text-lg font-semibold hover:bg-accent/5 font-ndot tracking-wide",
        bordered: "text-base hover:bg-accent/5 font-ndot",
        minimal:
          "p-4 text-base hover:bg-transparent hover:text-accent font-ndot",
        pixel:
          "font-mono font-bold text-xs uppercase tracking-wider bg-background hover:bg-foreground hover:text-background border-0 shadow-none p-4",
        nothing:
          "text-xl font-ndot font-medium tracking-wide hover:bg-accent/5 hover:text-accent relative pl-12 pr-8",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Content area variants
const accordionContentVariants = cva(
  "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:h-0 data-[state=closed]:opacity-0 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
  {
    variants: {
      variant: {
        default: "data-[state=open]:pb-6",
        bordered: "data-[state=open]:pb-6",
        minimal: "data-[state=open]:pb-4",
        pixel: "data-[state=open]:pb-4 font-mono text-sm",
        nothing: "data-[state=open]:pb-8",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Context for managing accordion state
const AccordionContext = React.createContext<{
  value: string | string[];
  onValueChange: (itemValue: string) => void;
  type: "single" | "multiple";
  variant: "default" | "bordered" | "minimal" | "pixel" | "nothing";
  disabled?: boolean;
}>({
  value: "",
  onValueChange: () => {},
  type: "single",
  variant: "default",
});

// Individual item context
const AccordionItemContext = React.createContext<{
  value: string;
  isOpen: boolean;
  onToggle: () => void;
  disabled?: boolean;
}>({
  value: "",
  isOpen: false,
  onToggle: () => {},
});

// Main accordion component
export interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof accordionVariants> {
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  disabled?: boolean;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      className,
      variant = "default",
      type = "single",
      value: controlledValue,
      defaultValue,
      onValueChange,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState<string | string[]>(() => {
      if (type === "single") {
        return typeof defaultValue === "string" ? defaultValue : "";
      } else {
        return Array.isArray(defaultValue) ? defaultValue : [];
      }
    });

    const value = controlledValue !== undefined ? controlledValue : internalValue;
    
    const setValue = React.useCallback(
      (newValue: string | string[]) => {
        if (controlledValue === undefined) {
          setInternalValue(newValue);
        }
        onValueChange?.(newValue);
      },
      [controlledValue, onValueChange]
    );

    const handleValueChange = React.useCallback(
      (itemValue: string) => {
        if (disabled) return;

        if (type === "single") {
          // For single type, the value is always a string
          const currentValue = value as string;
          setValue(currentValue === itemValue ? "" : itemValue);
        } else {
          // For multiple type, the value is always an array
          const currentValues = (value as string[]) || [];
          if (currentValues.includes(itemValue)) {
            setValue(currentValues.filter((v) => v !== itemValue));
          } else {
            setValue([...currentValues, itemValue]);
          }
        }
      },
      [type, value, setValue, disabled]
    );

    const contextValue = React.useMemo(
      () => ({
        value,
        onValueChange: handleValueChange,
        type,
        variant: variant || "default",
        disabled,
      }),
      [value, handleValueChange, type, variant, disabled]
    );

    return (
      <AccordionContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(accordionVariants({ variant }), className)}
          {...props}
        >
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

// Individual accordion item
export interface AccordionItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, value, disabled: itemDisabled, children, ...props }, ref) => {
    const {
      value: accordionValue,
      onValueChange,
      variant,
      type,
      disabled: accordionDisabled,
    } = React.useContext(AccordionContext);

    const isOpen = type === "multiple" 
      ? (accordionValue as string[]).includes(value)
      : (accordionValue as string) === value;

    const disabled = accordionDisabled || itemDisabled;

    const handleToggle = React.useCallback(() => {
      if (!disabled) {
        onValueChange(value);
      }
    }, [disabled, onValueChange, value]);

    const itemContextValue = React.useMemo(
      () => ({
        value,
        isOpen,
        onToggle: handleToggle,
        disabled,
      }),
      [value, isOpen, handleToggle, disabled]
    );

    return (
      <AccordionItemContext.Provider value={itemContextValue}>
        <div
          ref={ref}
          className={cn(accordionItemVariants({ variant }), className)}
          data-state={isOpen ? "open" : "closed"}
          {...props}
        >
          {children}

          {/* Nothing OS Corner Dots */}
          {variant === "nothing" && (
            <>
              <div className="absolute top-4 left-4 w-1 h-1 bg-accent/60 rounded-full z-10" />
              <div className="absolute top-4 right-4 w-1 h-1 bg-accent/60 rounded-full z-10" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/60 rounded-full z-10" />
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-accent/60 rounded-full z-10" />

              {/* Subtle background pattern */}
              <div className="absolute inset-0 pointer-events-none opacity-5 rounded-3xl">
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl" />
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-lg" />
              </div>
            </>
          )}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

// Accordion trigger/header
const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, children, ...props }, ref) => {
  const { variant } = React.useContext(AccordionContext);
  const { isOpen, onToggle, disabled } = React.useContext(AccordionItemContext);

  return (
    <button
      ref={ref}
      className={cn(accordionTriggerVariants({ variant }), className)}
      data-state={isOpen ? "open" : "closed"}
      disabled={disabled}
      onClick={onToggle}
      {...props}
    >
      {children}

      {/* Nothing OS enhanced chevron */}
      {variant === "nothing" ? (
        <div className="relative">
          <ChevronDown className="h-6 w-6 shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          {/* Subtle glow effect when open */}
          {isOpen && (
            <div className="absolute inset-0 h-6 w-6 bg-accent/20 rounded-full blur-sm transition-opacity duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          )}
        </div>
      ) : (
        <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      )}

      {/* Nothing OS active state indicator */}
      {variant === "nothing" && (
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1 z-10">
          <div
            className={cn(
              "w-1 h-1 rounded-full transition-all duration-300",
              isOpen ? "bg-accent opacity-100" : "bg-border/40 opacity-60"
            )}
          />
          <div
            className={cn(
              "w-1 h-1 rounded-full transition-all duration-300",
              isOpen
                ? "bg-accent opacity-100 animate-pulse [animation-delay:0.1s]"
                : "bg-border/40 opacity-60"
            )}
          />
          <div
            className={cn(
              "w-1 h-1 rounded-full transition-all duration-300",
              isOpen
                ? "bg-accent opacity-100 animate-pulse [animation-delay:0.2s]"
                : "bg-border/40 opacity-60"
            )}
          />
        </div>
      )}
    </button>
  );
});

// Accordion content
const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { variant } = React.useContext(AccordionContext);
  const { isOpen } = React.useContext(AccordionItemContext);

  return (
    <div
      ref={ref}
      className={cn(accordionContentVariants({ variant }), className)}
      data-state={isOpen ? "open" : "closed"}
      style={{ display: isOpen ? "block" : "none" }}
      {...props}
    >
      <div className={cn(
        "pt-0",
        variant === "default" && "px-6",
        variant === "bordered" && "px-6", 
        variant === "minimal" && "px-4",
        variant === "pixel" && "px-4",
        variant === "nothing" && "px-8"
      )}>
        {variant === "nothing" && (
          <div className="relative">
            {/* Subtle dot matrix background for content */}
            <div
              className="absolute inset-0 pointer-events-none opacity-5"
              style={{
                backgroundImage: \`radial-gradient(circle at center, currentColor 0.5px, transparent 0.5px)\`,
                backgroundSize: "8px 8px",
              }}
            />
            <div className="relative z-10 font-ndot text-base leading-relaxed text-foreground/90">
              {children}
            </div>
          </div>
        )}
        {variant !== "nothing" && children}
      </div>
    </div>
  );
});

// Display names
Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionVariants,
  accordionItemVariants,
  accordionTriggerVariants,
  accordionContentVariants,
};`;