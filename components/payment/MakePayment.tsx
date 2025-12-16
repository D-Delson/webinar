"use client";

import { useState, InputHTMLAttributes, ReactNode } from "react";
import toast from "react-hot-toast";

import { MAKE_PAYMENT_API } from "@/api/endpoints/payment";
import { getHostAPIUrl } from "@/utils/getHostUrl";
import { loadRazorpay } from "@/utils/razorpay";

/* -------------------- Reusable Input -------------------- */

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    icon?: ReactNode;
    error?: string;
};

function AppInput({ label, icon, error, className = "", ...props }: InputProps) {
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

/* -------------------- Textarea -------------------- */

type AppTextareaProps =
    React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
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
          w-full
          min-h-[100px]
          resize-none
          rounded-lg
          border border-gray-300
          bg-white
          px-4 py-2.5
          text-sm text-gray-900
          placeholder-gray-400
          shadow-sm
          transition
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-500/20
          focus:outline-none
          ${className}
        `}
            />
        </div>
    );
}

/* -------------------- Main Form -------------------- */

type MakePaymentProps = {
    amount: number;
    type: string;
    onSuccess?: (data: any) => void;
};

export default function MakePaymentForm({ amount, type, onSuccess }: MakePaymentProps) {
    const [form, setForm] = useState({
        name: "",
        type: type,
        company_name: "",
        enquiry: "",
        email: "",
        phone_number: "+91",
    });

    const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    /* -------------------- Validation -------------------- */

    const validate = () => {
        const newErrors: typeof errors = {};

        const phoneRegex = /^\+91[6-9]\d{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!phoneRegex.test(form.phone_number)) {
            newErrors.phone = "Enter a valid Indian number (+91XXXXXXXXXX)";
        }

        if (!emailRegex.test(form.email)) {
            newErrors.email = "Enter a valid email address";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /* -------------------- Submit -------------------- */

    // const handleSubmit = async () => {
    //     if (!validate()) return;

    //     const url = getHostAPIUrl() + MAKE_PAYMENT_API;

    //     const payload = {
    //         ...form,
    //         amount,
    //     };

    //     console.log("➡️ Request URL:", url);
    //     console.log("➡️ Request Body:", payload);

    //     try {
    //         const res = await fetch(url, {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(payload),
    //         });

    //         console.log("⬅️ Response status:", res.status);

    //         const data = await res.json();

    //         console.log("⬅️ Response data:", data);

    //         onSuccess?.(data);
    //     } catch (err) {
    //         console.error("❌ Payment error:", err);
    //     }
    // };

    const handleSubmit = async () => {
        if (!validate()) return;

        const url = getHostAPIUrl() + MAKE_PAYMENT_API;
        const payload = { ...form, amount };

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await res.json();
            const order = result.data;

            const isLoaded = await loadRazorpay();
            if (!isLoaded) {
                alert("Razorpay SDK failed to load");
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
                    name: order.name,
                    email: order.email,
                    contact: order.phone_number,
                },

                handler: async function (response: any) {

                    const verifyUrl =
                        getHostAPIUrl() +
                        `api/payment/verify-payment/${order.receipt}/`;

                    const verifyPayload = {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    };

                    try {
                        const verifyRes = await fetch(verifyUrl, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(verifyPayload),
                        });

                        if (!verifyRes.ok) {
                            throw new Error("Payment verification failed");
                        }

                        toast.success("🎉 Payment verified successfully, Our Team will Contact You in 24 hours");

                        onSuccess?.({
                            order_id: response.razorpay_order_id,
                            payment_id: response.razorpay_payment_id,
                        });
                    } catch (err) {
                        console.error("❌ Verification error:", err);
                        alert("Payment received but verification failed. Contact support.");
                    }
                },


                modal: {
                    ondismiss: function () {
                        console.log("❌ Payment popup closed");
                    },
                },

                theme: {
                    color: "#2563eb", // Tailwind blue-600
                },
            };

            const razorpay = new (window as any).Razorpay(options);
            razorpay.open();
        } catch (err) {
            console.error("❌ Payment error:", err);
        }
    };


    return (
        <div className="space-y-4">
            <AppInput
                name="name"
                label="Name"
                placeholder="Your full name"
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
                onChange={handleChange}
            />

            <AppTextarea
                name="enquiry"
                label="Enquiry"
                placeholder="Describe what you'd like to discuss (optional)"
                onChange={handleChange}
            />

            <button
                onClick={handleSubmit}
                className="
          w-full
          rounded-lg
          bg-blue-600
          py-2.5
          text-sm font-semibold text-white
          transition
          hover:bg-blue-700
          focus:outline-none
          focus:ring-2 focus:ring-blue-500/30
        "
            >
                Pay ₹{amount}
            </button>
        </div>
    );
}
