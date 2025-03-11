import {fnCss} from "nextjs-tools";

export default function ({className}: {className?: string}) {
	return <div className={fnCss.concat("table-top-border", className)}></div>;
}
