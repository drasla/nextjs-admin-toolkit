import Asset from "@comp/asset";
import {TriSectionAccordionItem} from "@comp/layout";
import Routers from "@var/routers";

const SideNavItems: TriSectionAccordionItem[] = [
	{
		title: "UI Component",
		iconSrc: Asset.svg.id,
		submenu: [
			{
				prefix: Routers.button.prefix,
				iconSrc: Asset.svg.id,
				href: Routers.button.prefix,
				title: "Button",
			},
			{
				prefix: Routers.table.prefix,
				iconSrc: Asset.svg.id,
				href: Routers.table.prefix,
				title: "Table",
			},
		],
	},
];

export default SideNavItems;
