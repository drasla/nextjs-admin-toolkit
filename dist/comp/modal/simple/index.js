import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
import { Asset } from "../../../asset";
import Backdrop from "../backdrop";
export default function ({ open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton }) {
    if (!open)
        return null;
    if (!children)
        return null;
    return (_jsx(Backdrop, { open: open, onClose: onClose, disableEscapeKey,
        disableBackdrop, children: _jsxs("div", { className: "flex flex-wrap", children: [!disableCloseButton && (_jsx("div", { className: "w-full pb-2 flex justify-end", children: _jsx(Image, { className: fnCss.concat("modal-close", "cursor-pointer"), width: 30, height: 30, src: Asset.svg.cross, alt: "close", onClick: onClose }) })), _jsx("div", { className: fnCss.concat("w-full p-4 rounded-md shadow-2xl", "modal-content"), children: children })] }) }));
}
