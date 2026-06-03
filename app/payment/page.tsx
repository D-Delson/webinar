'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import AppModal from "@/components/common/AppModel";
import { ChooseService } from "@/components/payment/ChooseService";

const Payment = () => {
    const [open, setOpen] = useState(true);
    const router = useRouter();

    const handleClose = () => {
        setOpen(false);
        router.back(); // equivalent to browser back button
    };

    return (
        <>
            <AppModal
                open={open}
                onClose={handleClose}
                title="Select the services"
            >
                <ChooseService />
            </AppModal>
        </>
    );
};

export default Payment;