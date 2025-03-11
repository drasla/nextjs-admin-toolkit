"use client";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { useEffect, useState } from "react";
export default function ({ label, className, hidden, children, disabled, required, name, defaultValue, type, autoComplete, inputMode, regexp, invalidMessage, readOnly, }) {
    const [value, setValue] = useState(defaultValue || "");
    const isValid = new RegExp(regexp || "").test(`${value || ""}`);
    const errMsg = value && !isValid ? invalidMessage || "" : "";
    useEffect(() => {
        setValue(defaultValue || "");
    }, [defaultValue]);
    return (_jsxs("div", { className: fnCss.concat(className, hidden ? "hidden" : ""), children: [label && (_jsxs("div", { className: "label", children: [label, errMsg && _jsxs("span", { className: "color-warning ml-2", children: ["(", errMsg, ")"] })] })), _jsxs("div", { className: "flex items-center", children: [_jsx("input", { disabled, required, name, type, autoComplete, inputMode, readOnly, className: fnCss.concat("grow", errMsg && "wrong", "input", readOnly ? "readonly cursor-not-allowed" : "tag"), onChange: (e) => setValue(e.target.value), value: value }), children && _jsx("div", { className: "ml-3", children: children })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2lucHV0L2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxFQUFDLEtBQUssRUFBeUIsTUFBTSxjQUFjLENBQUM7QUFDM0QsT0FBYyxFQUFvRSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBc0JwSCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQ3hCLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxFQUNSLElBQUksRUFDSixZQUFZLEVBQ1osSUFBSSxFQUNKLFlBQVksRUFDWixTQUFTLEVBQ1QsTUFBTSxFQUNOLGNBQWMsRUFDZCxRQUFRLEdBQ0Q7SUFDUCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkQsTUFBTSxPQUFPLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLE1BQU0sTUFBTSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRTdELFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxRQUFRLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFFbkIsT0FBTyxDQUNOLGVBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFDN0QsS0FBSyxJQUFJLENBQ1QsZUFBSyxTQUFTLEVBQUMsT0FBTyxhQUNwQixLQUFLLEVBQ0wsTUFBTSxJQUFJLGdCQUFNLFNBQVMsRUFBQyxvQkFBb0Isa0JBQUcsTUFBTSxTQUFTLElBQzVELENBQ04sRUFFRCxlQUFLLFNBQVMsRUFBQyxtQkFBbUIsYUFDakMsZ0JBQ00sUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUN0RSxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FDdEIsTUFBTSxFQUNOLE1BQU0sSUFBSSxPQUFPLEVBQ2pCLE9BQU8sRUFDUCxRQUFRLENBQUMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQ2hELEVBQ0QsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDekMsS0FBSyxFQUFFLEtBQUssR0FDWCxFQUVELFFBQVEsSUFBSSxjQUFLLFNBQVMsRUFBRSxNQUFNLFlBQUcsUUFBUSxHQUFPLElBQ2hELElBQ0QsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9