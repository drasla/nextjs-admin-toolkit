import Base from "../base";
import {TableItem} from "../types";
import Linker from "./linker";

type Props<T> = {
	items: TableItem<T>[];
	className?: string;
	list: T[];
	linker: (row: T) => string;
};

export default function <T>({items, className, list, linker}: Readonly<Props<T>>) {
	return (
		<>
			<Base.Header {...{items, className}} />
			{list.map((row, key) => (
				<Linker
					key={key}
					href={linker(row)}
					className={className}>
					{<Base.Row {...{row, items}} />}
				</Linker>
			))}
			<Base.Closer className={className} />
		</>
	);
}
