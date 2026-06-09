"use client";

import { ReactNode } from "react";
import DatePicker from "react-datepicker";


type AppDateTimePickerProps = {
    label?: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
    placeholder?: string;
    icon?: ReactNode;
    error?: string;
    required?: boolean;
    disabled?: boolean;
};

export default function AppDateTimePicker({
    label,
    value,
    onChange,
    placeholder = "Select date & time",
    icon,
    error,
    required,
    disabled,
}: AppDateTimePickerProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="text-red-500"> *</span>}
                </label>
            )}

            <div className="relative">
                {icon && (
                    <span className="pointer-events-none absolute left-3 top-1/2 z-10  text-gray-400">
                        {icon}
                    </span>
                )}

                <DatePicker
                    selected={value}
                    onChange={onChange}
                    showTimeSelect
                    timeIntervals={30}
                    dateFormat="dd/MM/yyyy h:mm aa"
                    placeholderText={placeholder}
                    disabled={disabled}
                    wrapperClassName="w-full"
                    className={`
            w-full
            rounded-lg
            border
            ${error ? "border-red-500" : "border-gray-300"}
            bg-white
            px-4 py-2.5
            text-sm
            text-gray-900
            shadow-sm
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20
            focus:outline-none
            ${icon ? "pl-10" : ""}
          `}
                />
            </div>

            {error && (
                <p className="mt-1 text-xs text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}