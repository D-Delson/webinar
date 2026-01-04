"use client";

import { useState } from "react";
import AppModal from "./common/AppModel";
import { ChooseService } from "./payment/ChooseService";
import Section from "./Section";

export default function CTA() {
  const [open, setOpen] = useState(false);
  return (
    <Section className="bg-gray-50">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Ready To Improve Your Business?
        </h2>
        <p className="text-lg md:text-xl text-gray-500 italic mb-6">
          (And Why We&apos;re Different)
        </p>
        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Pick your starting point. No pressure. No sales pitch. Just an honest
          conversation about what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md"
            onClick={() => setOpen(true)}
          >
            Start Your Transformation
          </button>

          <button
            className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(true)}
          >
            Book 15-min Call at ₹499
          </button>



          <AppModal
            open={open}
            onClose={() => setOpen(false)}
            title="Select the services"
          >
            <ChooseService />
          </AppModal>
        </div>
        <div className="flex flex-col sm:flex-row items-center border rounded-full w-fit py-2 px-4 justify-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>+91 98765 43210</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Mon-Sat, 9 AM - 6 PM</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
