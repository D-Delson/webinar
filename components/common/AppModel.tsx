"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

type AppModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  contentClassName?: string;
  overlayClassName?: string;
  removeCloseButton?: boolean;
};

export default function AppModal({
  open,
  onClose,
  title = "Modal",
  children,
  contentClassName = "",
  overlayClassName = "",
  removeCloseButton = false,
}: AppModalProps) {
  // Escape key handling
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 ${overlayClassName}`}
      />

      {/* Modal */}
      <div
        className={`absolute left-1/2 top-1/2 max-h-[calc(100%-32px)] w-[calc(100%-32px)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-lg bg-white p-4 shadow-lg ${contentClassName}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title (accessibility-friendly) */}
        {title && (
          <h2 className="mb-4 text-xl font-semibold text-gray-900">
            {title}
          </h2>
        )}

        {/* Content */}
        {children}

        {/* Close button */}
        {!removeCloseButton && (
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="
                      absolute right-3 top-3
                      rounded-full p-1.5
                      text-gray-600
                      hover:bg-gray-200
                      hover:text-gray-900
                      transition
                      focus:outline-none
                      focus:ring-2 focus:ring-gray-400/30
                    "
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
}
