import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ items, className }) {
    return (_jsx("div", { className: fnCss.concat("flex font-bold", "table-top-border table-content", className), children: items.map((v, i) => (_jsx("div", { className: fnCss.concat("p-3", "table-header text-center", v.className), children: v.name }, i))) }));
}
