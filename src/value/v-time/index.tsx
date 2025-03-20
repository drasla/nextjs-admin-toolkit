import {Flat} from "../..";
import Base, {Props as BaseProps} from "../v-base";
import React from "react";
import {DateTime} from "luxon";

type Props = Pick<BaseProps, "className" | "align" | "copy"> & {
	children: string;
	timezone?: string;
	hideTime?: boolean;
	hideDate?: boolean;
	format?: string;
};

export default function ({className, align, copy, timezone, hideTime, hideDate, format, children}: Readonly<Props>) {
	timezone = timezone || "Asia/Seoul";
	if (!format) {
		const dateFormat = hideDate ? "" : "yyyy-MM-dd";
		const timeFormat = hideTime ? "" : " (a HH:mm)";
		format = `${dateFormat}${timeFormat}`;
	}

	return (
		<Base
			{...{className, align, copy}}
			iconSrc={Flat.Clock}>
			{DateTime.fromISO(children).setZone(timezone).toFormat(format)}
		</Base>
	);
}
