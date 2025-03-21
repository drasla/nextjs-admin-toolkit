"use client";
import React from "react";
import {NextPageProps} from "nextjs-tools";
import {PagerBase, Panel} from "@root";

export default function ({}: NextPageProps) {
	return (
		<Panel>
			<h4>Pager</h4>
			<PagerBase
				buttons={3}
				page={5}
				size={20}
				total={1000}
				onClick={(e, page) => alert(page)}
			/>
		</Panel>
	);
}
