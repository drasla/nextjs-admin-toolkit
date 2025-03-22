"use client";
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { ModalBase } from "../..";
export default function ({ className, children, action, button, ask, disableEscapeKey, disableBackdrop, disableCloseButton, }) {
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
    return (_jsxs(_Fragment, { children: [_jsxs("form", { ref: setForm, className: className, action: action, children: [children, button({
                        open: () => {
                            if (form === null || form === void 0 ? void 0 : form.reportValidity())
                                setOpen(true);
                        },
                        close: () => setOpen(false),
                    })] }), form && (_jsx(ModalBase, { disableCloseButton: disableCloseButton, disableEscapeKey: disableEscapeKey, disableBackdrop: disableBackdrop, open: open, onClose: () => setOpen(false), children: ask(props) }))] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQWMsRUFBWSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFDakQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQXVCaEMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUN4QixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sR0FBRyxFQUNILGdCQUFnQixFQUNoQixlQUFlLEVBQ2Ysa0JBQWtCLEdBQ0Q7SUFDakIsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLEVBQTZCLENBQUM7SUFDOUQsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFeEMsTUFBTSxLQUFLLEdBQXVCO1FBQ2pDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDYixJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsYUFBYSxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLENBQUM7S0FDRCxDQUFDO0lBRUYsT0FBTyxDQUNOLDhCQUNDLGdCQUNDLEdBQUcsRUFBRSxPQUFPLEVBQ1osU0FBUyxFQUFFLFNBQVMsRUFDcEIsTUFBTSxFQUFFLE1BQU0sYUFDYixRQUFRLEVBQ1IsTUFBTSxDQUFDO3dCQUNQLElBQUksRUFBRSxHQUFHLEVBQUU7NEJBQ1YsSUFBSSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsY0FBYyxFQUFFO2dDQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDM0MsQ0FBQzt3QkFDRCxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztxQkFDM0IsQ0FBQyxJQUNJLEVBRU4sSUFBSSxJQUFJLENBQ1IsS0FBQyxTQUFTLElBQ1Qsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQ3RDLGdCQUFnQixFQUFFLGdCQUFnQixFQUNsQyxlQUFlLEVBQUUsZUFBZSxFQUNoQyxJQUFJLEVBQUUsSUFBSSxFQUNWLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQzVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FDQSxDQUNaLElBQ0MsQ0FDSCxDQUFDO0FBQ0gsQ0FBQyJ9