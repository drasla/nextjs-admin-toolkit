"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TableBase } from "../../table/base";
import { fnCss } from "nextjs-tools";
export default function ({ items, className, list, onClick }) {
    return (_jsxs(_Fragment, { children: [_jsx(TableBase.Header, { items, className }), list.map((row, key) => (_jsx("div", { className: fnCss.concat(`flex`, "table-top-border table-content hover", className), onClick: onClick, children: _jsx(TableBase.Row, { row, items }) }, key))), _jsx(TableBase.Closer, { className })] }));
}
