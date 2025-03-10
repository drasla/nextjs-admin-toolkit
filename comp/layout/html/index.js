import { jsx as _jsx } from "react/jsx-runtime";
import { fnEnv } from "nextjs-tools";
import "../../index.scss";
export default async function ({ children }) {
    return (_jsx("html", { lang: await fnEnv.server.string("HTML_LANG"), children: _jsx("body", { className: "font-12 lg:font-16", children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxrQkFBa0IsQ0FBQztBQUUxQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxFQUFDLFFBQVEsRUFBZ0I7SUFDdkQsT0FBTyxDQUNOLGVBQU0sSUFBSSxFQUFFLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQ2pELGVBQU0sU0FBUyxFQUFDLG9CQUFvQixZQUFFLFFBQVEsR0FBUSxHQUNoRCxDQUNQLENBQUM7QUFDSCxDQUFDIn0=