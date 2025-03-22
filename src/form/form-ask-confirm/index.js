"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ActLoading, ModalBase } from "../..";
export default function ({ className, children, loadingChildren, pending, action, ask, disableEscapeKey, disableBackdrop, disableCloseButton, disableLoadingView, }) {
    const [form, setForm] = useState();
    const [open, setOpen] = useState(false);
    const askProps = {
        confirm: () => {
            form === null || form === void 0 ? void 0 : form.requestSubmit();
            setOpen(false);
        },
        cancel: () => {
            setOpen(false);
        },
    };
    const childrenProps = {
        open: () => {
            if (form === null || form === void 0 ? void 0 : form.reportValidity())
                setOpen(true);
        },
        close: () => setOpen(false),
    };
    return (_jsxs(_Fragment, { children: [_jsx("form", { ref: setForm, className: className, action: action, children: children(childrenProps) }), form && (_jsx(ModalBase, { disableCloseButton: disableCloseButton, disableEscapeKey: disableEscapeKey, disableBackdrop: disableBackdrop, open: open, onClose: () => setOpen(false), children: ask(askProps) })), !disableLoadingView && _jsx(ActLoading, { pending: pending, children: loadingChildren })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxPQUFPLENBQUM7QUF5QjVDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFDeEIsU0FBUyxFQUNULFFBQVEsRUFDUixlQUFlLEVBQ2YsT0FBTyxFQUNQLE1BQU0sRUFDTixHQUFHLEVBQ0gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ0Q7SUFDakIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLEVBQTZCLENBQUM7SUFDOUQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEMsTUFBTSxRQUFRLEdBQXVCO1FBQ3BDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDYixJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsYUFBYSxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLENBQUM7S0FDRCxDQUFDO0lBRUYsTUFBTSxhQUFhLEdBQWtCO1FBQ3BDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDVixJQUFJLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxjQUFjLEVBQUU7Z0JBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDRCxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztLQUMzQixDQUFDO0lBRUYsT0FBTyxDQUNOLDhCQUNDLGVBQ0MsR0FBRyxFQUFFLE9BQU8sRUFDWixTQUFTLEVBQUUsU0FBUyxFQUNwQixNQUFNLEVBQUUsTUFBTSxZQUNiLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FDbEIsRUFFTixJQUFJLElBQUksQ0FDUixLQUFDLFNBQVMsSUFDVCxrQkFBa0IsRUFBRSxrQkFBa0IsRUFDdEMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQ2xDLGVBQWUsRUFBRSxlQUFlLEVBQ2hDLElBQUksRUFBRSxJQUFJLEVBQ1YsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFDNUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUNILENBQ1osRUFFQSxDQUFDLGtCQUFrQixJQUFJLEtBQUMsVUFBVSxJQUFDLE9BQU8sRUFBRSxPQUFPLFlBQUcsZUFBZSxHQUFjLElBQ2xGLENBQ0gsQ0FBQztBQUNILENBQUMifQ==