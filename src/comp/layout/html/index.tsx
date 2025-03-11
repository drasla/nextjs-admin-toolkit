import {PropsChildren} from "@comp/types";
import {Viewport} from "next";
import {fnEnv} from "nextjs-tools";
import "@scss/index.scss";
import "../../../index.css";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1.0,
};

export default async function ({children}: PropsChildren) {
	return (
		<html lang={await fnEnv.server.string("HTML_LANG")}>
			<body className="font-12 lg:font-16">{children}</body>
		</html>
	);
}
