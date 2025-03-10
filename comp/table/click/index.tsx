"use client";
import {MouseEventHandler} from "react";
import Base from "../base";
import {TableItem} from "../types";

type Props<T> = {
	items: TableItem<T>[];
	className?: string;
	list: T[];
	onClick: MouseEventHandler<HTMLDivElement>;
};

export default function <T>({items, className, list, onClick}: Readonly<Props<T>>) {
	return (
		<>
			<Base.Header {...{items, className}} />
			{list.map((row, key) => (
				<div
					key={key}
					onClick={onClick}>
					{<Base.Row {...{row, items, className}} />}
				</div>
			))}
		</>
	);
}
