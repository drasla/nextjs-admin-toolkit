import { ButtonStyles } from "../../button/types";
import { Nullable } from "nextjs-tools";
import { ReactNode } from "react";
type Props = {
    form: Nullable<HTMLFormElement>;
    onConfirm?: () => void;
    pending: boolean;
    buttonStyle?: ButtonStyles;
    buttonText?: string;
    buttonClassName?: string;
    confirmText?: string;
    cancelText?: string;
    children?: ReactNode;
};
export default function ({ form, onConfirm, buttonStyle, buttonText, buttonClassName, confirmText, cancelText, children, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
