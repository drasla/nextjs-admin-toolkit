import Layout from "@comp/layout";
import Widget from "@comp/widget";
import {NextPageProps} from "nextjs-tools";
import React from "react";

export default function ({}: NextPageProps) {
	return (
		<Layout.Panel>
			<Widget.Title>Table</Widget.Title>
		</Layout.Panel>
	);
}
