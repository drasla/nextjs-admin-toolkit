import {fnCss} from "nextjs-tools";
import Base from "../base";
import CSS from "../index.module.scss";
import {TableItem} from "../types";

type Props<T> = {
	items: TableItem<T>[];
	className?: string;
	list: T[];
};

export default function <T>({items, className, list}: Readonly<Props<T>>) {
	return (
		<>
			<Base.Header {...{items, className}} />
			{list.map((row, key) => (
				<div
					className={fnCss.concat(`flex`, CSS["table-top-border"], CSS["row"], CSS["hover"], className)}
					key={key}>
					{<Base.Row {...{row, items}} />}
				</div>
			))}
			<Base.Closer {...{className}} />
		</>
	);
}
