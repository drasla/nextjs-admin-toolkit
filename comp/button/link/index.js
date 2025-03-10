import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { fnCss } from "nextjs-tools";
import CSS from "../index.module.scss";
export default function ({ icon, children, href, style, className }) {
    style = style || "normal";
    return (_jsx(Link, { href: href, children: _jsxs("div", { className: fnCss.concat(CSS["button"], CSS[style], className, "flex items-center justify-center"), children: [icon && (_jsx(Image, { className: "mr-1", src: icon, width: 20, height: 20, alt: "icon" })), children] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFDN0IsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVuQyxPQUFPLEdBQUcsTUFBTSxzQkFBc0IsQ0FBQztBQVV2QyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBUTtJQUN2RSxLQUFLLEdBQUcsS0FBSyxJQUFJLFFBQVEsQ0FBQztJQUMxQixPQUFPLENBQ04sS0FBQyxJQUFJLElBQUMsSUFBSSxFQUFFLElBQUksWUFDZixlQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGtDQUFrQyxDQUFDLGFBQ3BHLElBQUksSUFBSSxDQUNSLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBRSxNQUFNLEVBQ2pCLEdBQUcsRUFBRSxJQUFJLEVBQ1QsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxFQUNWLEdBQUcsRUFBRSxNQUFNLEdBQ1YsQ0FDRixFQUNBLFFBQVEsSUFDSixHQUNBLENBQ1AsQ0FBQztBQUNILENBQUMifQ==