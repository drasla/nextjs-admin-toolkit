import Accordion from "@comp/layout/tri-sections/accordion";
import SideNav from "@comp/layout/tri-sections/side-nav";
import {TriSectionAccordionItem} from "@comp/layout/tri-sections/types";
import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";

type Props = {
	side?: TriSectionAccordionItem[];
	children?: ReactNode;
};

export default function ({side, children}: Readonly<Props>) {
	side = side || [];
	return (
		<>
			<div
				className={fnCss.concat(
					"fixed z-1 top-0",
					"w-full left-0 lg:left-1/5 lg:w-4/5",
					"tri-sections-top-nav"
				)}>
				<SideNav>
					<Accordion side={side} />
				</SideNav>
			</div>

			<div
				className={fnCss.concat(
					"hidden lg:block",
					"fixed z-1 top-0 left-0 h-screen w-1/5 overflow-hidden overscroll-y-auto",
					"tri-sections-side-nav"
				)}>
				<Accordion side={side} />
			</div>
			<div
				className={fnCss.concat(
					"left-0 min-h-screen",
					"lg:absolute lg:left-1/5 lg:w-4/5 p-3",
					"tri-sections-content"
				)}>
				{children}
			</div>
		</>
	);
}
