import React, { ReactNode } from "react";
type Props = {
    pending: boolean;
    children?: ReactNode;
};
export default function ({ children, pending }: Props): React.JSX.Element | null;
export {};
