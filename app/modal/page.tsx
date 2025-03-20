import React from "react";
import {NextPageProps} from "nextjs-tools";
import {Panel} from "@root";
import Base from "./_comp/base";

export default function ({}: NextPageProps) {
	return (
		<Panel>
			<h4>Modal</h4>
			<Base />
		</Panel>
	);
}
