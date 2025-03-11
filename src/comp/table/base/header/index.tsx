import {TableItem} from "@comp/table/types";
import {fnCss} from "nextjs-tools";

type Props<T> = {
	items: Pick<TableItem<T>, "name" | "className">[];
	className?: string;
};

export default function <T>({items, className}: Readonly<Props<T>>) {
	return (
		<div className={fnCss.concat("flex font-bold", "table-top-border table-content", className)}>
			{items.map((v, i) => (
				<div
					key={i}
					className={fnCss.concat("p-3", "table-header text-center", v.className)}>
					{v.name}
				</div>
			))}
		</div>
	);
}
