"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X, Check, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

// Constants
const TOAST_LIMIT = 3;
const TOAST_REMOVE_DELAY = 5000;

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-3 overflow-hidden rounded-lg border p-4 pr-8 backdrop-blur-md transition-all duration-300 data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:translate-x-[-100%] before:transition-transform before:duration-1000 hover:before:translate-x-[100%]",
  {
    variants: {
      variant: {
        default: "border-border/20 bg-background/85 text-foreground shadow-xl shadow-black/5",
        destructive:
          "border-red-500/25 bg-background/85 text-foreground shadow-xl shadow-red-500/15 before:via-red-500/10",
        success:
          "border-accent/25 bg-background/85 text-foreground shadow-xl shadow-accent/15 before:via-accent/10",
        warning:
          "border-yellow-500/25 bg-background/85 text-foreground shadow-xl shadow-yellow-500/15 before:via-yellow-500/10",
        info:
          "border-blue-500/25 bg-background/85 text-foreground shadow-xl shadow-blue-500/15 before:via-blue-500/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

// Accent bar variants for consistent styling
const accentBarVariants = cva(
  "absolute left-0 top-0 w-1 h-full transition-colors duration-300",
  {
    variants: {
      variant: {
        default: "bg-foreground/20",
        success: "bg-accent",
        destructive: "bg-red-500",
        warning: "bg-yellow-500",
        info: "bg-blue-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  const role = variant === "destructive" ? "alert" : "status";
  
  return (
    <ToastPrimitives.Root
      ref={ref}
      role={role}
      aria-live={variant === "destructive" ? "assertive" : "polite"}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-3 top-3 rounded-sm p-1 text-foreground/40 opacity-0 transition-all duration-200 hover:text-foreground hover:bg-foreground/5 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-accent/50 group-hover:opacity-100",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-3.5 w-3.5 stroke-[2]" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

// Toast hook and context
interface ToastState {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  variant?: ToastProps["variant"];
  icon?: React.ReactNode;
  createdAt?: number;
  duration?: number;
}

// Action type constants
type ActionType = {
  ADD_TOAST: "ADD_TOAST";
  UPDATE_TOAST: "UPDATE_TOAST";
  DISMISS_TOAST: "DISMISS_TOAST";
  REMOVE_TOAST: "REMOVE_TOAST";
};

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToastState;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToastState>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToastState["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToastState["id"];
    };

interface State {
  toasts: ToastState[];
}


export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

// Context for toast state management
interface ToastContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const ToastContext = React.createContext<ToastContextType | null>(null);

// Toast Context Provider
export function ToastContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, { toasts: [] });
  const timeouts = React.useRef(new Map<string, ReturnType<typeof setTimeout>>());

  const addToRemoveQueue = React.useCallback(
    (toastId: string, delay = TOAST_REMOVE_DELAY) => {
      if (timeouts.current.has(toastId)) {
        return;
      }

      const timeout = setTimeout(() => {
        timeouts.current.delete(toastId);
        dispatch({
          type: "REMOVE_TOAST",
          toastId: toastId,
        });
      }, delay);

      timeouts.current.set(toastId, timeout);
    },
    []
  );

  // Handle dismiss action and queue removal
  React.useEffect(() => {
    const dismissedToasts = state.toasts.filter(toast => toast.open === false);
    dismissedToasts.forEach(toast => {
      addToRemoveQueue(toast.id);
    });
  }, [state.toasts, addToRemoveQueue]);

  // Cleanup timeouts on unmount
  React.useEffect(() => {
    const currentTimeouts = timeouts.current;
    return () => {
      currentTimeouts.forEach(clearTimeout);
      currentTimeouts.clear();
    };
  }, []);

  const value = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

type Toast = Omit<ToastState, "id">;

function useToast() {
  const context = React.useContext(ToastContext);
  
  if (!context) {
    throw new Error("useToast must be used within a ToastContextProvider");
  }

  const { state, dispatch } = context;

  const toast = React.useCallback(
    ({ duration = TOAST_REMOVE_DELAY, ...props }: Toast) => {
      const id = genId();
      const createdAt = Date.now();

      const update = (props: Partial<ToastState>) =>
        dispatch({
          type: "UPDATE_TOAST",
          toast: { ...props, id },
        });

      const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

      dispatch({
        type: "ADD_TOAST",
        toast: {
          ...props,
          id,
          createdAt,
          duration,
          open: true,
          onOpenChange: (open) => {
            if (!open) dismiss();
          },
        },
      });

      return {
        id,
        dismiss,
        update,
      };
    },
    [dispatch]
  );

  const dismiss = React.useCallback(
    (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
    [dispatch]
  );

  return {
    ...state,
    toast,
    dismiss,
  };
}

// Icon container variants for consistent styling
const iconContainerVariants = cva(
  "relative w-6 h-6 rounded-sm border flex items-center justify-center overflow-hidden",
  {
    variants: {
      variant: {
        success: "bg-accent/15 border-accent/40",
        destructive: "bg-red-500/15 border-red-500/40",
        warning: "bg-yellow-500/15 border-yellow-500/40",
        info: "bg-blue-500/15 border-blue-500/40",
      },
    },
  }
);

const iconVariants = cva(
  "relative h-3.5 w-3.5 stroke-[2.5]",
  {
    variants: {
      variant: {
        success: "text-accent",
        destructive: "text-red-500",
        warning: "text-yellow-500",
        info: "text-blue-500",
      },
    },
  }
);

const gradientVariants = cva(
  "absolute inset-0 bg-gradient-to-br to-transparent",
  {
    variants: {
      variant: {
        success: "from-accent/20",
        destructive: "from-red-500/20",
        warning: "from-yellow-500/20",
        info: "from-blue-500/20",
      },
    },
  }
);

// Helper function to create consistent icon containers
const createIconContainer = (icon: React.ReactElement, variant: "success" | "destructive" | "warning" | "info") => (
  <div className={iconContainerVariants({ variant })}>
    <div className={gradientVariants({ variant })} />
    {React.cloneElement(icon, { 
      className: iconVariants({ variant })
    } as React.HTMLAttributes<HTMLElement>)}
  </div>
);

// Custom hook with helper methods
function useToastWithHelpers() {
  const { toast: baseToast, ...rest } = useToast();

  const toast = React.useMemo(() => {
    const toastWithHelpers = Object.assign(baseToast, {
      success: (props: Omit<Toast, "variant" | "icon">) =>
        baseToast({
          ...props,
          variant: "success" as const,
          icon: createIconContainer(<Check />, "success"),
        }),

      error: (props: Omit<Toast, "variant" | "icon">) =>
        baseToast({
          ...props,
          variant: "destructive" as const,
          icon: createIconContainer(<X />, "destructive"),
        }),

      warning: (props: Omit<Toast, "variant" | "icon">) =>
        baseToast({
          ...props,
          variant: "warning" as const,
          icon: createIconContainer(<AlertTriangle />, "warning"),
        }),

      info: (props: Omit<Toast, "variant" | "icon">) =>
        baseToast({
          ...props,
          variant: "info" as const,
          icon: createIconContainer(<Info />, "info"),
        }),
    });

    return toastWithHelpers;
  }, [baseToast]);

  return { toast, ...rest };
}

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
  accentBarVariants,
  useToast,
  useToastWithHelpers,
};