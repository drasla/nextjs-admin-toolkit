import TableBase from "@comp/table/base";
import Linker from "@comp/table/link/linker";
import {TableItem} from "@comp/table/types";

type Props<T> = {
	items: TableItem<T>[];
	className?: string;
	list: T[];
	linker: (row: T) => string;
};

export default function <T>({items, className, list, linker}: Readonly<Props<T>>) {
	return (
		<>
			<TableBase.Header {...{items, className}} />
			{list.map((row, key) => (
				<Linker
					key={key}
					href={linker(row)}
					className={className}>
					{<TableBase.Row {...{row, items}} />}
				</Linker>
			))}
			<TableBase.Closer className={className} />
		</>
	);
}
