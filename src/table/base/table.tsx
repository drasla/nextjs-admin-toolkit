import React, {ReactNode} from "react";
import {fnCss} from "nextjs-tools";

interface Props {
	className?: string;
	children?: ReactNode;
}

export default function ({children, className}: Readonly<Props>) {
	className = className || "";
	return <table className={fnCss.sum("table", className)}>{children}</table>;
}
