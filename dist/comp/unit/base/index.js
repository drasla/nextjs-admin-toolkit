"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
export default function ({ icon, className, children, align, copy, ellipsis, length }) {
    if (!children)
        return null;
    align = align || "justify-center";
    copy = copy || false;
    ellipsis = ellipsis || false;
    length = length || 15;
    let value = children;
    if (ellipsis)
        value = length < value.length ? `${value.slice(0, length)}...` : value;
    const onCopy = (e) => {
        if (!copy)
            return;
        e.stopPropagation();
        window.navigator.clipboard.writeText(children).catch();
    };
    return (_jsxs("div", { className: fnCss.concat("no-drag flex items-center", "unit-value", align, className), children: [icon && (_jsx(Image, { className: fnCss.concat("mr-1 pt-1/2", "unit-icon"), width: 18, height: 18, src: icon, alt: "id", priority: true })), _jsx("div", { className: fnCss.concat(copy && "unit-copy"), onClick: onCopy, children: value })] }));
}
