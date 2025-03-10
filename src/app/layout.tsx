import {NX, PropsChildren} from "../comp";

export default async function ({children}: PropsChildren) {
	return <NX.Root>{children}</NX.Root>;
}
