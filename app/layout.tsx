import {Dazzle, Flat, HTML, Section3} from "@root";
import {NextLayoutProps} from "nextjs-tools";

export default async function ({children}: NextLayoutProps) {
	return (
		<HTML>
			<Section3
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
			</Section3>
		</HTML>
	);
}
