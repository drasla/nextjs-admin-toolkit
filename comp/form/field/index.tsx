"use client";
import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";

type Props = {
	label?: ReactNode;
	className?: string;
	children?: ReactNode;
};

export default function ({label, className, children}: Props) {
	className = className || "";
	return (
		<div className={fnCss.concat(className)}>
			{label && <div className={"label"}>{label}</div>}
			<div className={fnCss.concat("flex items-center", "input", "field")}>{children}</div>
		</div>
	);
}
