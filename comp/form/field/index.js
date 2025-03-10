"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import CSS from "../index.module.scss";
export default function ({ label, className, children }) {
    className = className || "";
    return (_jsxs("div", { className: fnCss.concat(className), children: [label && _jsx("div", { className: CSS["label"], children: label }), _jsx("div", { className: fnCss.concat("flex items-center", CSS["input"], CSS["field"]), children: children })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFbkMsT0FBTyxHQUFHLE1BQU0sc0JBQXNCLENBQUM7QUFRdkMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFRO0lBQzNELFNBQVMsR0FBRyxTQUFTLElBQUksRUFBRSxDQUFDO0lBQzVCLE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUNyQyxLQUFLLElBQUksY0FBSyxTQUFTLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFHLEtBQUssR0FBTyxFQUNyRCxjQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBRyxRQUFRLEdBQU8sSUFDMUYsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9