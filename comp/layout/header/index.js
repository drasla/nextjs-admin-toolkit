"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fnCss } from "nextjs-tools";
import CSS from "../partition/index.module.scss";
export default function ({ children, href, icon }) {
    const router = useRouter();
    return (_jsxs("div", { className: fnCss.concat(CSS["nav-height"], "flex items-center justify-center font-bold no-drag"), onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (href)
                router.push(href);
        }, children: [icon && (_jsx(Image, { className: "mr-3", width: 40, height: 40, src: icon, alt: "logo" })), _jsx("h2", { className: "cursor-pointer", children: children })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUVuQyxPQUFPLEdBQUcsTUFBTSxnQ0FBZ0MsQ0FBQztBQVFqRCxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQVE7SUFDckQsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUM7SUFDM0IsT0FBTyxDQUNOLGVBQ0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLG9EQUFvRCxDQUFDLEVBQ2hHLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2QsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixJQUFJLElBQUk7Z0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLGFBQ0EsSUFBSSxJQUFJLENBQ1IsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFDLE1BQU0sRUFDaEIsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsRUFBRSxFQUNWLEdBQUcsRUFBRSxJQUFJLEVBQ1QsR0FBRyxFQUFFLE1BQU0sR0FDVixDQUNGLEVBQ0QsYUFBSSxTQUFTLEVBQUMsZ0JBQWdCLFlBQUUsUUFBUSxHQUFNLElBQ3pDLENBQ04sQ0FBQztBQUNILENBQUMifQ==