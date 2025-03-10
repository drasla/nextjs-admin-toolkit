import { Nullable } from "nextjs-tools";
import React, { ReactNode } from "react";
import { ButtonStyles } from "../../button/types";
type Props = {
    form: Nullable<HTMLFormElement>;
    pending: boolean;
    buttonStyle?: ButtonStyles;
    buttonText?: string;
    buttonClassName?: string;
    confirmText?: string;
    cancelText?: string;
    children?: ReactNode;
};
export default function ({ form, buttonStyle, buttonText, buttonClassName, confirmText, cancelText, children }: Props): React.JSX.Element;
export {};
