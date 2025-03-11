"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ label, className, children }) {
    className = className || "";
    return (_jsxs("div", { className: fnCss.concat(className), children: [label && _jsx("div", { className: "label", children: label }), _jsx("div", { className: fnCss.concat("flex items-center", "input", "field"), children: children })] }));
}
