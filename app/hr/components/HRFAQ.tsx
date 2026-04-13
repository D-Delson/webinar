"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const HRFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Is this training or consultancy?",
            answer: "This is a 30-day hands-on team setup service for your real business.",
        },
        {
            question: "Is this online or in-person?",
            answer: "Implementation typically takes around 30 days depending on your business needs.",
        },
        {
            question: "Who is this service for?",
            answer: "Yes, we integrate directly with your current team and processes.",
        },
        {
            question: "Will my workers understand this?",
            answer: "Yes, we integrate directly with your current team and processes.",
        },
        {
            question: "What if my team resists changes?",
            answer: "Yes, we integrate directly with your current team and processes.",
        },
    ];

    return (
        <>
            <section className="px-6 md:px-28 py-12 font-sans bg-[#F9FAFC]">
                <div className="text-center">
                    <h2 className="font-bold text-[36px] leading-[51px] uppercase">
                        frequently asked <span className="italic text-[#E53D25]">{" "}questions</span>
                    </h2>

                    <p className="font-normal text-[20px] leading-8 text-[#647388] mt-8 md:px-80">
                        Find answers to common questions about our hands-on implementation process.
                    </p>
                </div>

                <div className="w-full mt-6 mb-4 space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-[#E2E8F0] rounded-2xl px-2.5 py-6"
                        >
                            <div
                                className="w-full flex justify-between md:mb-2 cursor-pointer"
                                onClick={() => toggleAccordion(index)}
                            >
                                <div className="font-medium text-[16px] md:text-[20px] leading-[26px] capitalize">
                                    {item.question}
                                </div>

                                <div
                                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                >
                                    <ChevronDown />
                                </div>
                            </div>

                            {openIndex === index && (
                                <p className="text-[14px] md:text-[18px] leading-6 capitalize px-1 py-1.5 text-[#4C5C72]">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HRFAQ;