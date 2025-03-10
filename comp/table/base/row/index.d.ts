import { TableItem } from "../../types";
type Props<T> = {
    items: Pick<TableItem<T>, "name" | "className" | "parser">[];
    className?: string;
    row: T;
};
export default function <T>({ items, className, row }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
