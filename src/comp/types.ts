import {ReactNode} from "react";

export type * from "@comp/button/types";
export type * from "@comp/table/types";

export type PropsChildren = Readonly<{
	children: ReactNode;
}>;

// css
export type AlignJustifyCSS = "justify-center" | "justify-start" | "justify-end";
