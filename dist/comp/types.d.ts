import { ReactNode } from "react";
export type * from "./button/types";
export type * from "./table/types";
export type PropsChildren = Readonly<{
    children: ReactNode;
}>;
export type AlignJustifyCSS = "justify-center" | "justify-start" | "justify-end";
