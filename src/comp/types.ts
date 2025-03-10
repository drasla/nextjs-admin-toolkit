import {ReactNode} from "react";

export type PropsChildren = Readonly<{
	children: ReactNode;
}>;

// css
export type AlignJustifyCSS = "justify-center" | "justify-start" | "justify-end";
