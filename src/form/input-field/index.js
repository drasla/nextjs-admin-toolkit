import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ label, className, children }) {
    return (_jsxs("div", { className: fnCss.concat(className), children: [label && _jsx("div", { className: "label", children: label }), _jsx("div", { className: "input field flex items-center", children: _jsx("div", { className: "grow", children: children }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFTbkMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFRO0lBQzNELE9BQU8sQ0FDTixlQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUNyQyxLQUFLLElBQUksY0FBSyxTQUFTLEVBQUMsT0FBTyxZQUFFLEtBQUssR0FBTyxFQUU5QyxjQUFLLFNBQVMsRUFBQywrQkFBK0IsWUFDN0MsY0FBSyxTQUFTLEVBQUMsTUFBTSxZQUFFLFFBQVEsR0FBTyxHQUNqQyxJQUNELENBQ04sQ0FBQztBQUNILENBQUMifQ==