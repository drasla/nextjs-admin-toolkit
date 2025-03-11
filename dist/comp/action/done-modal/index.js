"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from "../../button";
import Modal from "../../modal";
import { useEffect, useState } from "react";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9hY3Rpb24vZG9uZS1tb2RhbC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQU8sTUFBTSxNQUFNLGNBQWMsQ0FBQztBQUNsQyxPQUFPLEtBQUssTUFBTSxhQUFhLENBQUM7QUFFaEMsT0FBYyxFQUFZLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFlNUQsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBVztJQUM5RSxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwQyxVQUFVLEdBQUcsVUFBVSxJQUFJLElBQUksQ0FBQztJQUVoQyxTQUFTLENBQUMsR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUFFLE9BQU87UUFDNUIsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQUUsT0FBTztRQUV6QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRVosSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUNqQyxJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTNCLE9BQU8sQ0FDTixNQUFDLEtBQUssQ0FBQyxNQUFNLElBQ1osZUFBZSxRQUNmLGtCQUFrQixRQUNsQixJQUFJLEVBQUUsSUFBSSxFQUNWLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGFBQzVCLFFBQVEsRUFDUixDQUFDLFVBQVUsSUFBSSxDQUNmLEtBQUMsTUFBTSxDQUFDLEtBQUssSUFDWixTQUFTLEVBQUMsYUFBYSxFQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUM1QixVQUFVLEdBQ0csQ0FDZixJQUNhLENBQ2YsQ0FBQztBQUNILENBQUMifQ==