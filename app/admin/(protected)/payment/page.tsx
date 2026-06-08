"use client";

import { useQuery } from "@tanstack/react-query";

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

    const {
        data: paymentData,
        isLoading: isPaymentLoading,
        error: paymentError,
    } = useQuery({
        queryKey: ["admin-payments"],

        queryFn: async () => {
            const response = await api.get(
                ADMIN_PAYMENT_LIST
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
        />
    );
};

export default AdminPayment;