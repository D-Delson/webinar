"use client";

import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import AppInput from "@/components/common/AppInput";
import AppText from "@/components/common/AppText";
import { setTokenData } from "@/api/utils/tokenHelpers";
import { getHostAPIUrl } from "@/utils/getHostUrl";

import { ADMIN_LOGIN_API } from "@/api/endpoints/auth";
interface LoginForm {
    phone_number: string;
    password: string;
}

export default function LoginPage() {
    const { register, handleSubmit } = useForm<LoginForm>({
        defaultValues: { phone_number: "+91", password: "" },
    });
    const router = useRouter();

    const [errors, setErrors] = useState<{ phone?: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validatePhone = (phone: string) => {
        const phoneRegex = /^\+91[6-9]\d{9}$/;
        if (!phoneRegex.test(phone)) {
            setErrors({ phone: "Enter a valid Indian number (+91XXXXXXXXXX)" });
            return false;
        }
        setErrors({});
        return true;
    };

    const onSubmit = async (data: LoginForm) => {
        if (isSubmitting) return;
        setIsSubmitting(true);
        if (!validatePhone(data.phone_number)) return;

        try {
            const response = await axios.post(getHostAPIUrl() + ADMIN_LOGIN_API, {
                phone_number: data.phone_number,
                password: data.password,
            });

            const { access, refresh } = response.data?.data;

            if (access && refresh) {
                // Save tokens
                setTokenData({ token: { access: access, refresh: refresh } });

                // Navigate to dashboard
                router.push("/dashboard");
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.data?.detail || "Login failed")
        }
    };

    return (
        <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 md:pt-0">
            <div className="flex mb-4">
                <Image src={"/images/admin.png"} alt={"Turais Logo"} width={40} height={40} />
                <AppText className="self-center text-2xl lg:text-3xl font-bold text-gray-900 whitespace-nowrap ml-8">
                    Turais Admin
                </AppText>
            </div>

            <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                <div className="p-6 sm:p-8 lg:p-16 space-y-8 text-center">
                    <form className="mt-8 space-y-6 text-center" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <AppInput
                                label="Phone Number"
                                {...register("phone_number")}
                                error={errors.phone}
                            />

                            <AppInput
                                label="Password"
                                {...register("password")}
                                type="password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-[#0E172A] hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
                        >
                            Login to Dashboard
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
