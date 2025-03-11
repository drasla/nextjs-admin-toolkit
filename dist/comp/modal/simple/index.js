import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Asset from "../../../asset";
import Backdrop from "../../modal/backdrop";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
export default function ({ open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton }) {
    if (!open)
        return null;
    if (!children)
        return null;
    return (_jsx(Backdrop, { open: open, onClose: onClose, disableEscapeKey,
        disableBackdrop, children: _jsxs("div", { className: "flex flex-wrap", children: [!disableCloseButton && (_jsx("div", { className: "w-full pb-2 flex justify-end", children: _jsx(Image, { className: fnCss.concat("modal-close", "cursor-pointer"), width: 30, height: 30, src: Asset.svg.cross, alt: "close", onClick: onClose }) })), _jsx("div", { className: fnCss.concat("w-full p-4 rounded-md shadow-2xl", "modal-content"), children: children })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9tb2RhbC9zaW1wbGUvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEtBQUssTUFBTSxRQUFRLENBQUM7QUFDM0IsT0FBTyxRQUE4QixNQUFNLHNCQUFzQixDQUFDO0FBQ2xFLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBT25DLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQVE7SUFDL0csSUFBSSxDQUFDLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN2QixJQUFJLENBQUMsUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTNCLE9BQU8sQ0FDTixLQUFDLFFBQVEsSUFDUixJQUFJLEVBQUUsSUFBSSxFQUNWLE9BQU8sRUFBRSxPQUFPLEVBRWYsZ0JBQWdCO1FBQ2hCLGVBQWUsWUFFaEIsZUFBSyxTQUFTLEVBQUMsZ0JBQWdCLGFBQzdCLENBQUMsa0JBQWtCLElBQUksQ0FDdkIsY0FBSyxTQUFTLEVBQUMsOEJBQThCLFlBQzVDLEtBQUMsS0FBSyxJQUNMLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxFQUN4RCxLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUNwQixHQUFHLEVBQUUsT0FBTyxFQUNaLE9BQU8sRUFBRSxPQUFPLEdBQ2YsR0FDRyxDQUNOLEVBQ0QsY0FBSyxTQUFTLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRSxlQUFlLENBQUMsWUFBRyxRQUFRLEdBQU8sSUFDOUYsR0FDSSxDQUNYLENBQUM7QUFDSCxDQUFDIn0=