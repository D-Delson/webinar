// AppText.tsx (server)
import { CSSProperties, ReactNode, createElement } from "react";

interface AppTextProps {
    type?: string;
    className?: string;
    text?: string | ReactNode;
    style?: CSSProperties;
    textStroke?: boolean;
    children?: ReactNode;
    truncate?: number;
}

export default function AppText({
    type = "p",
    className = "",
    text,
    style,
    textStroke,
    children,
    truncate,
}: AppTextProps) {
    const textStrokeStyle: CSSProperties = textStroke
        ? { WebkitTextStroke: "1px black" }
        : {};

    let truncatedText: string | null = null;

    if (truncate && typeof text === "string") {
        truncatedText =
            text.slice(0, truncate) + (text.length > truncate ? "..." : "");
    }

    return createElement(
        type,
        {
            className,
            style: {
                ...textStrokeStyle,
                ...style,
            },
        },
        truncatedText || text || children
    );
}


// if server component is needed in future
// "use client";

// import AppText from "./AppText";

// export default function AppTextInteractive(props: any) {
//   return <AppText {...props} />;
// }
