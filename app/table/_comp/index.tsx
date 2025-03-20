"use client";
import React from "react";
import {TableClick} from "../../../src/table";
import {TableCol} from "../../../src/index";

interface Props {
	list: ListItem[];
}

type ListItem = {name: string; age: number; height: number};

const cols: TableCol<ListItem>[] = [
	{name: "이름", className: "w-1/4", parser: (v) => <>{v.name}</>},
	{name: "나이", className: "w-1/4", parser: (v) => <>{v.age}</>},
	{name: "키", className: "w-2/4", parser: (v) => <>{v.height}</>},
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
