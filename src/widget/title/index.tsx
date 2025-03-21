import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";

type Props = {
	right?: ReactNode | ReactNode[];
	children?: ReactNode;
	className?: string;
};

export default function ({children, right, className}: Props) {
	return (
		<div className={fnCss.concat("flex w-full items-center mb-5 min-h-13", className)}>
			<h4 className="block">{children}</h4>
			<div className="grow flex justify-end">{right}</div>
		</div>
	);
}
