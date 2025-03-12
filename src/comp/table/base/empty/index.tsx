import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";

type Props = {
	className?: string;
	children?: ReactNode;
};

export default function ({children, className}: Props) {
	return (
		<div
			className={fnCss.concat(
				"w-full p-3 flex font-bold items-center justify-center",
				"table-top-border table-content text-center",
				className
			)}>
			{children || "내용이 없습니다."}
		</div>
	);
}
