"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";


import AppInput from "@/components/common/AppInput";
import AppText from "@/components/common/AppText";

export default function LoginPage() {

    const form = useForm();
    const router = useRouter();

    // const [form, setForm] = useState({
    //     phone_number: "+91",
    //     password: "",
    // });

    const [errors, setErrors] = useState<{ phone?: string }>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        //@ts-ignore
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: typeof errors = {};

        const phoneRegex = /^\+91[6-9]\d{9}$/;
        //@ts-ignore
        if (!phoneRegex.test(form.phone_number)) {
            newErrors.phone = "Enter a valid Indian number (+91XXXXXXXXXX)";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;
    }

    return (
        <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 md:pt-0">

            <div className="flex mb-4">
                <Image src={"/images/admin.png"} alt={"Turais Logo"} width={40} height={40}></Image>
                <AppText className="self-center text-2xl lg:text-3xl font-bold text-gray-900 whitespace-nowrap ml-8">Turais Admin</AppText>
            </div>



            {/* Card */}
            <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                <div className="p-6 sm:p-8 lg:p-16 space-y-8 text-center">


                    <form className="mt-8 space-y-6 text-center">
                        <div className="space-y-4">

                            <AppInput
                                name="phone_number"
                                label="Phone Number"
                                required
                                icon={<span>📞</span>}
                                //@ts-ignore
                                value={form.phone_number}
                                onChange={handleChange}
                                error={errors.phone}
                            />

                            <AppInput
                                name="password"
                                label="Password"
                                required
                                //@ts-ignore
                                value={form.password}
                                onChange={handleChange}
                                type="password"
                            />


                        </div>


                        <button
                            onClick={handleSubmit}
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
