"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useRouter } from "next/navigation";
import { fnCss } from "nextjs-tools";
export default function ({ children, href, className }) {
    const router = useRouter();
    return (_jsx("div", { className: fnCss.concat(`flex`, "table-top-border table-content hover", className), onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            router.push(href);
        }, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXAvdGFibGUvbGluay9saW5rZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFDYixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQVNuQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQWtCO0lBQ3BFLE1BQU0sTUFBTSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQzNCLE9BQU8sQ0FDTixjQUNDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxzQ0FBc0MsRUFBRSxTQUFTLENBQUMsRUFDbEYsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDZCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsQ0FBQyxZQUNBLFFBQVEsR0FDSixDQUNOLENBQUM7QUFDSCxDQUFDIn0=