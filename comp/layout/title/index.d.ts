import React, { ReactNode } from "react";
type Props = {
    right?: ReactNode | ReactNode[];
    children?: ReactNode;
};
export default function ({ children, right }: Props): React.JSX.Element;
export {};
