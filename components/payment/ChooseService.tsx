"use client";

import axios from "axios";
import { useState, useEffect, useRef } from "react";

import AppModal from "../common/AppModel";
import MakePaymentForm from "./MakePayment";
import MultiSelect from "../common/MultiSelect";
import { getHostAPIUrl } from "@/utils/getHostUrl";
import { SERVICE_LIST_API } from "@/api/endpoints/payment";

/* -------------------- Types -------------------- */
export type Service = {
    id: string;
    identity: string;
    price: number;
};

/* -------------------- Service Selector -------------------- */
function ServiceSelector({
    onPayClick,
}: {
    onPayClick: (total: number, services: Service[]) => void;
}) {
    const [services, setServices] = useState<Service[]>([]);
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const fetchRef = useRef(false);

    useEffect(() => {
        if (fetchRef.current) return;
        fetchRef.current = true;

        const fetchServices = async () => {
            try {
                const response = await axios.get(
                    getHostAPIUrl() + SERVICE_LIST_API
                );
                setServices(response.data?.data?.results || []);
            } catch (err) {
                console.error("Failed to fetch services:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    const totalPrice = selectedServices.reduce(
        (sum, s) => sum + s.price,
        0
    );

    if (loading) {
        return <p className="text-center p-4">Loading services...</p>;
    }

    return (
        <div className="max-w-lg mx-auto p-4 space-y-6">
            <MultiSelect
                options={services}
                selected={selectedServices}
                onChange={setSelectedServices}
            />

            <div className="flex justify-between items-center pt-4 border-t">
                <p className="text-lg font-semibold">
                    Total: ₹{totalPrice}
                </p>

                <button
                    disabled={totalPrice === 0}
                    onClick={() =>
                        onPayClick(totalPrice, selectedServices)
                    }
                    className={`
                        px-6 py-2 rounded-lg text-white font-semibold transition
                        ${totalPrice === 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        }
                    `}
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
}

/* -------------------- Wrapper Component -------------------- */
export function ChooseService() {
    const [open, setOpen] = useState(false);
    const [amountToPay, setAmountToPay] = useState(0);
    const [selectedServices, setSelectedServices] = useState<Service[]>([]);

    const handlePayClick = (total: number, services: Service[]) => {
        setAmountToPay(total);
        setSelectedServices(services);
        setOpen(true);
    };

    return (
        <>
            <ServiceSelector onPayClick={handlePayClick} />

            <AppModal
                open={open}
                onClose={() => setOpen(false)}
                title={`Confirm Payment — ₹${amountToPay}`}
                zIndex={52}
            >
                {/* Optional summary */}
                <div className="mb-4">
                    <p className="text-sm font-medium text-[#333] mb-2">
                        Selected Services
                    </p>
                    <ul className="text-sm text-[#333] space-y-1">
                        {selectedServices.map(service => (
                            <li key={service.id}>
                                • {service.identity} — ₹{service.price}
                            </li>
                        ))}
                    </ul>
                </div>

                <MakePaymentForm
                    amount={amountToPay}
                    type="call"
                    selectedServices={selectedServices}
                    onSuccess={() => setOpen(false)}
                />
            </AppModal>
        </>
    );
}

export default ServiceSelector;
