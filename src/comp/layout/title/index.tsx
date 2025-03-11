import React, {ReactNode} from "react";

type Props = {
	right?: ReactNode | ReactNode[];
	children?: ReactNode;
};

export default function ({children, right}: Props) {
	return (
		<div className="flex w-full items-center mb-5 min-h-13">
			<h4 className="block">{children}</h4>
			<div className="grow flex justify-end">{right}</div>
		</div>
	);
}
