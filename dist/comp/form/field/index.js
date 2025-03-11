"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ label, className, children }) {
    className = className || "";
    return (_jsxs("div", { className: fnCss.concat(className), children: [label && _jsx("div", { className: "label", children: label }), _jsx("div", { className: fnCss.concat("flex items-center", "input", "field"), children: children })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2ZpZWxkL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQVNuQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQVE7SUFDM0QsU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDNUIsT0FBTyxDQUNOLGVBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQ3JDLEtBQUssSUFBSSxjQUFLLFNBQVMsRUFBRSxPQUFPLFlBQUcsS0FBSyxHQUFPLEVBQ2hELGNBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxZQUFHLFFBQVEsR0FBTyxJQUNoRixDQUNOLENBQUM7QUFDSCxDQUFDIn0=