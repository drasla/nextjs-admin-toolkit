"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ActLoading, ModalBase } from "../..";
export default function ({ className, children, loadingChildren, pending, action, ask, disableEscapeKey, disableBackdrop, disableCloseButton, disableLoadingView, }) {
    const [form, setForm] = useState();
    const [open, setOpen] = useState(false);
    const props = {
        confirm: () => {
            form === null || form === void 0 ? void 0 : form.requestSubmit();
            setOpen(false);
        },
        cancel: () => {
            setOpen(false);
        },
    };
    return (_jsxs(_Fragment, { children: [_jsx("form", { ref: setForm, className: className, action: action, children: children({
                    open: () => {
                        if (form === null || form === void 0 ? void 0 : form.reportValidity())
                            setOpen(true);
                    },
                    close: () => setOpen(false),
                }) }), form && (_jsx(ModalBase, { disableCloseButton: disableCloseButton, disableEscapeKey: disableEscapeKey, disableBackdrop: disableBackdrop, open: open, onClose: () => setOpen(false), children: ask(props) })), !disableLoadingView && _jsx(ActLoading, { pending: pending, children: loadingChildren })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxPQUFPLENBQUM7QUF5QjVDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFDeEIsU0FBUyxFQUNULFFBQVEsRUFDUixlQUFlLEVBQ2YsT0FBTyxFQUNQLE1BQU0sRUFDTixHQUFHLEVBQ0gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ0Q7SUFDakIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLEVBQTZCLENBQUM7SUFDOUQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEMsTUFBTSxLQUFLLEdBQXVCO1FBQ2pDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDYixJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsYUFBYSxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLENBQUM7S0FDRCxDQUFDO0lBRUYsT0FBTyxDQUNOLDhCQUNDLGVBQ0MsR0FBRyxFQUFFLE9BQU8sRUFDWixTQUFTLEVBQUUsU0FBUyxFQUNwQixNQUFNLEVBQUUsTUFBTSxZQUNiLFFBQVEsQ0FBQztvQkFDVCxJQUFJLEVBQUUsR0FBRyxFQUFFO3dCQUNWLElBQUksSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGNBQWMsRUFBRTs0QkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNDLENBQUM7b0JBQ0QsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7aUJBQzNCLENBQUMsR0FDSSxFQUVOLElBQUksSUFBSSxDQUNSLEtBQUMsU0FBUyxJQUNULGtCQUFrQixFQUFFLGtCQUFrQixFQUN0QyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFDbEMsZUFBZSxFQUFFLGVBQWUsRUFDaEMsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQ0EsQ0FDWixFQUVBLENBQUMsa0JBQWtCLElBQUksS0FBQyxVQUFVLElBQUMsT0FBTyxFQUFFLE9BQU8sWUFBRyxlQUFlLEdBQWMsSUFDbEYsQ0FDSCxDQUFDO0FBQ0gsQ0FBQyJ9