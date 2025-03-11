import { TableItem } from "../../types";
type Props<T> = {
    items: Pick<TableItem<T>, "name" | "className" | "parser">[];
    row: T;
};
export default function <T>({ items, row }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element[];
export {};
