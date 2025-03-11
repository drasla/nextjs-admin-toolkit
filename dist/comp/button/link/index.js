import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { fnCss } from "nextjs-tools";
export default function ({ icon, children, href, style, className }) {
    style = style || "normal";
    return (_jsx(Link, { href: href, children: _jsxs("div", { className: fnCss.concat("button", style, className, "flex items-center justify-center"), children: [icon && (_jsx(Image, { className: "mr-1", src: icon, width: 20, height: 20, alt: "icon" })), children] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9idXR0b24vbGluay9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFDN0IsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQVduQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBUTtJQUN2RSxLQUFLLEdBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQztJQUMxQixPQUFPLENBQ04sS0FBQyxJQUFJLElBQUMsSUFBSSxFQUFFLElBQUksWUFDZixlQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLGtDQUFrQyxDQUFDLGFBQzFGLElBQUksSUFBSSxDQUNSLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBRSxNQUFNLEVBQ2pCLEdBQUcsRUFBRSxJQUFJLEVBQ1QsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxFQUNWLEdBQUcsRUFBRSxNQUFNLEdBQ1YsQ0FDRixFQUNBLFFBQVEsSUFDSixHQUNBLENBQ1AsQ0FBQztBQUNILENBQUMifQ==