"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss, fnEnv } from "nextjs-tools";
export default function Component({ state, printer, className, }) {
    const debug = fnEnv.client.string("NODE_ENV") === "development";
    let msg = state.error ? state.error.message : "";
    printer = printer || {};
    for (const key in printer) {
        if (msg.includes(key)) {
            msg = printer[key];
        }
    }
    return (_jsxs("p", { className: fnCss.concat("min-h-12 text-center", className || ""), children: [msg, debug && state.error && (_jsxs(_Fragment, { children: [_jsx("br", {}), "(", state.error.message, ")"] }))] }));
}
