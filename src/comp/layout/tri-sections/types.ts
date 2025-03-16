import {Color} from "@comp/types";
import {ReactNode} from "react";

export type TriSectionAccordionItem = {
	title: ReactNode;
	iconSrc?: string;
	className?: string;
	submenu: TriSectionAccordionSubmenu[];
};

export type TriSectionAccordionSubmenu = {
	title: ReactNode;
	className?: string;
	iconSrc?: string;
	href: string;
	prefix: string;
	alert?: () => Promise<number>;
	alertColor?: Color;
};
