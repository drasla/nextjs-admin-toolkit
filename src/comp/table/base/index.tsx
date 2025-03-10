import {fnCss} from "nextjs-tools";
import {ReactNode} from "react";
import Styles from "../index.module.scss";

export default function ({children}: Readonly<{children: ReactNode[]}>) {
	const cols = children.length;
	return (
		<div
			className={fnCss.concat(
				`grid grid-cols-1 gap-2 lg:grid-cols-${cols} lg:gap-4`,
				Styles["table-top-border"]
			)}>
			{children}
		</div>
	);
}
