import Layout from "@comp/layout";
import React, {ReactNode} from "react";

export default function ({children}: Readonly<{children?: ReactNode}>) {
	return <Layout.TriSections>{children}</Layout.TriSections>;
}
