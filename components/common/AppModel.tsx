"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
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
  zIndex?: number;

  width?: string;   // e.g. "max-w-3xl"
  height?: string;  // e.g. "h-[600px]"
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
  width,
  height,
}: AppModalProps) {
  useEffect(() => {
    if (!open) return;

    openModalsCount++;
    if (openModalsCount === 1) {
      document.body.style.overflow = "hidden";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);

      openModalsCount--;
      if (openModalsCount === 0) {
        document.body.style.overflow = "";
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  // defaults (old behavior)
  const widthClass = width || "max-w-full sm:max-w-lg";

  const heightClass = height
    ? height
    : "max-h-[calc(100%-2rem)] sm:max-h-[calc(100%-32px)]";

  return createPortal(
    <div className="fixed inset-0" style={{ zIndex }}>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 ${overlayClassName}`}
      />

      {/* Modal box */}
      <div
        className={`
          absolute left-1/2 top-1/2
          w-full
          ${widthClass}
          ${heightClass}
          p-4
          -translate-x-1/2 -translate-y-1/2
          ${height ? "" : "overflow-y-auto"}
          rounded-lg bg-white shadow-lg
          ${contentClassName}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title */}
        {title && (
          <h2 className="mb-4 text-xl font-bold text-[#333]">
            {title}
          </h2>
        )}

        {/* Content */}
        {children}

        {/* Close button */}
        {!removeCloseButton && (
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full p-1.5 text-gray-600 hover:bg-gray-200"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}