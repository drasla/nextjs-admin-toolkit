"use server";
import React from "react";
import {NextPageProps} from "nextjs-tools";
import {Panel, TableLink} from "@root";
import ClientList from "./_comp";

const list: {name: string; age: number; height: number}[] = [
	{name: "a", age: 10, height: 50},
	{name: "b", age: 20, height: 150},
	{name: "c", age: 30, height: 160},
	{name: "d", age: 40, height: 170},
	{name: "e", age: 50, height: 180},
];

export default async function ({}: NextPageProps) {
	return (
		<Panel>
			<h4>Link</h4>
			<TableLink
				className="w-full mb-10"
				list={list}
				cols={[
					{name: "이름", className: "w-1/4", parser: (v) => <>{v.name}</>},
					{name: "나이", className: "w-1/4", parser: (v) => <>{v.age}</>},
					{name: "키", className: "w-2/4", parser: (v) => <>{v.height}</>},
				]}
				linker={(v) => "/table"}
			/>

			<h4>Empty</h4>
			<TableLink
				className="w-full mb-10"
				list={[]}
				cols={[
					{name: "이름", className: "w-1/4", parser: (v) => <></>},
					{name: "나이", className: "w-1/4", parser: (v) => <></>},
					{name: "키", className: "w-2/4", parser: (v) => <></>},
				]}
				linker={(v) => "/table"}
			/>

			<h4>Client component: onClick</h4>
			<ClientList list={list} />
		</Panel>
	);
}
