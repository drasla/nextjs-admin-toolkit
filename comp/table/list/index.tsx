import {fnCss} from "nextjs-tools";
import {TableBase} from "../base";
import {TableItem} from "../types";

type Props<T> = {
	items: TableItem<T>[];
	className?: string;
	list: T[];
};

export default function <T>({items, className, list}: Readonly<Props<T>>) {
	return (
		<>
			<TableBase.Header {...{items, className}} />
			{list.map((row, key) => (
				<div
					className={fnCss.concat(`flex`, "table-top-border table-content hover", className)}
					key={key}>
					{<TableBase.Row {...{row, items}} />}
				</div>
			))}
			<TableBase.Closer {...{className}} />
		</>
	);
}
