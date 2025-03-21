import React, {ReactNode} from "react";

interface Props {
	children?: ReactNode;
}

export default function ({children}: Readonly<Props>) {
	return <div className="layout-panel">{children}</div>;
}
