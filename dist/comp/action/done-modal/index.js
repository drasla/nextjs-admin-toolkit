"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Button } from "../../button";
import { Modal } from "../../modal";
export default function ({ children, state, buttonText, hideButton }) {
    const [open, setOpen] = useState(true);
    const [time, setTime] = useState(0);
    buttonText = buttonText || "확인";
    useEffect(() => {
        if (!state)
            return;
        if (!state.response)
            return;
        if (time === state.response.time)
            return;
        setOpen(true);
        setTime(state.response.time);
    }, [state]);
    if (!state)
        return null;
    if (!state.response)
        return null;
    if (!children)
        return null;
    return (_jsxs(Modal.Simple, { disableBackdrop: true, disableCloseButton: true, open: open, onClose: () => setOpen(false), children: [children, !hideButton && (_jsx(Button.Basic, { className: "mt-3 w-full", onClick: () => setOpen(false), children: buttonText }))] }));
}
