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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9hY3Rpb24vZXJyb3JzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQVEsTUFBTSxjQUFjLENBQUM7QUFHakQsTUFBTSxDQUFDLE9BQU8sVUFBVSxTQUFTLENBQUMsRUFDakMsS0FBSyxFQUNMLE9BQU8sRUFDUCxTQUFTLEdBS1Q7SUFDQSxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxhQUFhLENBQUM7SUFDaEUsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVqRCxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN4QixLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEIsQ0FBQztJQUNGLENBQUM7SUFDRCxPQUFPLENBQ04sYUFBRyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLElBQUksRUFBRSxDQUFDLGFBQ2pFLEdBQUcsRUFDSCxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssSUFBSSxDQUN4Qiw4QkFDQyxjQUFNLE9BQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLFNBQ3pCLENBQ0gsSUFDRSxDQUNKLENBQUM7QUFDSCxDQUFDIn0=