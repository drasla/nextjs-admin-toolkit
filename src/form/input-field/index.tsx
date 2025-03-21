import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";

type Props = {
	label?: ReactNode;
	className?: string;
	children?: ReactNode;
};

export default function ({label, className, children}: Props) {
	return (
		<div className={fnCss.concat(className)}>
			{label && <div className="label">{label}</div>}

			<div className="input field flex items-center">
				<div className="grow">{children}</div>
			</div>
		</div>
	);
}
