import {fnCss} from "nextjs-tools";
import React from "react";
import Styles from "../../index.module.scss";
import {TableItem} from "../../types";

type Props<T> = {
	items: Pick<TableItem<T>, "name" | "className" | "parser" | "align">[];
	className?: string;
	row: T;
};

export default function <T>({items, className, row}: Readonly<Props<T>>) {
	return (
		<div className={fnCss.concat(`flex`, Styles["table-top-border"], Styles["row"], Styles["hover"], className)}>
			{items.map((header, i) => (
				<div
					key={i}
					className={fnCss.concat(
						"p-3",
						Styles["table-row"],
						header.className,
						header.align || "justify-center"
					)}>
					{header.parser(row)}
				</div>
			))}
		</div>
	);
}
