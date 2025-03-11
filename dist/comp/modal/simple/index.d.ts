import { ModalBackdropProps } from "../backdrop";
type Props = {
    disableCloseButton?: boolean;
} & ModalBackdropProps;
export default function ({ open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
