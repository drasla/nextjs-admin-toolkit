"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Button from "../../button";
import Modal from "../../modal";
import { fnCss } from "nextjs-tools";
import { useState } from "react";
export default function ({ form, onConfirm, buttonStyle, buttonText, buttonClassName, confirmText, cancelText, children, }) {
    const [open, setOpen] = useState(false);
    buttonText = buttonText || "확인";
    confirmText = confirmText || "확인";
    cancelText = cancelText || "취소";
    const onClickConfirm = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!form)
            return;
        form.requestSubmit();
        onConfirm();
        setOpen(false);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button.Basic, { className: buttonClassName, style: buttonStyle, onClick: () => setOpen(true), children: buttonText }), _jsxs(Modal.Simple, { disableBackdrop: true, disableCloseButton: true, open: open, onClose: () => setOpen(false), children: [children, _jsxs("div", { className: fnCss.concat("mt-3 grid grid-cols-1 gap-2", "lg:grid-cols-2 lg:gap-4"), children: [_jsx(Button.Basic, { style: "primary", onClick: onClickConfirm, children: confirmText }), _jsx(Button.Basic, { onClick: () => setOpen(false), children: cancelText })] })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2NvbmZpcm0tYnV0dG9uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxNQUFNLE1BQU0sY0FBYyxDQUFDO0FBRWxDLE9BQU8sS0FBSyxNQUFNLGFBQWEsQ0FBQztBQUNoQyxPQUFPLEVBQUMsS0FBSyxFQUFXLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQWMsRUFBK0IsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBZXBFLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFDeEIsSUFBSSxFQUNKLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLGVBQWUsRUFDZixXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsR0FDRDtJQUNQLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLFVBQVUsR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDO0lBQ2hDLFdBQVcsR0FBRyxXQUFXLElBQUksSUFBSSxDQUFDO0lBQ2xDLFVBQVUsR0FBRyxVQUFVLElBQUksSUFBSSxDQUFDO0lBRWhDLE1BQU0sY0FBYyxHQUF5QyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2xFLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBQ2xCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixTQUFTLEVBQUUsQ0FBQztRQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRixPQUFPLENBQ04sOEJBQ0MsS0FBQyxNQUFNLENBQUMsS0FBSyxJQUNaLFNBQVMsRUFBRSxlQUFlLEVBQzFCLEtBQUssRUFBRSxXQUFXLEVBQ2xCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQzNCLFVBQVUsR0FDRyxFQUNmLE1BQUMsS0FBSyxDQUFDLE1BQU0sSUFDWixlQUFlLFFBQ2Ysa0JBQWtCLFFBQ2xCLElBQUksRUFBRSxJQUFJLEVBQ1YsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFDNUIsUUFBUSxFQUNULGVBQUssU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUseUJBQXlCLENBQUMsYUFDckYsS0FBQyxNQUFNLENBQUMsS0FBSyxJQUNaLEtBQUssRUFBQyxTQUFTLEVBQ2YsT0FBTyxFQUFFLGNBQWMsWUFDdEIsV0FBVyxHQUNFLEVBQ2YsS0FBQyxNQUFNLENBQUMsS0FBSyxJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQUcsVUFBVSxHQUFnQixJQUNuRSxJQUNRLElBQ2IsQ0FDSCxDQUFDO0FBQ0gsQ0FBQyJ9