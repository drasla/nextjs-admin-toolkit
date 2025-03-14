import React, { ReactNode } from "react";
type Props = {
    right?: ReactNode | ReactNode[];
    children?: ReactNode;
    className?: string;
};
export default function ({ children, right, className }: Props): React.JSX.Element;
export {};
