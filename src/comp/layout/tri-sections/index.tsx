import SideNav from "@comp/layout/tri-sections/side-nav";
import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";

type Props = {
	top?: ReactNode;
	side?: ReactNode;
	children?: ReactNode;
};

export default function ({top, side, children}: Readonly<Props>) {
	return (
		<>
			<div
				className={fnCss.concat(
					"hidden lg:block",
					"fixed z-1 top-0 left-0 h-screen w-1/5 overflow-hidden overscroll-y-auto",
					"partition-side-nav"
				)}>
				{side}
			</div>
			<div className={fnCss.concat("fixed z-1 top-0", "w-full left-0 lg:left-1/5 lg:w-4/5", "partition-top-nav")}>
				<SideNav />
				{top}
			</div>
			<div
				className={fnCss.concat(
					"left-0 min-h-screen",
					"lg:absolute lg:left-1/5 lg:w-4/5 p-3",
					"partition-content"
				)}>
				{children}
			</div>
		</>
	);
}
