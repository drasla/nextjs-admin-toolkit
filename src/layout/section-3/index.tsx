import {ReactNode} from "react";
import Widget, {Props as WidgetProps} from "./widget";
import {fnCss} from "nextjs-tools";

interface Props extends WidgetProps {
	children?: ReactNode;
}

export default function ({children, header, asideMenus, top}: Readonly<Props>) {
	return (
		<>
			<Widget {...{header, asideMenus, top}} />
			<main
				className={fnCss.sum(`
				lg:pl-(--width-aside) pt-(--height-nav)
			`)}>
				<div className="p-2 lg:p-3">{children}</div>
			</main>
		</>
	);
}
