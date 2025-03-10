import React from "react";
import Asset from "../../asset";
import Base, {PrintBaseProps} from "../base";

type Props = Pick<PrintBaseProps, "className" | "children" | "align" | "copy" | "ellipsis" | "length">;

export default function (props: Props) {
	return (
		<Base
			{...props}
			icon={Asset.svg.name}
		/>
	);
}
