import { TableItem } from "../types";
type Props<T> = {
    items: TableItem<T>[];
    className?: string;
    list: T[];
    linker: (row: T) => string;
};
export default function <T>({ items, className, list, linker }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
