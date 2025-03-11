import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ children, className }) {
    return _jsx("div", { className: fnCss.concat("panel", className), children: children });
}
