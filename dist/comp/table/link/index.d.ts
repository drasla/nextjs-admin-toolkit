import { TableItem } from "../../table/types";
import { ReactNode } from "react";
type Props<T> = {
    items: TableItem<T>[];
    className?: string;
    list: T[];
    linker: (row: T) => string;
    emptyMessage?: ReactNode;
};
export default function <T>({ items, className, list, linker, emptyMessage }: Readonly<Props<T>>): import("react").JSX.Element;
export {};
