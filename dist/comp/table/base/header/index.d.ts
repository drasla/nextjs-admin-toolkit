import { TableItem } from "../../../table/types";
type Props<T> = {
    items: Pick<TableItem<T>, "name" | "className">[];
    className?: string;
};
export default function <T>({ items, className }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element;
export {};
