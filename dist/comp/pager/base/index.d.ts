import React from "react";
interface Props {
    buttons?: number;
    page: number;
    size: number;
    total: number;
    onClick?: (page: number) => void;
}
export default function ({ buttons, page, size, total, onClick }: Props): React.JSX.Element;
export {};
