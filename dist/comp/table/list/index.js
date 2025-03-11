import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { TableBase } from "../base";
export default function ({ items, className, list }) {
    return (_jsxs(_Fragment, { children: [_jsx(TableBase.Header, { items, className }), list.map((row, key) => (_jsx("div", { className: fnCss.concat(`flex`, "table-top-border table-content hover", className), children: _jsx(TableBase.Row, { row, items }) }, key))), _jsx(TableBase.Closer, { className })] }));
}
