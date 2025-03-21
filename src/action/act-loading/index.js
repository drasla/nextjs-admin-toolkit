import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ children, pending }) {
    if (!pending)
        return null;
    return (_jsx("div", { className: fnCss.concat("w-full h-full z-100 fixed left-0 top-0", "flex items-center justify-center", "backdrop-blur-xs backdrop-grayscale-40"), children: children || _jsx("div", { className: "text-(--light)", children: "\uB85C\uB529\uC911..." }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFTbkMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQWtCO0lBQzVELElBQUksQ0FBQyxPQUFPO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFMUIsT0FBTyxDQUNOLGNBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQ3RCLHdDQUF3QyxFQUN4QyxrQ0FBa0MsRUFDbEMsd0NBQXdDLENBRXhDLFlBQ0EsUUFBUSxJQUFJLGNBQUssU0FBUyxFQUFDLGdCQUFnQixzQ0FBYSxHQUNwRCxDQUNOLENBQUM7QUFDSCxDQUFDIn0=