import React from "react";
import {NextPageProps} from "nextjs-tools";
import {Panel, VBase, VId, VIp, VName, VTime} from "@root";

export default function ({}: NextPageProps) {
	return (
		<Panel>
			<h4>Value</h4>
			<div className="grid grid-cols-4 gap-4">
				<VId
					align="justify-start"
					copy>
					Id
				</VId>
				<VIp
					align="justify-start"
					copy>
					123.123.123:2323
				</VIp>
				<VName
					align="justify-start"
					copy>
					Id
				</VName>
				<VTime
					align="justify-start"
					copy>
					2025-01-01T00:00:00
				</VTime>
				<VBase
					align="justify-start"
					copy>
					Id
				</VBase>
			</div>
		</Panel>
	);
}
