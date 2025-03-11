"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
export default function ({ icon, className, children, align, copy, ellipsis, length }) {
    if (!children)
        return null;
    align = align || "justify-center";
    copy = copy || false;
    ellipsis = ellipsis || false;
    length = length || 15;
    let value = children;
    if (ellipsis)
        value = length < value.length ? `${value.slice(0, length)}...` : value;
    const onCopy = (e) => {
        if (!copy)
            return;
        e.stopPropagation();
        window.navigator.clipboard.writeText(children).catch();
    };
    return (_jsxs("div", { className: fnCss.concat("no-drag flex items-center", "unit-value", align, className), children: [icon && (_jsx(Image, { className: fnCss.concat("mr-1 pt-1/2", "unit-icon"), width: 18, height: 18, src: icon, alt: "id", priority: true })), _jsx("div", { className: fnCss.concat(copy && "unit-copy"), onClick: onCopy, children: value })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC91bml0L2Jhc2UvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7QUFFYixPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQWNuQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFpQjtJQUNsRyxJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzNCLEtBQUssR0FBRyxLQUFLLElBQUksZ0JBQWdCLENBQUM7SUFDbEMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLENBQUM7SUFDckIsUUFBUSxHQUFHLFFBQVEsSUFBSSxLQUFLLENBQUM7SUFDN0IsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFFdEIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQ3JCLElBQUksUUFBUTtRQUFFLEtBQUssR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDckYsTUFBTSxNQUFNLEdBQXNDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDdkQsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEQsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUNOLGVBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsMkJBQTJCLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsYUFDdkYsSUFBSSxJQUFJLENBQ1IsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxFQUNuRCxLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsR0FBRyxFQUFFLElBQUksRUFDVCxHQUFHLEVBQUUsSUFBSSxFQUNULFFBQVEsRUFBRSxJQUFJLEdBQ2IsQ0FDRixFQUNELGNBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxFQUM1QyxPQUFPLEVBQUUsTUFBTSxZQUNkLEtBQUssR0FDRCxJQUNELENBQ04sQ0FBQztBQUNILENBQUMifQ==