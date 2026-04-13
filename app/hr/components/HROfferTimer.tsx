"use client";

import { useEffect, useState } from "react";

type HROfferTimerProps = {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const HROfferTimer = ({open, setOpen}: HROfferTimerProps) => {
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
        <section className="hidden md:block fixed bottom-38 left-0 w-full px-6 md:px-28 py-4 font-sans bg-white h-20 shadow-[0px_-2px_4px_0px_#BDBBBB40] z-50">
            <div className="flex items-center justify-between h-full font-urbanist">
                {/* price */}
                <div className="flex justify-center items-center gap-3">
                    <p className="font-bold text-[32px] text-[#11082C]">₹5,000</p>
                    <p className="font-semibold text-[#9B9A9D] text-[24px] line-through">₹8,000</p>
                </div>

                {/* timer */}
                <div className="flex gap-3 items-center">
                    <div className="mr-3 font-semibold text-[24px] text-[#11082C] capitalize">
                        offer expires in :
                    </div>

                    {Object.entries(timeLeft).map(([key, value]) => (
                        <div key={key} className="flex flex-col items-center">
                            <div className="font-extrabold text-[26px] text-[#11082C]">
                                {value}
                            </div>
                            <div className="text-[14px] text-[#9B9A9D] capitalize">
                                {key}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div
                    onClick={() => setOpen(!open)}
                    className="text-[20px] rounded capitalize cursor-pointer text-white bg-gradient-to-r from-[#E84127] via-[#DC2D1D] to-[#D41F17] px-8 py-3 text-center">
                    schedule call at ₹5,000
                </div>
            </div>
        </section>
    );
};

export default HROfferTimer;