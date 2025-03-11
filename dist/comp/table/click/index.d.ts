import { TableItem } from "../../table/types";
import { MouseEvent } from "react";
type Props<T> = {
    items: TableItem<T>[];
    className?: string;
    list: T[];
    onClick: (event: MouseEvent<HTMLDivElement>, row: T) => void;
};
export default function <T>({ items, className, list, onClick }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
