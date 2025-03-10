import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import CSS from "./index.module.scss";
export default function ({ children, className }) {
    return _jsx("div", { className: fnCss.concat(CSS["panel"], className), children: children });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFbkMsT0FBTyxHQUFHLE1BQU0scUJBQXFCLENBQUM7QUFPdEMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQVE7SUFDcEQsT0FBTyxjQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLENBQUMsWUFBRyxRQUFRLEdBQU8sQ0FBQztBQUNoRixDQUFDIn0=