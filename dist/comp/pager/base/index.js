"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { Fragment } from "react";
export default function ({ buttons, page, size, total, onClick }) {
    buttons = buttons || 3;
    const last = Math.floor(total / size) + (0 < Math.floor(total / size) && 0 < total % size ? 1 : 0);
    const left = [];
    const right = [];
    for (let i = 1; i <= buttons; i++) {
        if (0 <= page - i) {
            left.push(page - i);
        }
        if (page + i <= last) {
            right.push(page + i);
        }
    }
    const items = [...left, page, ...right].sort((a, b) => a - b);
    const hasPrev = items.findIndex((v) => v === 0) === -1;
    const hasNext = items.findIndex((v) => v === last) === -1;
    const onNavigate = (page) => {
        if (onClick)
            onClick(page);
    };
    return (_jsxs("div", { className: "flex justify-center items-center no-drag", children: [_jsx("div", { className: fnCss.concat("pager hover", page === 0 ? "disabled" : ""), onClick: () => {
                    if (page === 0)
                        return;
                    onNavigate(page - 1);
                }, children: "<" }), hasPrev && (_jsxs(Fragment, { children: [_jsx("div", { className: "pager hover", onClick: () => onNavigate(0), children: "1" }), _jsx("div", { className: "pager", children: "..." })] })), items.map((i, key) => (_jsx("div", { className: fnCss.concat("pager hover", page === i ? "active" : ""), onClick: () => {
                    if (page === i)
                        return;
                    onNavigate(i);
                }, children: i + 1 }, key))), hasNext && (_jsxs(Fragment, { children: [_jsx("div", { className: fnCss.concat("pager"), children: "..." }), _jsx("div", { className: "pager hover", onClick: () => onNavigate(last + 1), children: last + 1 })] })), _jsx("div", { className: fnCss.concat("pager hover", page === last ? "disabled" : ""), onClick: () => {
                    if (page === last)
                        return;
                    onNavigate(page + 1);
                }, children: ">" })] }));
}
