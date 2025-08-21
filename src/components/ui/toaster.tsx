"use client";

import * as React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  accentBarVariants,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/toast";

// Memoized toast item component to prevent unnecessary re-renders
const ToastItem = React.memo<{
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
  icon?: React.ReactNode;
  variant?: "default" | "destructive" | "success" | "warning" | "info" | null;
  createdAt?: number;
  [key: string]: unknown;
}>(({ id, title, description, action, icon, variant = "default", createdAt, ...props }) => {
  const normalizedVariant = variant || "default";
  // Memoize timestamp to prevent Date creation on every render
  const timestamp = React.useMemo(() => {
    const date = createdAt ? new Date(createdAt) : new Date();
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, [createdAt]);

  return (
    <Toast key={id} variant={normalizedVariant} {...props}>
      {/* Nothing OS style accent bar with CVA */}
      <div className={accentBarVariants({ variant: normalizedVariant })} />
      
      <div className="flex items-start gap-3 pl-1">
        {icon && (
          <div className="flex-shrink-0 mt-1">
            {icon}
          </div>
        )}
        <div className="grid gap-1.5 flex-1">
          {title && (
            <div className="flex items-center justify-between">
              <ToastTitle className="font-ndot font-medium text-sm leading-tight tracking-wider uppercase">
                {title}
              </ToastTitle>
              <div className="text-xs font-mono opacity-40 tracking-wide">
                {timestamp}
              </div>
            </div>
          )}
          {description && (
            <ToastDescription className="text-xs leading-relaxed opacity-70 font-sans">
              {description}
            </ToastDescription>
          )}
        </div>
      </div>
      {action}
      <ToastClose />
    </Toast>
  );
});

ToastItem.displayName = "ToastItem";

export const Toaster = React.memo(() => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          {...toast}
        />
      ))}
      <ToastViewport />
    </ToastProvider>
  );
});

Toaster.displayName = "Toaster";