"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ModalBase } from "../..";
export default function ({ state, children }) {
    const [open, setOpen] = useState(true);
    const [time, setTime] = useState(0);
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
    return (_jsx(ModalBase, { disableBackdrop: true, disableCloseButton: true, open: open, onClose: () => setOpen(false), children: children({ onClose: () => setOpen(false) }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUNiLE9BQWMsRUFBWSxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBRTVELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxPQUFPLENBQUM7QUFZaEMsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQXFCO0lBQ2hFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDZCxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUM1QixJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUk7WUFBRSxPQUFPO1FBRXpDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFWixJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ2pDLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFM0IsT0FBTyxDQUNOLEtBQUMsU0FBUyxJQUNULGVBQWUsUUFDZixrQkFBa0IsUUFDbEIsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUM1QixRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsR0FDL0IsQ0FDWixDQUFDO0FBQ0gsQ0FBQyJ9