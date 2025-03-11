"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fnCss } from "nextjs-tools";
export default function ({ children, href, icon }) {
    const router = useRouter();
    return (_jsxs("div", { className: fnCss.concat("partition-nav-height", "flex items-center justify-center font-bold no-drag"), onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (href)
                router.push(href);
        }, children: [icon && (_jsx(Image, { className: "mr-3", width: 40, height: 40, src: icon, alt: "logo" })), _jsx("h2", { className: "cursor-pointer", children: children })] }));
}
