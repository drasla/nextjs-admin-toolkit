import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { fnCss } from "nextjs-tools";
export default function ({ icon, children, href, style, className }) {
    style = style || "normal";
    return (_jsx(Link, { href: href, children: _jsxs("div", { className: fnCss.concat("button", style, className, "flex items-center justify-center"), children: [icon && (_jsx(Image, { className: "mr-1", src: icon, width: 20, height: 20, alt: "icon" })), children] }) }));
}
