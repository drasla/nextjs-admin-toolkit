import { jsx as _jsx } from "react/jsx-runtime";
import { fnEnv } from "nextjs-tools";
import "../../../scss/index.scss";
export const viewport = {
    width: "device-width",
    initialScale: 1.0,
};
export default async function ({ children }) {
    return (_jsx("html", { lang: await fnEnv.server.string("HTML_LANG"), children: _jsx("body", { className: "font-12 lg:font-16", children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvaHRtbC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxrQkFBa0IsQ0FBQztBQUUxQixNQUFNLENBQUMsTUFBTSxRQUFRLEdBQWE7SUFDakMsS0FBSyxFQUFFLGNBQWM7SUFDckIsWUFBWSxFQUFFLEdBQUc7Q0FDakIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxXQUFXLEVBQUMsUUFBUSxFQUFnQjtJQUN2RCxPQUFPLENBQ04sZUFBTSxJQUFJLEVBQUUsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFDakQsZUFBTSxTQUFTLEVBQUMsb0JBQW9CLFlBQUUsUUFBUSxHQUFRLEdBQ2hELENBQ1AsQ0FBQztBQUNILENBQUMifQ==