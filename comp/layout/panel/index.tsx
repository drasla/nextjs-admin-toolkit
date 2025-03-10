import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";
import CSS from "./index.module.scss";

type Props = {
	className?: string;
	children?: ReactNode;
};

export default function ({children, className}: Props) {
	return <div className={fnCss.concat(CSS["panel"], className)}>{children}</div>;
}
