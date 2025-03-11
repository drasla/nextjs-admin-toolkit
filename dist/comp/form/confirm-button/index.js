"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Button from "../../button";
import Modal from "../../modal";
import { fnCss } from "nextjs-tools";
import { useState } from "react";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9mb3JtL2NvbmZpcm0tYnV0dG9uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7O0FBQ2IsT0FBTyxNQUFNLE1BQU0sY0FBYyxDQUFDO0FBRWxDLE9BQU8sS0FBSyxNQUFNLGFBQWEsQ0FBQztBQUNoQyxPQUFPLEVBQUMsS0FBSyxFQUFXLE1BQU0sY0FBYyxDQUFDO0FBQzdDLE9BQWMsRUFBK0IsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBY3BFLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQVE7SUFDbEgsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsVUFBVSxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUM7SUFDaEMsV0FBVyxHQUFHLFdBQVcsSUFBSSxJQUFJLENBQUM7SUFDbEMsVUFBVSxHQUFHLFVBQVUsSUFBSSxJQUFJLENBQUM7SUFFaEMsTUFBTSxTQUFTLEdBQXlDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDN0QsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQztJQUVGLE9BQU8sQ0FDTiw4QkFDQyxLQUFDLE1BQU0sQ0FBQyxLQUFLLElBQ1osU0FBUyxFQUFFLGVBQWUsRUFDMUIsS0FBSyxFQUFFLFdBQVcsRUFDbEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFDM0IsVUFBVSxHQUNHLEVBQ2YsTUFBQyxLQUFLLENBQUMsTUFBTSxJQUNaLGVBQWUsUUFDZixrQkFBa0IsUUFDbEIsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxhQUM1QixRQUFRLEVBQ1QsZUFBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSx5QkFBeUIsQ0FBQyxhQUNyRixLQUFDLE1BQU0sQ0FBQyxLQUFLLElBQ1osS0FBSyxFQUFDLFNBQVMsRUFDZixPQUFPLEVBQUUsU0FBUyxZQUNqQixXQUFXLEdBQ0UsRUFDZixLQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBRyxVQUFVLEdBQWdCLElBQ25FLElBQ1EsSUFDYixDQUNILENBQUM7QUFDSCxDQUFDIn0=