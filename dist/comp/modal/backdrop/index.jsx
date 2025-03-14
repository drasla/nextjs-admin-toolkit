"use client";
import { fnCss } from "nextjs-tools";
import React, { useCallback, useEffect } from "react";
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
    return (<div className={fnCss.concat("w-screen h-screen z-100 fixed left-0 top-0", "flex items-center justify-center", "backdrop-blur-xs backdrop-grayscale-40", "modal-background")} onClick={onClick}>
			<div className={fnCss.concat("pl-0.5 pr-0.5 z-110 pointer-events-auto", "lg:pl-0 lg:pr-0")} onClick={(e) => {
            e.stopPropagation();
        }}>
				{children}
			</div>
		</div>);
}
Component.__isStatic = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanN4Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXAvbW9kYWwvYmFja2Ryb3AvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDbkMsT0FBTyxLQUFLLEVBQUUsRUFBK0IsV0FBVyxFQUFFLFNBQVMsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQVVsRixNQUFNLENBQUMsT0FBTyxVQUFVLFNBQVMsQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBcUI7SUFDakgsTUFBTSxVQUFVLEdBQUcsV0FBVyxDQUM3QixDQUFDLENBQWdCLEVBQUUsRUFBRTtRQUNwQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7WUFDdkIsT0FBTyxFQUFFLENBQUM7UUFDWCxDQUFDO0lBQ0YsQ0FBQyxFQUNELENBQUMsT0FBTyxDQUFDLENBQ1QsQ0FBQztJQUVGLE1BQU0sT0FBTyxHQUFzQyxHQUFHLEVBQUU7UUFDdkQsSUFBSSxlQUFlO1lBQUUsT0FBTztRQUM1QixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUMsQ0FBQztJQUVGLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFDdEIsT0FBTztRQUNSLENBQUM7UUFFRCxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ1YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNoRCxDQUFDO2FBQU0sQ0FBQztZQUNQLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELE9BQU8sR0FBRyxFQUFFO1lBQ1gsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUV6QyxJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTNCLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFdkIsT0FBTyxDQUNOLENBQUMsR0FBRyxDQUNILFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3RCLDRDQUE0QyxFQUM1QyxrQ0FBa0MsRUFDbEMsd0NBQXdDLEVBQ3hDLGtCQUFrQixDQUNsQixDQUFDLENBQ0YsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQ2pCO0dBQUEsQ0FBQyxHQUFHLENBQ0gsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyx5Q0FBeUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQ3RGLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDZCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQ0Y7SUFBQSxDQUFDLFFBQVEsQ0FDVjtHQUFBLEVBQUUsR0FBRyxDQUNOO0VBQUEsRUFBRSxHQUFHLENBQUMsQ0FDTixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDIn0=