import React from "react";
import { TableItem } from "../../types";
type Props<T> = {
    items: Pick<TableItem<T>, "name" | "className" | "parser" | "align">[];
    className?: string;
    row: T;
};
export default function <T>({ items, className, row }: Readonly<Props<T>>): React.JSX.Element;
export {};
