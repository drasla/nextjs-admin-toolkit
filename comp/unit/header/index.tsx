import {fnCss} from "nextjs-tools";
import React from "react";
import Base, {PrintBaseProps} from "../base";

type Props = Pick<PrintBaseProps, "className" | "children" | "align" | "ellipsis" | "length">;

export default function (props: Props) {
	return (
		<Base
			{...props}
			className={fnCss.concat(props.className, "font-bold")}
		/>
	);
}
