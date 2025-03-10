import React, { ReactNode } from "react";
type Props = {
    icon?: string;
    children?: ReactNode;
    href?: string;
};
export default function ({ children, href, icon }: Props): React.JSX.Element;
export {};
