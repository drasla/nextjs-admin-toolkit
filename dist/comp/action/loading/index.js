import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from "../../modal";
export default function ({ children, pending }) {
    if (!pending)
        return null;
    return (_jsx(Modal.Backdrop, { open: true, onClose: () => { }, disableBackdrop: true, disableEscapeKey: true, children: children || "로딩중" }));
}
