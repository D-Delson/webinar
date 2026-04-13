"use client"

import { useState } from "react";
import AppModal from "@/components/common/AppModel";
import { ChooseService } from "@/components/payment/ChooseService";

import HRAbout from "./components/HRAbout";
import HRWhy from "./components/HRWhy";
import HRPromise from "./components/HRPromise";
import HRNextPlan from "./components/HRNextPlan";
import HROutcome from "./components/HROutcom";
import HROffer from "./components/HROffer";
import HRFAQ from "./components/HRFAQ";
import HROfferTimer from "./components/HROfferTimer";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    weight: ["400", "500", "600", "700", "800"],
});

import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    subsets: ["latin"],
    variable: "--font-urbanist",
    weight: ["400", "500", "600", "700", "800"],
});

const HR = () => {

    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={`${inter.variable} ${urbanist.variable}`}>
                <HRAbout />
                <HRWhy />
                <HRPromise open={open} setOpen={() => setOpen(!open)} />
                <HRNextPlan />
                <HROutcome />
                <HROffer />
                <HRFAQ />
                <HROfferTimer open={open} setOpen={() => setOpen(!open)} />
            </div>

            <AppModal
                open={open}
                onClose={() => setOpen(false)}
                title="Select the services"
            >
                <ChooseService />
            </AppModal>

        </>
    )
}

export default HR;