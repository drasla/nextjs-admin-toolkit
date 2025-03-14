import TableBase from "@comp/table/base";
import {TableItem} from "@comp/table/types";
import {fnCss} from "nextjs-tools";
import {ReactNode} from "react";

type Props<T> = {
	items: TableItem<T>[];
	className?: string;
	list: T[];
	emptyMessage?: ReactNode;
};

export default function <T>({items, className, list, emptyMessage}: Readonly<Props<T>>) {
	return (
		<div className={className}>
			<TableBase.Header {...{items}} />
			{list.map((row, key) => (
				<div
					className={fnCss.concat(`flex`, "table-top-border table-content hover")}
					key={key}>
					{<TableBase.Row {...{row, items}} />}
				</div>
			))}
			{list.length === 0 && <TableBase.Empty>{emptyMessage}</TableBase.Empty>}
			<TableBase.Closer />
		</div>
	);
}
