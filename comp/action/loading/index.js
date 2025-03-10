import { jsx as _jsx } from "react/jsx-runtime";
import Modal from "../../modal";
export default function ({ children, pending }) {
    if (!pending)
        return null;
    return (_jsx(Modal.Backdrop, { open: true, onClose: () => { }, disableBackdrop: true, disableEscapeKey: true, children: children || "로딩중" }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sS0FBSyxNQUFNLGFBQWEsQ0FBQztBQU9oQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBUTtJQUNsRCxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTFCLE9BQU8sQ0FDTixLQUFDLEtBQUssQ0FBQyxRQUFRLElBQ2QsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNqQixlQUFlLFFBQ2YsZ0JBQWdCLGtCQUNmLFFBQVEsSUFBSSxLQUFLLEdBQ0YsQ0FDakIsQ0FBQztBQUNILENBQUMifQ==