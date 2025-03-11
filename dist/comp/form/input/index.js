"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { useEffect, useState } from "react";
export default function ({ label, className, hidden, children, disabled, required, name, defaultValue, type, autoComplete, inputMode, regexp, invalidMessage, }) {
    const [value, setValue] = useState(defaultValue || "");
    const isValid = new RegExp(regexp || "").test(`${value || ""}`);
    const errMsg = value && !isValid ? invalidMessage || "" : "";
    useEffect(() => {
        setValue(defaultValue || "");
    }, [defaultValue]);
    return (_jsxs("div", { className: fnCss.concat(className, hidden ? "hidden" : ""), children: [label && (_jsxs("div", { className: "label", children: [label, errMsg && _jsxs("span", { className: "color-warning ml-2", children: ["(", errMsg, ")"] })] })), _jsxs("div", { className: "flex items-center", children: [_jsx("input", { disabled, required, name, type, autoComplete, inputMode, className: fnCss.concat("grow", errMsg && "wrong", "input", "tag"), onChange: (e) => setValue(e.target.value), value: value }), children && _jsx("div", { className: "ml-3", children: children })] })] }));
}
