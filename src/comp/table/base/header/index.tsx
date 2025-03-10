import {fnCss} from "nextjs-tools";
import Styles from "../../index.module.scss";
import {TableItem} from "../../types";

type Props<T> = {
	items: Pick<TableItem<T>, "name" | "className">[];
	className?: string;
};

export default function <T>({items, className}: Readonly<Props<T>>) {
	return (
		<div className={fnCss.concat(`flex`, Styles["table-top-border"], Styles["row"], className, "font-bold")}>
			{items.map((v, i) => (
				<div
					key={i}
					className={fnCss.concat(
						"p-3 flex font-bold justify-center items-center",
						Styles["table-header"],
						v.className
					)}>
					{v.name}
				</div>
			))}
		</div>
	);
}
