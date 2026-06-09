"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import AppTable from "@/components/common/AppTable";
import api from "@/api/utils/appAPI";
import {
    ADMIN_PAYMENT_LIST,
    ADMIN_PAYMENT_TABLE_META,
} from "@/api/endpoints/admin";

const AdminPayment = () => {
    /* =========================
       Payment Data
    ========================= */

    const searchParams = useSearchParams();
    const page = Number(searchParams.get("page")) || 1;

    const {
        data: paymentData,
        isLoading: isPaymentLoading,
        error: paymentError,
    } = useQuery({
        queryKey: ["admin-payments", page],

        queryFn: async () => {
            const response = await api.get(
                `${ADMIN_PAYMENT_LIST}?page=${page}`
            );

            return response.data;
        },
    });

    /* =========================
       Table Meta
    ========================= */

    const {
        data: tableMeta,
        isLoading: isMetaLoading,
        error: metaError,
    } = useQuery({
        queryKey: ["admin-payment-table-meta"],

        queryFn: async () => {
            const response = await api.get(
                ADMIN_PAYMENT_TABLE_META
            );

            return response.data;
        },
    });

    /* =========================
       Loading
    ========================= */

    if (
        isPaymentLoading ||
        isMetaLoading
    ) {
        return (
            <div className="p-4">
                Loading...
            </div>
        );
    }

    /* =========================
       Error
    ========================= */

    if (
        paymentError ||
        metaError
    ) {
        return (
            <div className="p-4 text-red-500">
                Failed to load data
            </div>
        );
    }

    return (
        <AppTable
            response={paymentData.data}
            page={page}
            columns={tableMeta.data}
            rowLink=""
            statusConfig={{
                home_page__status: {
                    on_process:
                        "bg-blue-100 text-blue-700",
                    completed:
                        "bg-green-100 text-green-700",
                    failed:
                        "bg-red-100 text-red-700",
                },
            }}
            renderers={{
                created: (value) => {
                    if (!value) return "-";

                    return new Date(value).toLocaleString(
                        "en-IN",
                        {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                        }
                    );
                },
                appointment_date: (value) => {
                    if (!value) return "-";

                    return new Date(value).toLocaleString(
                        "en-IN",
                        {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                        }
                    );
                },
            }}
        />
    );
};

export default AdminPayment;