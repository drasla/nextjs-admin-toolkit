import {PropsChildren} from "@comp/types";
import {Layout} from "@src";

export default async function ({children}: PropsChildren) {
	return <Layout.HTML>{children}</Layout.HTML>;
}
