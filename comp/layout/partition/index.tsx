import {fnCss} from "nextjs-tools";
import React, {Fragment, ReactNode} from "react";

type Props = {
	children?: ReactNode;
	side?: ReactNode;
	top?: ReactNode;
};

export default async function ({children, side, top}: Props) {
	return (
		<Fragment>
			<div
				className={fnCss.concat(
					"hidden lg:block",
					"fixed z-1 top-0 left-0 h-screen w-1/5 overflow-hidden overscroll-y-auto",
					"partition-side-nav"
				)}>
				{side}
			</div>
			<div className={fnCss.concat("fixed z-1 top-0", "w-full left-0 lg:left-1/5 lg:w-4/5", "partition-top-nav")}>
				{top}
			</div>
			<div
				className={fnCss.concat(
					"absolute",
					"left-0 w-full min-h-screen lg:left-1/5 lg:w-4/5 p-3",
					"partition-content"
				)}>
				{children}
			</div>
		</Fragment>
	);
}
