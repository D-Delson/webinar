"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    label: "Payments",
    href: "/admin/payment",
    icon: "💳",
  },
  // {
  //   label: "Users",
  //   href: "/admin/users",
  //   icon: "👥",
  // },
  // {
  //   label: "Meetings",
  //   href: "/admin/meetings",
  //   icon: "📅",
  // },
  // {
  //   label: "Settings",
  //   href: "/admin/settings",
  //   icon: "⚙️",
  // },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      w-64
      bg-white
      border-r
      border-gray-200
      flex
      flex-col
    "
    >
      <div className="p-6">
        <h2 className="text-xl font-bold">
          Turais
        </h2>

        <p className="text-sm text-gray-500">
          Admin Dashboard
        </p>
      </div>

      <div className="px-3">
        <p
          className="
          px-3
          text-xs
          uppercase
          text-gray-400
          mb-2
        "
        >
          Management
        </p>

        {menuItems.map((item) => {
          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-lg
                mb-1
                transition

                ${
                  active
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "hover:bg-gray-100"
                }
              `}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto p-4 border-t">
        <div className="flex items-center gap-3">
          <div
            className="
            h-10
            w-10
            rounded-full
            bg-gray-200
          "
          />

          {/* <div>
            <p className="font-medium">
              Admin
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div> */}
        </div>
      </div>
    </aside>
  );
}