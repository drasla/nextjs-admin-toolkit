import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Widget from "./widget";
import { fnCss } from "nextjs-tools";
export default function ({ children, header, asideMenus, top }) {
    return (_jsxs(_Fragment, { children: [_jsx(Widget, { header, asideMenus, top }), _jsx("main", { className: fnCss.sum(`
				lg:pl-(--width-aside) pt-(--height-nav)
			`), children: _jsx("div", { className: "p-2 lg:p-3", children: children }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sTUFBOEIsTUFBTSxVQUFVLENBQUM7QUFDdEQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQU1uQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFrQjtJQUM1RSxPQUFPLENBQ04sOEJBQ0MsS0FBQyxNQUFNLElBQU0sTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLEdBQUssRUFDekMsZUFDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7SUFFckIsQ0FBQyxZQUNELGNBQUssU0FBUyxFQUFDLFlBQVksWUFBRSxRQUFRLEdBQU8sR0FDdEMsSUFDTCxDQUNILENBQUM7QUFDSCxDQUFDIn0=