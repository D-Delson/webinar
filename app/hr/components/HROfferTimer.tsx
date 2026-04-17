"use client";

import { useEffect, useState } from "react";

type HROfferTimerProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const HROfferTimer = ({ open, setOpen }: HROfferTimerProps) => {
    const targetDate = new Date("2026-04-20T23:59:59"); // 🔥 hardcoded

    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        mins: "00",
        secs: "00",
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = targetDate.getTime() - now.getTime();

            if (diff <= 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const mins = Math.floor((diff / (1000 * 60)) % 60);
            const secs = Math.floor((diff / 1000) % 60);

            const format = (n: number) => String(n).padStart(2, "0");

            setTimeLeft({
                days: format(days),
                hours: format(hours),
                mins: format(mins),
                secs: format(secs),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="fixed bottom-0 left-0 w-full px-4 md:px-28 py-3 md:py-4 font-sans bg-white shadow-[0px_-2px_4px_0px_#BDBBBB40] z-50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 font-urbanist">

                {/* PRICE */}
                <div className="flex justify-center items-center gap-2 md:gap-3">
                    <p className="font-bold text-[24px] md:text-[32px] text-[#11082C]">₹5,000</p>
                    <p className="font-semibold text-[#9B9A9D] text-[16px] md:text-[24px] line-through">₹8,000</p>
                </div>

                {/* TIMER */}
                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 text-center">
                    <div className="w-full md:w-auto font-semibold text-[16px] md:text-[24px] text-[#11082C] capitalize">
                        offer expires in:
                    </div>

                    {Object.entries(timeLeft).map(([key, value]) => (
                        <div key={key} className="flex flex-col items-center min-w-[40px]">
                            <div className="font-extrabold text-[20px] md:text-[26px] text-[#11082C]">
                                {value}
                            </div>
                            <div className="text-[12px] md:text-[14px] text-[#9B9A9D] capitalize">
                                {key}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div
                    onClick={() => setOpen(!open)}
                    className="w-full md:w-auto text-[16px] md:text-[20px] rounded capitalize cursor-pointer text-white bg-gradient-to-r from-[#E84127] via-[#DC2D1D] to-[#D41F17] px-6 md:px-8 py-2 md:py-3 text-center"
                >
                    schedule call at ₹5,000
                </div>

            </div>
        </section>
    );
};

export default HROfferTimer;