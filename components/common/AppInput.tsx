import { InputHTMLAttributes, ReactNode } from "react";

/* -------------------- Reusable Input -------------------- */

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    icon?: ReactNode;
    error?: string;
};

export default function AppInput({ label, icon, error, className = "", ...props }: InputProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    {label}
                    {props.required && <span className="text-red-500"> *</span>}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        {icon}
                    </span>
                )}

                <input
                    {...props}
                    className={`
            w-full
            rounded-lg
            border ${error ? "border-red-500" : "border-gray-300"}
            bg-white
            px-4 py-2.5
            text-sm text-gray-900
            placeholder-gray-400
            shadow-sm
            transition
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-500/20
            focus:outline-none
            ${icon ? "pl-10" : ""}
            ${className}
          `}
                />
            </div>

            {error && (
                <p className="mt-1 text-xs text-red-600">{error}</p>
            )}
        </div>
    );
}