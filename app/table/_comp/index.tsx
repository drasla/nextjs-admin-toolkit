"use client";
import {TableClick, TableCol} from "@root";
import React from "react";

interface Props {
	list: ListItem[];
}

type ListItem = {name: string; age: number; height: number};

const cols: TableCol<ListItem>[] = [
	{name: "이름", colClassName: "w-1/4", parser: (v) => <>{v.name}</>},
	{name: "나이", colClassName: "w-1/4", parser: (v) => <>{v.age}</>},
	{name: "키", colClassName: "w-2/4", parser: (v) => <>{v.height}</>},
];

export default function ({list}: Readonly<Props>) {
	return (
		<>
			<TableClick
				className="w-full"
				list={list}
				cols={cols}
				onClick={(e, row) => {
					e.stopPropagation();
					alert(`onClick: ${row.name}`);
				}}
			/>
		</>
	);
}
