import {PropsChildren} from "@comp/types";
import {Viewport} from "next";
import {fnEnv} from "nextjs-tools";
// todo tsc-alias 가 자동으로 경로를 변경해주지 않아서 상대경로를 썼음. 해결책 찾아보기
import "../../../../asset/scss/index.scss";

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
