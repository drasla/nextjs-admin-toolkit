"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { useCallback, useEffect } from "react";
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
    return (_jsx("div", { className: fnCss.concat("w-screen h-screen z-100 fixed left-0 top-0", "flex items-center justify-center", "backdrop-blur-xs backdrop-grayscale-40", "modal-background"), onClick: onClick, children: _jsx("div", { className: fnCss.concat("pl-0.5 pr-0.5 z-110 pointer-events-auto", "lg:pl-0 lg:pr-0"), onClick: (e) => {
                e.stopPropagation();
            }, children: children }) }));
}
Component.__isStatic = true;
