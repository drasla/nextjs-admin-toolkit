import {PropsChildren} from "@comp/types";
import {Layout} from "@src";
import {SideNavItems} from "@var";
import React from "react";

export default async function ({children}: PropsChildren) {
	return (
		<Layout.HTML>
			<Layout.TriSections side={SideNavItems}>{children}</Layout.TriSections>
		</Layout.HTML>
	);
}
