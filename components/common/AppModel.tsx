"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

// Track how many modals are open (for scroll lock)
let openModalsCount = 0;

type AppModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  contentClassName?: string;
  overlayClassName?: string;
  removeCloseButton?: boolean;
  zIndex?: number; // for nested modals
};

export default function AppModal({
  open,
  onClose,
  title = "Modal",
  children,
  contentClassName = "",
  overlayClassName = "",
  removeCloseButton = false,
  zIndex = 50,
}: AppModalProps) {
  useEffect(() => {
    if (!open) return;

    // Increase modal counter and lock scroll if first modal
    openModalsCount++;
    if (openModalsCount === 1) {
      document.body.style.overflow = "hidden";
    }

    const handleEsc = (e: KeyboardEvent) => {
      // Only close if this is the topmost modal
      if (e.key === "Escape" && openModalsCount === 1) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);

      // Decrease modal counter and restore scroll if last modal
      openModalsCount--;
      if (openModalsCount === 0) {
        document.body.style.overflow = "";
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={`fixed inset-0 z-[${zIndex}]`}>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 ${overlayClassName}`}
      />

      {/* Modal content */}
      <div
        className={`
      absolute left-1/2 top-1/2
      w-full max-w-full sm:max-w-lg
      max-h-[calc(100%-2rem)] sm:max-h-[calc(100%-32px)]
      p-4
      -translate-x-1/2 -translate-y-1/2
      overflow-y-auto rounded-lg bg-white shadow-lg
      ${contentClassName}
    `}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Title */}
        {title && (
          <h2 className="mb-4 text-xl font-semibold text-[#333] font-bold">
            {title}
          </h2>
        )}

        {/* Modal content */}
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
