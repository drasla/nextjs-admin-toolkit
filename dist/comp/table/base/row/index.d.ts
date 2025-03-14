import { TableItem } from "../../../table/types";
import React from "react";
type Props<T> = {
    items: Pick<TableItem<T>, "name" | "className" | "parser">[];
    row: T;
};
export default function <T>({ items, row }: Readonly<Props<T>>): React.JSX.Element[];
export {};
