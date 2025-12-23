"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { MAKE_PAYMENT_API } from "@/api/endpoints/payment";
import { getHostAPIUrl } from "@/utils/getHostUrl";
import { loadRazorpay } from "@/utils/razorpay";
import AppInput from "../common/AppInput";

const MIN_AMOUNT = 499;

/* -------------------- Textarea Component -------------------- */
type AppTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
};

function AppTextarea({ label, className = "", ...props }: AppTextareaProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <textarea
                {...props}
                className={`
          w-full min-h-[100px] resize-none rounded-lg
          border border-gray-300 bg-white
          px-4 py-2.5 text-sm text-gray-900
          placeholder-gray-400 shadow-sm transition
          focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
          focus:outline-none ${className}
        `}
            />
        </div>
    );
}

/* -------------------- Main Form -------------------- */
type MakePaymentProps = {
    amount?: number;
    type: string;
    onSuccess?: (data: any) => void;
};

export default function MakePaymentForm({
    amount: initialAmount = MIN_AMOUNT,
    type,
    onSuccess,
}: MakePaymentProps) {
    const [form, setForm] = useState({
        name: "",
        type,
        company_name: "",
        enquiry: "",
        email: "",
        phone_number: "+91",
        amount: initialAmount.toString(), // ← stored as string for clean editing
    });

    const [errors, setErrors] = useState<{
        email?: string;
        phone?: string;
        amount?: string;
    }>({});

    /* -------------------- Change Handler -------------------- */
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        if (name === "amount") {
            // Only allow digits or empty string
            if (value === "" || /^\d+$/.test(value)) {
                setForm((prev) => ({ ...prev, amount: value }));

                // Live validation
                const numValue = value === "" ? 0 : Number(value);
                setErrors((prev) => ({
                    ...prev,
                    amount:
                        value !== "" && numValue < MIN_AMOUNT
                            ? `Minimum amount is ₹${MIN_AMOUNT}`
                            : undefined,
                }));
            }
            return;
        }

        // Other fields
        setForm((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    };

    /* -------------------- Validation -------------------- */
    const validate = () => {
        const newErrors: typeof errors = {};

        const phoneRegex = /^\+91[6-9]\d{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!phoneRegex.test(form.phone_number)) {
            newErrors.phone = "Enter a valid Indian number (+91XXXXXXXXXX)";
        }

        if (!form.email || !emailRegex.test(form.email)) {
            newErrors.email = "Enter a valid email address";
        }

        const amountNum = form.amount === "" ? 0 : Number(form.amount);
        if (amountNum < MIN_AMOUNT) {
            newErrors.amount = `Minimum amount is ₹${MIN_AMOUNT}`;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* -------------------- Submit Handler -------------------- */
    const handleSubmit = async () => {
        if (!validate()) return;

        const url = getHostAPIUrl() + MAKE_PAYMENT_API;
        const payload = {
            ...form,
            amount: Number(form.amount), // convert to number only when sending
        };

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Payment initiation failed");

            const result = await res.json();
            const order = result.data;

            const isLoaded = await loadRazorpay();
            if (!isLoaded) {
                toast.error("Payment SDK failed to load");
                return;
            }

            const options = {
                key: order.razorpay_key,
                amount: order.amount,
                currency: order.currency,
                name: "TN Growth Consultants",
                description: "15-min Consultation Call",
                order_id: order.id,
                prefill: {
                    name: form.name,
                    email: form.email,
                    contact: form.phone_number,
                },
                handler: async (response: any) => {
                    toast.success("🎉 Payment successful! Our Team will contact you in 24 hours.");
                    onSuccess?.(response);
                },
                theme: { color: "#2563eb" },
            };

            const razorpay = new (window as any).Razorpay(options);
            razorpay.open();
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Please try again.");
        }
    };

    /* -------------------- Render -------------------- */
    const amountNum = form.amount === "" ? 0 : Number(form.amount);
    const canPay = amountNum >= MIN_AMOUNT;

    return (
        <div className="space-y-5">
            <AppInput
                name="name"
                label="Name"
                value={form.name}
                onChange={handleChange}
            />

            <AppInput
                name="phone_number"
                label="Phone Number"
                required
                icon={<span>📞</span>}
                value={form.phone_number}
                onChange={handleChange}
                error={errors.phone}
            />

            <AppInput
                name="email"
                label="Email"
                type="email"
                required
                placeholder="you@example.com"
                icon={<span>📧</span>}
                value={form.email}
                onChange={handleChange}
                error={errors.email}
            />

            <AppInput
                name="company_name"
                label="Company Name"
                placeholder="Optional"
                value={form.company_name}
                onChange={handleChange}
            />

            <AppTextarea
                name="enquiry"
                label="Enquiry"
                placeholder="Describe what you'd like to discuss (optional)"
                value={form.enquiry}
                onChange={handleChange}
            />

            <div>
                <AppInput
                    name="amount"
                    //@ts-ignore
                    label={
                        <div className="flex items-center justify-between">
                            <span>Amount (₹)</span>
                            <span className="text-xs text-gray-500">Min ₹{MIN_AMOUNT}</span>
                        </div>
                    }
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={form.amount}
                    onChange={handleChange}
                    error={errors.amount}
                    placeholder="Enter amount"
                    className="
            [appearance:textfield]
            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none
          "
                />
                {!errors.amount && (
                    <p className="mt-1 text-xs text-gray-500">
                        Minimum payable amount is ₹{MIN_AMOUNT}
                    </p>
                )}
            </div>

            <button
                onClick={handleSubmit}
                disabled={!canPay}
                className={`
          w-full rounded-lg py-3 font-semibold text-white transition
          ${canPay
                        ? "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                        : "bg-gray-400 cursor-not-allowed"
                    }
        `}
            >
                Pay ₹{amountNum || "0"}
            </button>
        </div>
    );
}