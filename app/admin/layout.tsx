"use client";

import { useGuestGuard } from "@/hooks/useGuestGuard";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useGuestGuard();
    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-4xl px-4 py-12">
                {children}
            </div>
        </main>
    );
}
