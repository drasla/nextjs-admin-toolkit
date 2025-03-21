"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { useCallback, useEffect } from "react";
Component.__isStatic = true;
export default function Component({ open, children, onClose, disableEscapeKey, disableBackdrop }) {
    const onEscPress = useCallback((e) => {
        if (e.key == "Escape") {
            onClose();
        }
    }, [onClose]);
    const onClick = () => {
        if (disableBackdrop)
            return;
        onClose();
    };
    useEffect(() => {
        if (disableEscapeKey) {
            return;
        }
        if (open) {
            window.addEventListener("keydown", onEscPress);
        }
        else {
            window.removeEventListener("keydown", onEscPress);
        }
        return () => {
            window.removeEventListener("keydown", onEscPress);
        };
    }, [onEscPress, open, disableEscapeKey]);
    if (!children)
        return null;
    if (!open)
        return null;
    return (_jsx("div", { className: fnCss.concat("w-full h-full z-100 fixed left-0 top-0", "flex items-center justify-center", "backdrop-blur-xs backdrop-grayscale-40", "bg-(--color-background-modal)"), onClick: onClick, children: _jsx("div", { className: fnCss.concat("pl-0.5 pr-0.5 z-110 pointer-events-auto", "lg:pl-0 lg:pr-0"), onClick: (e) => {
                e.stopPropagation();
            }, children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBYyxFQUErQixXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBVWxGLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBRTVCLE1BQU0sQ0FBQyxPQUFPLFVBQVUsU0FBUyxDQUFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFrQjtJQUM5RyxNQUFNLFVBQVUsR0FBRyxXQUFXLENBQzdCLENBQUMsQ0FBZ0IsRUFBRSxFQUFFO1FBQ3BCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUN2QixPQUFPLEVBQUUsQ0FBQztRQUNYLENBQUM7SUFDRixDQUFDLEVBQ0QsQ0FBQyxPQUFPLENBQUMsQ0FDVCxDQUFDO0lBRUYsTUFBTSxPQUFPLEdBQXNDLEdBQUcsRUFBRTtRQUN2RCxJQUFJLGVBQWU7WUFBRSxPQUFPO1FBQzVCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQyxDQUFDO0lBRUYsU0FBUyxDQUFDLEdBQUcsRUFBRTtRQUNkLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUN0QixPQUFPO1FBQ1IsQ0FBQztRQUVELElBQUksSUFBSSxFQUFFLENBQUM7WUFDVixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7YUFBTSxDQUFDO1lBQ1AsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsT0FBTyxHQUFHLEVBQUU7WUFDWCxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBRXpDLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFM0IsSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUV2QixPQUFPLENBQ04sY0FDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FDdEIsd0NBQXdDLEVBQ3hDLGtDQUFrQyxFQUNsQyx3Q0FBd0MsRUFDeEMsK0JBQStCLENBQy9CLEVBQ0QsT0FBTyxFQUFFLE9BQU8sWUFDaEIsY0FDQyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyx5Q0FBeUMsRUFBRSxpQkFBaUIsQ0FBQyxFQUNyRixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDZCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDckIsQ0FBQyxZQUNBLFFBQVEsR0FDSixHQUNELENBQ04sQ0FBQztBQUNILENBQUMifQ==