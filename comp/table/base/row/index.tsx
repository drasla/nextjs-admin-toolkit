import {fnCss} from "nextjs-tools";
import React from "react";
import CSS from "../../index.module.scss";
import {TableItem} from "../../types";

type Props<T> = {
	items: Pick<TableItem<T>, "name" | "className" | "parser">[];
	row: T;
};

export default function <T>({items, row}: Readonly<Props<T>>) {
	return items.map((header, i) => (
		<div
			key={i}
			className={fnCss.concat("p-3", CSS["table-row"], header.className)}>
			{header.parser(row)}
		</div>
	));
}
