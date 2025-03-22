import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";

interface Props {
	className?: string;
	children?: ReactNode;
}

export default function ({children, className}: Readonly<Props>) {
	className = className || "";
	return (
		<div className={className}>
			<table className={fnCss.sum("table w-full")}>{children}</table>
		</div>
	);
}
