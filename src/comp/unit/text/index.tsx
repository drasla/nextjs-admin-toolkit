import Base, {PrintBaseProps} from "@comp/unit/base";
import React from "react";

type Props = Pick<PrintBaseProps, "className" | "children" | "align" | "copy" | "ellipsis" | "length">;

export default function (props: Props) {
	return <Base {...props} />;
}
