"use client";

import {
    usePathname,
    useRouter,
} from "next/navigation";
import React from "react";

type PaginatedResponse = {
    count?: number;
    next?: string | null;
    previous?: string | null;
    results?: Record<string, any>[];
};

type DataTableProps = {
    response: PaginatedResponse;

    columns: Record<string, string>;

    page: number;

    rowLink?: string | null;

    statusConfig?: Record<
        string,
        Record<string, string>
    >;

    renderers?: Record<
        string,
        (
            value: any,
            row: Record<string, any>
        ) => React.ReactNode
    >;
};

export default function AppTable({
    response,
    columns,
    page,
    rowLink = null,
    statusConfig = {},
    renderers = {},
}: DataTableProps) {
    const router = useRouter();

    const pathname = usePathname();

    const rows =
        response?.results ?? [];

    const count =
        response?.count ?? 0;

    const getNestedValue = (
        obj: any,
        path: string
    ) => {
        return path.split("__").reduce(
            (acc, key) => {
                if (Array.isArray(acc)) {
                    return acc.map(
                        (item) => item?.[key]
                    );
                }

                return acc?.[key];
            },
            obj
        );
    };

    const changePage = (
        pageNumber: number
    ) => {
        const params =
            new URLSearchParams(
                window.location.search
            );

        params.set(
            "page",
            String(pageNumber)
        );

        router.push(
            `${pathname}?${params.toString()}`
        );
    };

    const renderCell = (
        key: string,
        value: any,
        row: any
    ) => {
        if (renderers[key]) {
            return renderers[key](
                value,
                row
            );
        }

        if (
            value === null ||
            value === undefined ||
            value === ""
        ) {
            return (
                <span className="text-gray-400">
                    -
                </span>
            );
        }

        const statusStyles =
            statusConfig[key];

        if (statusStyles) {
            return (
                <span
                    className={`
                        inline-flex
                        items-center
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-medium
                        ${statusStyles[
                        String(value)
                        ] ??
                        "bg-gray-100 text-gray-700"
                        }
                    `}
                >
                    {String(value)
                        .replaceAll(
                            "_",
                            " "
                        )
                        .replace(
                            /\b\w/g,
                            (c) =>
                                c.toUpperCase()
                        )}
                </span>
            );
        }

        return (
            <div
                title={String(value)}
                className="
                    max-w-[250px]
                    truncate
                "
            >
                {String(value)}
            </div>
        );
    };

    if (!rows.length) {
        return (
            <div
                className="
                    bg-white
                    rounded-2xl
                    border
                    border-gray-200
                    p-16
                    text-center
                "
            >
                <h3
                    className="
                        text-lg
                        font-semibold
                    "
                >
                    No records found
                </h3>

                <p className="mt-2 text-gray-500">
                    No data available.
                </p>
            </div>
        );
    }

    return (
        <div
            className="
                w-full
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
                shadow-sm
            "
        >
            {/* Toolbar */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-gray-200
                    px-6
                    py-4
                "
            >
                <div>
                    <h3
                        className="
                            font-semibold
                            text-gray-900
                        "
                    >
                        Total Records: {count}
                    </h3>
                </div>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="min-w-max">
                    <thead>
                        <tr
                            className="
                                border-b
                                bg-gray-50
                            "
                        >
                            {Object.entries(
                                columns
                            ).map(
                                ([
                                    key,
                                    label,
                                ]) => (
                                    <th
                                        key={key}
                                        className="
                                            px-6
                                            py-4
                                            text-left
                                            text-xs
                                            font-semibold
                                            uppercase
                                            tracking-wider
                                            text-gray-500
                                        "
                                    >
                                        {label}
                                    </th>
                                )
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map(
                            (
                                row,
                                rowIndex
                            ) => (
                                <tr
                                    key={
                                        row.id ??
                                        rowIndex
                                    }
                                    onClick={() => {
                                        if (
                                            !rowLink
                                        )
                                            return;

                                        router.push(
                                            `${rowLink}/${row.id}`
                                        );
                                    }}
                                    className={`
                                        border-b
                                        border-gray-100
                                        transition-all
                                        ${rowLink
                                            ? "cursor-pointer"
                                            : ""
                                        }
                                        hover:bg-blue-50
                                        ${rowIndex %
                                            2 ===
                                            0
                                            ? "bg-white"
                                            : "bg-gray-50/30"
                                        }
                                    `}
                                >
                                    {Object.keys(
                                        columns
                                    ).map(
                                        (
                                            key
                                        ) => {
                                            const value =
                                                getNestedValue(
                                                    row,
                                                    key
                                                );

                                            return (
                                                <td
                                                    key={
                                                        key
                                                    }
                                                    className="
                                                        px-6
                                                        py-4
                                                        text-sm
                                                        text-gray-700
                                                    "
                                                >
                                                    {renderCell(
                                                        key,
                                                        value,
                                                        row
                                                    )}
                                                </td>
                                            );
                                        }
                                    )}
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    border-t
                    border-gray-200
                    bg-gray-50
                    px-6
                    py-4
                "
            >
                <span
                    className="
                        text-sm
                        text-gray-500
                    "
                >
                    Showing Page {page}
                </span>

                <div className="flex gap-2">
                    <button
                        disabled={
                            !response.previous
                        }
                        onClick={() =>
                            changePage(
                                page - 1
                            )
                        }
                        className="
                            rounded-lg
                            border
                            px-4
                            py-2
                            text-sm
                            disabled:opacity-50
                        "
                    >
                        Previous
                    </button>

                    <button
                        disabled={
                            !response.next
                        }
                        onClick={() =>
                            changePage(
                                page + 1
                            )
                        }
                        className="
                            rounded-lg
                            border
                            px-4
                            py-2
                            text-sm
                            disabled:opacity-50
                        "
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}