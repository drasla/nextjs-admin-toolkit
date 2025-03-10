import {fnEnv} from "nextjs-tools";
import {PropsChildren} from "../..";
import "../../index.scss";

export default async function ({children}: PropsChildren) {
	return (
		<html lang={await fnEnv.server.string("HTML_LANG")}>
			<body className="font-12 lg:font-16">{children}</body>
		</html>
	);
}
