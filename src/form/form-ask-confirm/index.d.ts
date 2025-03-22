import { ReactNode } from "react";
interface Props {
    action: (payload: FormData) => void;
    className?: string;
    children: ReactNode;
    button: (props: ConfirmButtonProps) => ReactNode;
    ask: (props: ConfirmCancelProps) => ReactNode;
    disableBackdrop?: boolean;
    disableEscapeKey?: boolean;
    disableCloseButton?: boolean;
}
interface ConfirmCancelProps {
    confirm: () => void;
    cancel: () => void;
}
interface ConfirmButtonProps {
    open: () => void;
    close: () => void;
}
export default function ({ className, children, action, button, ask, disableEscapeKey, disableBackdrop, disableCloseButton, }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
