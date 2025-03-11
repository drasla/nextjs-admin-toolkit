"use client";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {fnCss} from "nextjs-tools";
import React, {Fragment, ReactNode} from "react";

type Props = {
	items: AccordionItem[];
	children?: ReactNode;
};

export type AccordionItem = {
	title: ReactNode;
	icon?: string;
	className?: string;
	submenu: AccordionSubmenu[];
};

export type AccordionSubmenu = {
	title: ReactNode;
	className?: string;
	icon: string;
	href: string;
	prefix: string;
};

export default function ({items, children}: Props) {
	return (
		<>
			{children}
			{items.map((v, i) => (
				<Fragment key={i}>
					<Title className={v.className}>{v.title}</Title>
					<SubMenus items={v.submenu} />
				</Fragment>
			))}
		</>
	);
}

function SubMenus({items}: {items: AccordionSubmenu[]}) {
	const path = usePathname();
	const router = useRouter();

	return (
		<>
			{items.map((v, i) => {
				const active = path.startsWith(v.prefix || "!");
				return (
					<Fragment key={i}>
						<div className={fnCss.concat("pl-3 pr-3 mb-2 flex items-center h-12", "no-drag")}>
							<div
								className={fnCss.concat(
									"flex w-full h-full items-center pr-3 pl-3",
									v.className,
									"accordion-item",
									active ? "active" : ""
								)}
								onClick={() => router.push(v.href || "!")}>
								<Icon
									active={active}
									size={20}
									value={v.icon}
								/>
								<div>{v.title}</div>
							</div>
						</div>
					</Fragment>
				);
			})}
		</>
	);
}

function Icon({value, active, size}: {value: string; active: boolean; size?: number}) {
	size = size || 20;
	return (
		<Image
			className={fnCss.concat("mr-2", "accordion-icon", active ? "active" : "")}
			src={value}
			alt="logo"
			width={size}
			height={size}
		/>
	);
}

function Title({children, className}: {children?: ReactNode | string; className?: string}) {
	return (
		<>
			<div className="h-4" />
			<h5 className={fnCss.concat("pl-5 font-bold mb-2", "accordion-title", className, "no-drag")}>{children}</h5>
		</>
	);
}
