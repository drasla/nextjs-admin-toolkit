import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";

type Props = {
	className?: string;
	children?: ReactNode;
};

export default function ({children, className}: Props) {
	return <div className={fnCss.concat("panel", className)}>{children}</div>;
}
