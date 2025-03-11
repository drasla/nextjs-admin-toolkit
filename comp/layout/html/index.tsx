import {PropsChildren} from "index";
import {fnEnv} from "nextjs-tools";
import "../../../scss/index.scss";

export default async function ({children}: PropsChildren) {
	return (
		<html lang={await fnEnv.server.string("HTML_LANG")}>
			<body className="font-12 lg:font-16">{children}</body>
		</html>
	);
}
