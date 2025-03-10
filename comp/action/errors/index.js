"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss, fnEnv } from "nextjs-tools";
export default function Component({ state, printer, className, }) {
    const debug = fnEnv.client.string("NODE_ENV") === "development";
    let msg = state.error ? state.error.message : "";
    printer = printer || {};
    for (const key in printer) {
        if (msg.includes(key)) {
            msg = printer[key];
        }
    }
    return (_jsxs("p", { className: fnCss.concat("min-h-12 text-center", className || ""), children: [msg, debug && state.error && (_jsxs(_Fragment, { children: [_jsx("br", {}), "(", state.error.message, ")"] }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFRLE1BQU0sY0FBYyxDQUFDO0FBR2pELE1BQU0sQ0FBQyxPQUFPLFVBQVUsU0FBUyxDQUFDLEVBQ2pDLEtBQUssRUFDTCxPQUFPLEVBQ1AsU0FBUyxHQUtUO0lBQ0EsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssYUFBYSxDQUFDO0lBQ2hFLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFakQsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDeEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUMzQixJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN2QixHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7SUFDRixDQUFDO0lBQ0QsT0FBTyxDQUNOLGFBQUcsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLEVBQUUsU0FBUyxJQUFJLEVBQUUsQ0FBQyxhQUNqRSxHQUFHLEVBQ0gsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FDeEIsOEJBQ0MsY0FBTSxPQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxTQUN6QixDQUNILElBQ0UsQ0FDSixDQUFDO0FBQ0gsQ0FBQyJ9