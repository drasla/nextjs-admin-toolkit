import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
export default function ({ icon, children, className, type, style, disabled, onClick }) {
    style = style || "normal";
    type = type || "button";
    return (_jsxs("button", { onClick, type, disabled, className: fnCss.concat("button", style, className), children: [icon && (_jsx(Image, { className: "mb-3", src: icon, width: 16, height: 16, alt: "icon" })), children] }));
}
