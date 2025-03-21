import { jsx as _jsx } from "react/jsx-runtime";
import { Asset } from "@root";
export const viewport = {
    width: "device-width",
    initialScale: 1.0,
};
export default function ({ children, lang }) {
    return (_jsx(Asset.ApplyStyle, { children: _jsx("html", { lang: lang || "en", children: _jsx("body", { className: "text-12 lg:text-16 bg-(--color-background-body)", children: children }) }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFPNUIsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFhO0lBQ2pDLEtBQUssRUFBRSxjQUFjO0lBQ3JCLFlBQVksRUFBRSxHQUFHO0NBQ2pCLENBQUM7QUFFRixNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBa0I7SUFDekQsT0FBTyxDQUNOLEtBQUMsS0FBSyxDQUFDLFVBQVUsY0FDaEIsZUFBTSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksWUFDdkIsZUFBTSxTQUFTLEVBQUMsaURBQWlELFlBQUUsUUFBUSxHQUFRLEdBQzdFLEdBQ1csQ0FDbkIsQ0FBQztBQUNILENBQUMifQ==