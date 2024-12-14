"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // Replace with your utility for classNames if available

interface ToastProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  open = true,
  onOpenChange,
  title,
  description,
  action,
  className,
}) => {
  React.useEffect(() => {
    if (!open && onOpenChange) {
      const timer = setTimeout(() => onOpenChange(false), 300);
      return () => clearTimeout(timer);
    }
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div
      className={cn(
        "flex items-start space-x-3 p-4 bg-white shadow-lg rounded-md max-w-sm",
        className
      )}
    >
      <div className="flex-1">
        {title && <h4 className="text-sm font-medium">{title}</h4>}
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      {action && <div className="ml-4">{action}</div>}
    </div>
  );
};

interface ToasterProps {
  toasts: Array<{
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    action?: React.ReactNode;
    open: boolean;
    onOpenChange?: (open: boolean) => void;
  }>;
}

export const Toaster: React.FC<ToasterProps> = ({ toasts }) => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
  );
};
