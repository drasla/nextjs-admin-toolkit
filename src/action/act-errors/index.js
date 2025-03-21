"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { fnCss, fnEnv } from "nextjs-tools";
export default function Component({ state, printer, className, }) {
    className = className || "";
    printer = printer || {};
    if (!state.error)
        return null;
    const debug = fnEnv.client.string("NODE_ENV") === "development";
    let msg = state.error.message;
    for (const key in printer) {
        if (msg.includes(key)) {
            msg = printer[key];
        }
    }
    return (_jsxs("p", { className: fnCss.concat("text-center text-(--danger)", className), children: [msg, debug && state.error && (_jsxs(_Fragment, { children: [_jsx("br", {}), "(", state.error.message, ")"] }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFRLE1BQU0sY0FBYyxDQUFDO0FBR2pELE1BQU0sQ0FBQyxPQUFPLFVBQVUsU0FBUyxDQUFDLEVBQ2pDLEtBQUssRUFDTCxPQUFPLEVBQ1AsU0FBUyxHQUtUO0lBQ0EsU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLENBQUM7SUFDNUIsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFOUIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssYUFBYSxDQUFDO0lBQ2hFLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzlCLEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDdkIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQixDQUFDO0lBQ0YsQ0FBQztJQUVELE9BQU8sQ0FDTixhQUFHLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLFNBQVMsQ0FBQyxhQUNsRSxHQUFHLEVBQ0gsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FDeEIsOEJBQ0MsY0FBTSxPQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxTQUN6QixDQUNILElBQ0UsQ0FDSixDQUFDO0FBQ0gsQ0FBQyJ9