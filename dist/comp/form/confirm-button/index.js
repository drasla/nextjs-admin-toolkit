"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import { useState } from "react";
import { Button } from "../../button";
import { Modal } from "../../modal";
export default function ({ form, buttonStyle, buttonText, buttonClassName, confirmText, cancelText, children }) {
    const [open, setOpen] = useState(false);
    buttonText = buttonText || "확인";
    confirmText = confirmText || "확인";
    cancelText = cancelText || "취소";
    const onConfirm = (e) => {
        e.stopPropagation();
        if (!form)
            return;
        form.requestSubmit();
        setOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button.Basic, { className: buttonClassName, style: buttonStyle, onClick: () => setOpen(true), children: buttonText }), _jsxs(Modal.Simple, { disableBackdrop: true, disableCloseButton: true, open: open, onClose: () => setOpen(false), children: [children, _jsxs("div", { className: fnCss.concat("mt-3 grid grid-cols-1 gap-2", "lg:grid-cols-2 lg:gap-4"), children: [_jsx(Button.Basic, { style: "primary", onClick: onConfirm, children: confirmText }), _jsx(Button.Basic, { onClick: () => setOpen(false), children: cancelText })] })] })] }));
}
