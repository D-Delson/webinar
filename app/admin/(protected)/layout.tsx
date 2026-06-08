"use client";

import { useAuthGuard } from "@/hooks/useAuthGuard";


import AdminHeader from "@/components/admin/Header";
import AdminSidebar from "@/components/admin/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuthGuard();
  return (
    <div className="h-screen flex">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader />

        <main
          className="
          flex-1
          p-8
          bg-gray-50
          overflow-auto
        "
        >
          {children}
        </main>
      </div>
    </div>
  );
}