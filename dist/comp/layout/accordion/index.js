"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { fnCss } from "nextjs-tools";
import { Fragment } from "react";
export default function ({ items, children }) {
    return (_jsxs(_Fragment, { children: [children, items.map((v, i) => (_jsxs(Fragment, { children: [_jsx(Title, { className: v.className, children: v.title }), _jsx(SubMenus, { items: v.submenu })] }, i)))] }));
}
function SubMenus({ items }) {
    const path = usePathname();
    const router = useRouter();
    return (_jsx(_Fragment, { children: items.map((v, i) => {
            const active = path.startsWith(v.prefix || "!");
            return (_jsx(Fragment, { children: _jsx("div", { className: fnCss.concat("pl-3 pr-3 mb-2 flex items-center h-12", "no-drag"), children: _jsxs("div", { className: fnCss.concat("flex w-full h-full items-center pr-3 pl-3", v.className, "accordion-item", active ? "active" : ""), onClick: () => router.push(v.href || "!"), children: [_jsx(Icon, { active: active, size: 20, value: v.icon }), _jsx("div", { children: v.title })] }) }) }, i));
        }) }));
}
function Icon({ value, active, size }) {
    size = size || 20;
    return (_jsx(Image, { className: fnCss.concat("mr-2", "accordion-icon", active ? "active" : ""), src: value, alt: "logo", width: size, height: size }));
}
function Title({ children, className }) {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "h-4" }), _jsx("h5", { className: fnCss.concat("pl-5 font-bold mb-2", "accordion-title", className, "no-drag"), children: children })] }));
}
