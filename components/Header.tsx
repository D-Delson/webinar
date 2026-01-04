"use client";

import { useState } from "react";

import AppModal from "./common/AppModel";
import Container from "./Container";
import MakePaymentForm from "./payment/MakePayment";
import { ChooseService } from "./payment/ChooseService";

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md border-b border-gray-300 sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-center py-2 md:py-[20px] relative">
          <div className="flex-1"></div>
          <div className="hidden md:flex items-center space-x-16">
            <a
              href="#about"
              className="text-[#475569] hover:text-gray-900 transition-colors"
            >
              Who We Are
            </a>
            <a
              href="#services"
              className="text-[#475569] hover:text-gray-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#stories"
              className="text-[#475569] hover:text-gray-900 transition-colors"
            >
              Client Stories
            </a>
          </div>
          <div className="flex-1 flex justify-end">
            <button className="bg-[#0E172A] text-white px-4 md:px-6 py-2 rounded-full hover:bg-black/80 cursor-pointer transition-colors font-medium text-sm md:text-base"
              onClick={() => { setOpen(true) }}
            >
              Book Consultation
            </button>

            <AppModal
              open={open}
              onClose={() => setOpen(false)}
              title="Select the services"
            >
              <ChooseService />
            </AppModal>
          </div>
        </nav>
      </Container>
    </header>
  );
}
