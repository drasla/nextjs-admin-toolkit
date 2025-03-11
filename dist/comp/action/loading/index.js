import { jsx as _jsx } from "react/jsx-runtime";
import Modal from "../../modal";
export default function ({ children, pending }) {
    if (!pending)
        return null;
    return (_jsx(Modal.Backdrop, { open: true, onClose: () => { }, disableBackdrop: true, disableEscapeKey: true, children: children || "로딩중" }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9hY3Rpb24vbG9hZGluZy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sS0FBSyxNQUFNLGFBQWEsQ0FBQztBQVNoQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBUTtJQUNsRCxJQUFJLENBQUMsT0FBTztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTFCLE9BQU8sQ0FDTixLQUFDLEtBQUssQ0FBQyxRQUFRLElBQ2QsSUFBSSxFQUFFLElBQUksRUFDVixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUNqQixlQUFlLFFBQ2YsZ0JBQWdCLGtCQUNmLFFBQVEsSUFBSSxLQUFLLEdBQ0YsQ0FDakIsQ0FBQztBQUNILENBQUMifQ==