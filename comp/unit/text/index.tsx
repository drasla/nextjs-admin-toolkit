import React from "react";
import Base, {PrintBaseProps} from "../base";

type Props = Pick<PrintBaseProps, "className" | "children" | "align" | "copy" | "ellipsis" | "length">;

export default function (props: Props) {
	return <Base {...props} />;
}
