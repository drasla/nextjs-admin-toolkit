import {sampleForm} from "@app/form";
import {AccordionItem} from "@comp/layout/accordion";
import {Asset, Button, Form, Layout, Pager, Table, Unit} from "@src";
import Routers from "@var/routers";
import {NextPageProps} from "nextjs-tools";

export default function ({}: NextPageProps) {
	return (
		<>
			<Layout.Panel>
				<Layout.Title>Title</Layout.Title>
				<Table.Link
					className="mb-4"
					list={list}
					linker={(v) => `/${v.name}`}
					items={[
						{
							name: "name",
							className: "w-1/3",
							parser: (v) => (
								<Unit.Name
									align="justify-start"
									copy>
									{v.name}
								</Unit.Name>
							),
						},
						{
							name: "name",
							className: "w-2/3",
							parser: (v) => <Unit.Ip align="justify-start">{v.name}</Unit.Ip>,
						},
					]}
				/>

				<Pager.Base
					page={30}
					size={20}
					total={1000}
				/>

				<Button.Base iconSrc={Asset.svg.plus}>Button</Button.Base>
				<Button.Base buttonStyle="primary">Button</Button.Base>
				<Form.Input
					{...sampleForm.password}
					label="password"
				/>

				<Form.Input
					{...sampleForm.password}
					label="password"
					readOnly
				/>
			</Layout.Panel>

			<Layout.Panel>
				<Layout.Title>Empty list</Layout.Title>
				<Table.List
					className="mb-4"
					list={[]}
					items={[
						{
							name: "table",
							className: "w-full",
							parser: (_) => <Unit.Id>id</Unit.Id>,
						},
					]}
				/>
			</Layout.Panel>
		</>
	);
}

const list: {name: string; age: number}[] = [
	{name: "apple", age: 10},
	{name: "banana", age: 11},
	{name: "citron", age: 12},
	{name: "dou", age: 13},
];

const items: AccordionItem[] = [
	{
		title: "컴포넌트",
		submenu: [
			{
				title: "홈",
				icon: Asset.svg.name,
				href: Routers.home.prefix,
				prefix: Routers.home.prefix,
			},
			{
				title: "버튼",
				icon: Asset.svg.name,
				href: Routers.button.prefix,
				prefix: Routers.button.prefix,
			},
		],
	},
];
