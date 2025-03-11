"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fnCss } from "nextjs-tools";
export default function ({ children, href, icon }) {
    const router = useRouter();
    return (_jsxs("div", { className: fnCss.concat("partition-nav-height", "flex items-center font-bold no-drag pl-3 pr-3"), onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (href)
                router.push(href);
        }, children: [icon && (_jsx(Image, { className: "mr-3", width: 40, height: 40, src: icon, alt: "logo" })), _jsx("h2", { className: "cursor-pointer", children: children })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9sYXlvdXQvaGVhZGVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxLQUFLLE1BQU0sWUFBWSxDQUFDO0FBQy9CLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBU25DLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBUTtJQUNyRCxNQUFNLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQztJQUMzQixPQUFPLENBQ04sZUFDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSwrQ0FBK0MsQ0FBQyxFQUNoRyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNkLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsSUFBSSxJQUFJO2dCQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxhQUNBLElBQUksSUFBSSxDQUNSLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBQyxNQUFNLEVBQ2hCLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixHQUFHLEVBQUUsSUFBSSxFQUNULEdBQUcsRUFBRSxNQUFNLEdBQ1YsQ0FDRixFQUNELGFBQUksU0FBUyxFQUFDLGdCQUFnQixZQUFFLFFBQVEsR0FBTSxJQUN6QyxDQUNOLENBQUM7QUFDSCxDQUFDIn0=