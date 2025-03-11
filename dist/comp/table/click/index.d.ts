import { TableItem } from "../../table/types";
import { MouseEventHandler } from "react";
type Props<T> = {
    items: TableItem<T>[];
    className?: string;
    list: T[];
    onClick: MouseEventHandler<HTMLDivElement>;
};
export default function <T>({ items, className, list, onClick }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
