import {sampleForm} from "@app/form";
import {AccordionItem} from "@comp/layout/accordion";
import {Asset, Button, Form, Layout, Pager, Table, Unit} from "@src";
import {NextPageProps} from "nextjs-tools";

export default function ({}: NextPageProps) {
	return (
		<Layout.Partition
			side={
				<Layout.Accordion items={items}>
					<Layout.Header
						icon={Asset.svg.bag}
						href={"/"}>
						HQ-API
					</Layout.Header>
				</Layout.Accordion>
			}>
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

				<Table.List
					className="mb-4"
					emptyMessage={""}
					list={[]}
					items={[]}
				/>

				<Button.Basic icon={Asset.svg.plus}>Button</Button.Basic>
				<Button.Basic style="primary">Button</Button.Basic>
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
		</Layout.Partition>
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
		title: "시스템관리",
		submenu: [
			{
				title: "서버",
				icon: Asset.svg.name,
				href: "/server",
				prefix: "/",
			},
			{
				title: "레지스트리",
				icon: Asset.svg.name,
				href: "/registry",
				prefix: "/registry",
			},
		],
	},
];
