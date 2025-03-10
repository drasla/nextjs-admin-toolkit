import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
import Asset from "../../asset";
import Backdrop from "../../modal/backdrop";
import CSS from "./index.module.scss";
export default function ({ open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton }) {
    if (!open)
        return null;
    if (!children)
        return null;
    return (_jsx(Backdrop, { open: open, onClose: onClose, disableEscapeKey,
        disableBackdrop, children: _jsxs("div", { className: "flex flex-wrap", children: [!disableCloseButton && (_jsx("div", { className: "w-full pb-2 flex justify-end", children: _jsx(Image, { className: fnCss.concat(CSS["close"], "cursor-pointer"), width: 30, height: 30, src: Asset.svg.cross, alt: "close", onClick: onClose }) })), _jsx("div", { className: fnCss.concat("w-full p-4 rounded-md shadow-2xl", CSS["content"]), children: children })] }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRW5DLE9BQU8sS0FBSyxNQUFNLGFBQWEsQ0FBQztBQUNoQyxPQUFPLFFBQThCLE1BQU0sc0JBQXNCLENBQUM7QUFDbEUsT0FBTyxHQUFHLE1BQU0scUJBQXFCLENBQUM7QUFNdEMsTUFBTSxDQUFDLE9BQU8sV0FBVyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBUTtJQUMvRyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxRQUFRO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFM0IsT0FBTyxDQUNOLEtBQUMsUUFBUSxJQUNSLElBQUksRUFBRSxJQUFJLEVBQ1YsT0FBTyxFQUFFLE9BQU8sRUFFZixnQkFBZ0I7UUFDaEIsZUFBZSxZQUVoQixlQUFLLFNBQVMsRUFBQyxnQkFBZ0IsYUFDN0IsQ0FBQyxrQkFBa0IsSUFBSSxDQUN2QixjQUFLLFNBQVMsRUFBQyw4QkFBOEIsWUFDNUMsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQixDQUFDLEVBQ3ZELEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLEVBQUUsRUFDVixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQ3BCLEdBQUcsRUFBRSxPQUFPLEVBQ1osT0FBTyxFQUFFLE9BQU8sR0FDZixHQUNHLENBQ04sRUFDRCxjQUFLLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFHLFFBQVEsR0FBTyxJQUM3RixHQUNJLENBQ1gsQ0FBQztBQUNILENBQUMifQ==