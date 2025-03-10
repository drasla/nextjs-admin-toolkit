import React from "react";
import { ModalBackdropProps } from "../../modal/backdrop";
type Props = {
    disableCloseButton?: boolean;
} & ModalBackdropProps;
export default function ({ open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton }: Props): React.JSX.Element | null;
export {};
