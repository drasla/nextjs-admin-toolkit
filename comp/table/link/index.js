import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Base from "../base";
import Linker from "./linker";
export default function ({ items, className, list, linker }) {
    return (_jsxs(_Fragment, { children: [_jsx(Base.Header, { items, className }), list.map((row, key) => (_jsx(Linker, { href: linker(row), children: _jsx(Base.Row, { row, items, className }) }, key)))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQztBQUUzQixPQUFPLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFTOUIsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBcUI7SUFDL0UsT0FBTyxDQUNOLDhCQUNDLEtBQUMsSUFBSSxDQUFDLE1BQU0sSUFBTSxLQUFLLEVBQUUsU0FBUyxHQUFLLEVBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUN2QixLQUFDLE1BQU0sSUFFTixJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUNoQixLQUFDLElBQUksQ0FBQyxHQUFHLElBQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEdBQUssSUFGckMsR0FBRyxDQUdBLENBQ1QsQ0FBQyxJQUNBLENBQ0gsQ0FBQztBQUNILENBQUMifQ==