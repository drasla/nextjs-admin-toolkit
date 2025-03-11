import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ items, row }) {
    return items.map((header, i) => (_jsx("div", { className: fnCss.concat("p-3", "table-content", header.className), children: header.parser(row) }, i)));
}
