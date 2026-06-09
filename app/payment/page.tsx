'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import AppModal from "@/components/common/AppModel";
import { ChooseService } from "@/components/payment/ChooseService";
import MakePaymentForm from "@/components/payment/MakePayment";

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
                title="confirm payment - ₹499"
            >
                <MakePaymentForm
                    amount={499}
                    type="call"
                    selectedServices={[
                        {
                            id: "1",
                            identity: "Clarity Call",
                            price: 499
                        }
                    ]}
                    onSuccess={() => setOpen(false)}
                    fromClarity={true}
                />
            </AppModal>
        </>
    );
};

export default Payment;