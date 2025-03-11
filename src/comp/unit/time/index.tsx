import Asset from "@asset";
import Base, {PrintBaseProps} from "@comp/unit/base";
import {DateTime} from "luxon";
import React from "react";

type Props = Pick<PrintBaseProps, "className" | "children" | "align" | "copy" | "ellipsis" | "length"> & {
	timezone?: string;
	hideTime?: boolean;
	hideDate?: boolean;
};

export default function (props: Props) {
	const timezone = props.timezone || "Asia/Seoul";
	const dateFormat = props.hideDate ? "" : "yyyy-MM-dd";
	const timeFormat = props.hideTime ? "" : " (HH:mm:ss)";
	const date = DateTime.fromISO(props.children || "").setZone(timezone);

	return (
		<Base
			{...props}
			children={date.toFormat(`${dateFormat}${timeFormat}`)}
			icon={Asset.svg.time}
		/>
	);
}
