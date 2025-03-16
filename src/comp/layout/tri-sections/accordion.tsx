"use client";
import {TriSectionAccordionItem, TriSectionAccordionSubmenu} from "@comp/layout/tri-sections/types";
import Image from "next/image";
import {redirect, usePathname} from "next/navigation";
import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";

type Props = {
	side: TriSectionAccordionItem[];
};

export default function ({side}: Readonly<Props>) {
	const pathname = usePathname();
	return side.map((v, i) => (
		<div
			key={i}
			className="p-2 lg:p-3">
			<Title iconSrc={v.iconSrc}>{v.title}</Title>
			<Submenu pathname={pathname}>{v.submenu}</Submenu>
		</div>
	));
}

function Title({children, iconSrc}: {children?: ReactNode; iconSrc?: string}) {
	return (
		<div className={fnCss.concat("h-8 lg:h-10", "flex items-center font-bold", "tri-sections-side-nav-color")}>
			{iconSrc && (
				<Image
					className="mr-1 no-drag"
					src={iconSrc}
					height={18}
					width={18}
					alt="title"
				/>
			)}
			{children}
		</div>
	);
}

function Submenu({children, pathname}: {children?: TriSectionAccordionSubmenu[]; pathname: string}) {
	children = children || [];
	return children.map((v, i) => (
		<div
			key={i}
			className={fnCss.concat(
				"h-8 lg:h-10 pl-3 pr-3 lg:pl-5 lg:pr-3",
				"flex items-center cursor-pointer",
				"tri-sections-side-nav-color hover",
				pathname.startsWith(v.prefix) ? "active" : ""
			)}
			onClick={(e) => {
				e.stopPropagation();
				redirect(v.href);
			}}>
			{v.iconSrc && (
				<Image
					className="mr-1 no-drag"
					src={v.iconSrc}
					height={18}
					width={18}
					alt="submenu_title"
				/>
			)}
			<div className="grow">{v.title}</div>
			{/*todo 추후 alert 뱃지 가저오는 기능 추가하기*/}
			{/*<div className={fnCss.concat("p-1", "tri-sections-side-nav-alert", v.alertColor || "primary")}>1</div>*/}
		</div>
	));
}
