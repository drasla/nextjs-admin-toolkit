import { AlignJustifyCSS } from "../../types";
import React from "react";
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
