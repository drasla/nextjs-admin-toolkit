import {Layout, PropsChildren} from "index";

export default async function ({children}: PropsChildren) {
	return <Layout.HTML>{children}</Layout.HTML>;
}
