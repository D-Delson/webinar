"use client";

import { usePathname } from "next/navigation";

const pages: Record<
  string,
  {
    title: string;
    subtitle: string;
  }
> = {
  "/admin/payment": {
    title: "Payments",
    subtitle:
      "Manage customer payments and enquiries",
  },

  "/admin/users": {
    title: "Users",
    subtitle:
      "Manage platform users",
  },

  "/admin/settings": {
    title: "Settings",
    subtitle:
      "Manage system settings",
  },
};

export default function AdminHeader() {
  const pathname = usePathname();

  const page =
    pages[pathname] ?? {
      title: "Dashboard",
      subtitle:
        "Overview of your application",
    };

  return (
    <header
      className="
      h-20
      bg-white
      border-b
      border-gray-200
      px-8
      flex
      items-center
      justify-between
    "
    >
      <div>
        <h1
          className="
          text-2xl
          font-bold
        "
        >
          {page.title}
        </h1>

        <p
          className="
          text-sm
          text-gray-500
        "
        >
          {page.subtitle}
        </p>
      </div>

      {/* <div className="flex gap-3">
        <button
          className="
          px-4
          py-2
          rounded-lg
          border
          hover:bg-gray-50
        "
        >
          Export
        </button>

        <button
          className="
          px-4
          py-2
          rounded-lg
          bg-black
          text-white
        "
        >
          Filter
        </button>
      </div> */}
    </header>
  );
}