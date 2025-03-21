import React, {ReactNode} from "react";
import "./index.scss";

interface Props {
	children?: ReactNode;
}

export default function ({children}: Readonly<Props>) {
	return <>{children}</>;
}
