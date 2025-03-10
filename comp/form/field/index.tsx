"use client";
import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";
import CSS from "../index.module.scss";

type Props = {
	label?: ReactNode;
	className?: string;
	children?: ReactNode;
};

export default function ({label, className, children}: Props) {
	className = className || "";
	return (
		<div className={fnCss.concat(className)}>
			{label && <div className={CSS["label"]}>{label}</div>}
			<div className={fnCss.concat("flex items-center", CSS["input"], CSS["field"])}>{children}</div>
		</div>
	);
}
