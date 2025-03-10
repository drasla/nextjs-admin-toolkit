import React from "react";
import { AlignJustifyCSS } from "../../types";
export type PrintBaseProps = {
    icon?: string;
    className?: string;
    children?: string;
    align?: AlignJustifyCSS;
    copy?: boolean;
    ellipsis?: boolean;
    length?: number;
};
export default function ({ icon, className, children, align, copy, ellipsis, length }: PrintBaseProps): React.JSX.Element | null;
