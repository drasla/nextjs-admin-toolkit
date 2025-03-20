import {Flat, HTML, Section3} from "@root";
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
								iconSrc: Flat.SubscriptionAlt,
								href: "/button",
							},
							{
								title: "Table",
								iconSrc: Flat.TableLayout,
								href: "/table",
							},
							{
								title: "Value",
								iconSrc: Flat.TextInputLeft,
								href: "/value",
							},
							{
								title: "Modal",
								iconSrc: Flat.WindowRestore,
								href: "/modal",
							},
						],
					},
				]}>
				{children}
			</Section3>
		</HTML>
	);
}
