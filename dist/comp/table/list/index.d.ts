import { TableItem } from "../../table/types";
type Props<T> = {
    items: TableItem<T>[];
    className?: string;
    list: T[];
};
export default function <T>({ items, className, list }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
