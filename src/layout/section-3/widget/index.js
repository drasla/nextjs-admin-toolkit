"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Accordion from "./accordion";
import Aside from "./aside";
import Image from "next/image";
import { Flat } from "@root";
import { fnCss } from "nextjs-tools";
export default function ({ header, asideMenus, top }) {
    const [open, setOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsxs("nav", { className: fnCss.sum(`
					flex items-center top-0
					fixed lg:left-(--width-aside) lg:w-(--width-main) w-full left-0 h-(--height-nav) 
					bg-(--color-background-nav) border-bottom
				`), children: [_jsx("button", { className: fnCss.sum(`ml-2 block lg:hidden p-2 rounded-sm border-all`), onClick: () => setOpen(!open), children: _jsx(Image, { className: "filter-(--light-filter)", src: Flat.MenuBurger, width: 25, height: 25, alt: "menu" }) }), _jsx("div", { className: "grow" }), _jsx("div", { className: "text-(--light)", children: top })] }), _jsx(Aside, { open: open, onClose: () => setOpen(false), children: _jsx(Accordion, { header, asideMenus }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxTQUFvQyxNQUFNLGFBQWEsQ0FBQztBQUMvRCxPQUFPLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDNUIsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDM0IsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQU1uQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQWtCO0lBQ2xFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sQ0FDTiw4QkFDQyxlQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDOzs7O0tBSXBCLENBQUMsYUFDRixpQkFDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxFQUN0RSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQzdCLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQyx5QkFBeUIsRUFDbkMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQ3BCLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixHQUFHLEVBQUMsTUFBTSxHQUNULEdBQ00sRUFDVCxjQUFLLFNBQVMsRUFBQyxNQUFNLEdBQUcsRUFDeEIsY0FBSyxTQUFTLEVBQUMsZ0JBQWdCLFlBQUUsR0FBRyxHQUFPLElBQ3RDLEVBQ04sS0FBQyxLQUFLLElBQ0wsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUM3QixLQUFDLFNBQVMsSUFBTSxNQUFNLEVBQUUsVUFBVSxHQUFLLEdBQ2hDLElBQ04sQ0FDSCxDQUFDO0FBQ0gsQ0FBQyJ9