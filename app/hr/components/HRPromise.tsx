"use client"

import Image from "next/image";
import { useState } from "react";
import { ChooseService } from "@/components/payment/ChooseService";
import AppModal from "@/components/common/AppModel";


type InfoBoxProps = {
    heading: string;
    description: string;
}


const InfoBox = ({ heading, description }: InfoBoxProps) => {

    return (
        <div className="w-fit bg-[#F8F9FA] rounded-xl px-8 pb-4">
            <div className="flex gap-2 py-4">
                <Image src={"/hr/tick.svg"} width={24} height={24} alt="tick" />
                <h2 className="font-bold text-[20px] text-[#071711]">{heading}</h2>
            </div>
            <p className="text-[18px] text-gray-500">{description}</p>
        </div>

    )



}

type HRPromiseTypes = {
    open: boolean;
    setOpen: (value: boolean) => void
}

const HRPromise = ({ open, setOpen }: HRPromiseTypes) => {

    return (
        <>
            <section className="px-4 md:px-28 py-10 md:py-20 font-sans w-full bg-white">

                <div className="flex justify-center text-center">
                    <div className="max-w-[650px]">
                        <h1 className="font-extrabold  text-[30px] leading-[51px] uppercase">
                            <span className="text-[#E53D25] italic">Guaranteed Setup in</span> 30-Days
                        </h1>
                        <p className="text-gray-500 text-[18px] px-8 md:px-16 leading-[33px] py-4">The end result? Your business runs without you running after everyone.</p>
                    </div>
                </div>
                {/* Boxes */}
                <div className="flex gap-4 flex-col md:flex-row mt-4 md:mt-12">
                    <InfoBox
                        heading="Daily Clarity"
                        description="Every worker gets a clear morning checklist so they can start work without waiting for you."
                    />

                    <InfoBox
                        heading="5-Minute Control"
                        description="A simple tracking system that lets you see the status of every order in just 5 minutes."
                    />

                    <InfoBox
                        heading="Rapid Onboarding"
                        description='A "Plug-and-Play" training manual that gets new hires job-ready in exactly 7 days.'
                    />

                    <InfoBox
                        heading="Staff Retention"
                        description='Clear roles and fair tracking that make good workers feel respected and stay longer.'
                    />

                </div>
                {/* Result box */}
                <div className="bg-[#071711] text-white flex flex-col md:flex-row w-full p-8 mt-8 md:mt-16 rounded-2xl gap-16 md:gap-0.5">

                    <div className="w-full md:w-2/3 flex flex-col items-center justify-between md:items-start">
                        <h2 className="capitalize font-light text-[22px] md:text-[26px] antialiased tracking-normal">the big result</h2>

                        <h2 className="capitalize font-medium text-[32px] md:text-[36px] mt-5 tracking-normal">4-6 Hours Saved</h2>

                        <p className="font-extralight text-[16px] text-[#C3CCD9] leading-[26px] mt-5 md:text-[18px] text-center tracking-normal">Recover your daily life. Use this time to find new orders and build your shop's future.</p>

                    </div>


                    <div className="w-full md:w-1/3 flex flex-col items-center gap-4 md:justify-center">
                        <div className="uppercase text-medium text-[20px] px-4 py-2 text-center">
                            need this result?
                        </div>
                        <div onClick={() => setOpen(!open)}
                            className=" text-medium rounded font-urbanist cursor-pointer text-[20px] bg-gradient-to-r from-[#E84127] via-[#DC2D1D] to-[#D41F17] px-8 py-2.5 text-center">
                            schedule call at ₹5,000
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HRPromise;