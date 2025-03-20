import {Flat} from "../..";
import Base, {Props as BaseProps} from "../base";
import React from "react";

type Props = Pick<BaseProps, "className" | "children" | "align" | "copy" | "ellipsis" | "length">;

export default function (props: Props) {
	return (
		<Base
			{...props}
			iconSrc={Flat.IdBadge}
		/>
	);
}
