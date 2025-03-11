import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { Fragment } from "react";
export default async function ({ children, side, top }) {
    return (_jsxs(Fragment, { children: [_jsx("div", { className: fnCss.concat("hidden lg:block", "fixed z-1 top-0 left-0 h-screen w-1/5 overflow-hidden overscroll-y-auto", "partition-side-nav"), children: side }), _jsx("div", { className: fnCss.concat("fixed z-1 top-0", "w-full left-0 lg:left-1/5 lg:w-4/5", "partition-top-nav"), children: top }), _jsx("div", { className: fnCss.concat("absolute", "left-0 w-full min-h-screen lg:left-1/5 lg:w-4/5 p-3", "partition-content"), children: children })] }));
}
