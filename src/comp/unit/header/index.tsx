import Base, {PrintBaseProps} from "@comp/unit/base";
import {fnCss} from "nextjs-tools";
import React from "react";

type Props = Pick<PrintBaseProps, "className" | "children" | "align" | "ellipsis" | "length">;

export default function (props: Props) {
	return (
		<Base
			{...props}
			className={fnCss.concat(props.className, "font-bold")}
		/>
	);
}
