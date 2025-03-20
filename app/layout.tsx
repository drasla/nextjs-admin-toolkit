import {Base, Dazzle, Flat, Layout} from "@root";
import {NextLayoutProps} from "nextjs-tools";

export default async function ({children}: NextLayoutProps) {
	return (
		<Base.HTML>
			<Layout.Section3
				top={"Top"}
				header={{
					iconSrc: Flat.MenuBurger,
					children: "Title",
					href: "/",
				}}
				asideMenus={[
					{
						title: "UI Components",
						collapsed: true,
						submenus: [
							{
								title: "Button",
								iconSrc: Dazzle.Host,
								href: "/button",
							},
							{
								title: "Table",
								iconSrc: Dazzle.Host,
								href: "/table",
							},
						],
					},
				]}>
				{children}
			</Layout.Section3>
		</Base.HTML>
	);
}
