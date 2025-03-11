import { ReactNode } from "react";
export type TableItem<T> = {
    name: string;
    parser: (v: T) => ReactNode;
    className: string;
};
