import {fnCss} from "nextjs-tools";
import CSS from "../../index.module.scss";

export default function ({className}: {className?: string}) {
	return <div className={fnCss.concat(CSS["table-top-border"], className)}></div>;
}
