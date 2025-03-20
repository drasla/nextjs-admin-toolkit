"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ children, open, onClose }) {
    return (_jsxs(_Fragment, { children: [open && (_jsx("aside", { className: fnCss.sum(`
						lg:hidden fixed top-0 left-0 w-full h-full
						backdrop-blur-xs backdrop-grayscale-40
						bg-(--color-background-modal)
					`), onClick: () => onClose(), children: _jsx("div", { className: fnCss.sum(`
							fixed left-0 top-0 w-4/5 h-full
							overflow-hidden overscroll-y-auto 
							bg-(--color-background-nav)	
							border-right
						`), children: children }) })), _jsx("aside", { className: fnCss.sum(`
					hidden lg:block
					w-(--width-aside) fixed top-0 left-0 h-full 
					overflow-hidden overscroll-y-auto 
					bg-(--color-background-nav) border-right
				`), children: children })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNpZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhc2lkZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFRbkMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFrQjtJQUNsRSxPQUFPLENBQ04sOEJBQ0UsSUFBSSxJQUFJLENBQ1IsZ0JBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUM7Ozs7TUFJcEIsQ0FBQyxFQUNGLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsWUFDeEIsY0FDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Ozs7T0FLcEIsQ0FBQyxZQUNELFFBQVEsR0FDSixHQUNDLENBQ1IsRUFDRCxnQkFDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Ozs7S0FLcEIsQ0FBQyxZQUNELFFBQVEsR0FDRixJQUNOLENBQ0gsQ0FBQztBQUNILENBQUMifQ==