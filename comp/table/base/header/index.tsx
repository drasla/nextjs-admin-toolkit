import {fnCss} from "nextjs-tools";
import CSS from "../../index.module.scss";
import {TableItem} from "../../types";

type Props<T> = {
	items: Pick<TableItem<T>, "name" | "className">[];
	className?: string;
};

export default function <T>({items, className}: Readonly<Props<T>>) {
	return (
		<div className={fnCss.concat(`flex`, CSS["table-top-border"], CSS["row"], className, "font-bold")}>
			{items.map((v, i) => (
				<div
					key={i}
					className={fnCss.concat(
						"p-3 flex font-bold justify-center items-center",
						CSS["table-header"],
						v.className
					)}>
					{v.name}
				</div>
			))}
		</div>
	);
}
