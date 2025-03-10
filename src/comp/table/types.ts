import {ReactNode} from "react";
import {AlignJustifyCSS} from "../../comp";

export type TableItem<T> = {
	name: string;
	parser: (v: T) => ReactNode;
	className: string;
	align?: AlignJustifyCSS;
};
