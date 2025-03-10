import React, { ReactNode } from "react";
type Props = {
    label?: ReactNode;
    className?: string;
    children?: ReactNode;
};
export default function ({ label, className, children }: Props): React.JSX.Element;
export {};
