import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { Fragment } from "react";
export default async function ({ children, side, top }) {
    return (_jsxs(Fragment, { children: [_jsx("div", { className: fnCss.concat("hidden lg:block", "fixed z-1 top-0 left-0 h-screen w-1/5 overflow-hidden overscroll-y-auto", "partition-side-nav"), children: side }), _jsx("div", { className: fnCss.concat("fixed z-1 top-0", "w-full left-0 lg:left-1/5 lg:w-4/5", "partition-top-nav"), children: top }), _jsx("div", { className: fnCss.concat("left-0 min-h-screen", "lg:absolute lg:left-1/5 lg:w-4/5 p-3", "partition-content"), children: children })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvcGFydGl0aW9uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFjLEVBQUMsUUFBUSxFQUFZLE1BQU0sT0FBTyxDQUFDO0FBUWpELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQVE7SUFDMUQsT0FBTyxDQUNOLE1BQUMsUUFBUSxlQUNSLGNBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQ3RCLGlCQUFpQixFQUNqQix5RUFBeUUsRUFDekUsb0JBQW9CLENBQ3BCLFlBQ0EsSUFBSSxHQUNBLEVBQ04sY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxvQ0FBb0MsRUFBRSxtQkFBbUIsQ0FBQyxZQUN4RyxHQUFHLEdBQ0MsRUFDTixjQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUN0QixxQkFBcUIsRUFDckIsc0NBQXNDLEVBQ3RDLG1CQUFtQixDQUNuQixZQUNBLFFBQVEsR0FDSixJQUNJLENBQ1gsQ0FBQztBQUNILENBQUMifQ==