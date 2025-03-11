import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ className }) {
    return _jsx("div", { className: fnCss.concat("table-top-border", className) });
}
