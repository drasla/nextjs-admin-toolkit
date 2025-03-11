import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TableBase } from "../../table/base";
import Linker from "./linker";
export default function ({ items, className, list, linker }) {
    return (_jsxs(_Fragment, { children: [_jsx(TableBase.Header, { items, className }), list.map((row, key) => (_jsx(Linker, { href: linker(row), className: className, children: _jsx(TableBase.Row, { row, items }) }, key))), _jsx(TableBase.Closer, { className: className })] }));
}
