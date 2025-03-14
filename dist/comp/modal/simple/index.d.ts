import { ModalBackdropProps } from "../../modal/backdrop";
import React from "react";
type Props = {
    disableCloseButton?: boolean;
} & ModalBackdropProps;
export default function ({ open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton }: Props): React.JSX.Element | null;
export {};
