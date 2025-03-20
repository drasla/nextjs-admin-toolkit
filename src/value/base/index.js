"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
export default function ({ iconSrc, className, children, align, copy, ellipsis, length }) {
    if (!children)
        return null;
    align = align || "justify-center";
    copy = copy || false;
    ellipsis = ellipsis || false;
    length = length || 15;
    let value = children;
    if (typeof value === "string" && ellipsis) {
        value = length < value.length ? `${value.slice(0, length)}...` : value;
    }
    const onCopy = (e) => {
        if (!copy)
            return;
        e.stopPropagation();
        switch (typeof children) {
            case "string":
                window.navigator.clipboard.writeText(children).catch();
                break;
            case "number":
            case "bigint":
                window.navigator.clipboard.writeText(`${children}`).catch();
                break;
        }
    };
    return (_jsxs("div", { className: fnCss.concat("inline-flex items-center mr-3", "value", align, className), children: [iconSrc && (_jsx(Image, { className: fnCss.concat("mr-2 pb-[2px]", "primary"), width: 16, height: 16, src: iconSrc, alt: "icon", priority: true })), _jsx("div", { className: fnCss.concat(copy && "value-copy"), onClick: onCopy, children: value })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBY25DLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQVE7SUFDNUYsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixLQUFLLEdBQUcsS0FBSyxJQUFJLGdCQUFnQixDQUFDO0lBQ2xDLElBQUksR0FBRyxJQUFJLElBQUksS0FBSyxDQUFDO0lBQ3JCLFFBQVEsR0FBRyxRQUFRLElBQUksS0FBSyxDQUFDO0lBQzdCLE1BQU0sR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUNyQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUMzQyxLQUFLLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxNQUFNLE1BQU0sR0FBc0MsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUN2RCxJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU87UUFDbEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLFFBQVEsT0FBTyxRQUFRLEVBQUUsQ0FBQztZQUN6QixLQUFLLFFBQVE7Z0JBQ1osTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN2RCxNQUFNO1lBQ1AsS0FBSyxRQUFRLENBQUM7WUFDZCxLQUFLLFFBQVE7Z0JBQ1osTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDNUQsTUFBTTtRQUNSLENBQUM7SUFDRixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sZUFBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQywrQkFBK0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxhQUN0RixPQUFPLElBQUksQ0FDWCxLQUFDLEtBQUssSUFDTCxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLEVBQ25ELEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixHQUFHLEVBQUUsT0FBTyxFQUNaLEdBQUcsRUFBQyxNQUFNLEVBQ1YsUUFBUSxFQUFFLElBQUksR0FDYixDQUNGLEVBQ0QsY0FDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksWUFBWSxDQUFDLEVBQzdDLE9BQU8sRUFBRSxNQUFNLFlBQ2QsS0FBSyxHQUNELElBQ0QsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9