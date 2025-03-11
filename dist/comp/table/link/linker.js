"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import { fnCss } from "nextjs-tools";
export default function ({ children, href, className }) {
    const router = useRouter();
    return (_jsx("div", { className: fnCss.concat(`flex`, "table-top-border table-content hover", className), onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            router.push(href);
        }, children: children }));
}
