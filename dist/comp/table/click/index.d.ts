import { TableItem } from "../../table/types";
import { MouseEvent, ReactNode } from "react";
type Props<T> = {
    items: TableItem<T>[];
    className?: string;
    list: T[];
    onClick: (event: MouseEvent<HTMLDivElement>, row: T) => void;
    emptyMessage?: ReactNode;
};
export default function <T>({ items, className, list, onClick, emptyMessage }: Readonly<Props<T>>): import("react").JSX.Element;
export {};
