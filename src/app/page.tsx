import {NextPageProps} from "nextjs-tools";
import {TB} from "../comp";

export default function ({}: NextPageProps) {
	return (
		<>
			<h1>table</h1>
			<TB.Link
				className="w-full"
				list={list}
				linker={(v) => `/${v.name}`}
				items={[
					{
						name: "name",
						className: "w-1/3",
						parser: (v) => <>{v.name}</>,
						align: "justify-center",
					},
					{
						name: "name",
						className: "w-2/3",
						parser: (v) => <>{v.name}</>,
						align: "justify-center",
					},
				]}
			/>
		</>
	);
}

const list: {name: string; age: number}[] = [
	{name: "apple", age: 10},
	{name: "banana", age: 11},
	{name: "citron", age: 12},
	{name: "dou", age: 13},
];
