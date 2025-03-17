"use client";

import {TriSectionAccordionItem} from "@comp/layout/tri-sections/types";
import {fnCss} from "nextjs-tools";
import React, {ReactNode, useState} from "react";
import Image from "next/image";
import Accordion from "./accordion";
import {Asset} from "@src";

type Props = {
	side?: TriSectionAccordionItem[];
	header?: ReactNode;
	children?: ReactNode;
};

export default function ({side, header, children}: Readonly<Props>) {
	side = side || [];

	const [isOpen, setIsOpen] = useState(false);

	const handler = {
		toggleSideBar: () => {
			setIsOpen((prev) => !prev);
		},
	};

	return (
		<>
			<div className={"flex"}>
				{/* 사이드바 */}
				<nav
					className={fnCss.concat(
						"fixed top-0 left-0 z-10 md:z-0",
						"w-[var(--theme-sidebar-width)] h-screen p-5 overflow-hidden overscroll-y-auto",
						"themePaperColor border-r themeBorder",
						"transition-transform duration-300 ease transform -translate-x-[var(--theme-sidebar-width)] md:translate-x-0",
						isOpen && "translate-x-0"
					)}>
					<Accordion side={side} />
				</nav>

				<div
					className={fnCss.concat(
						"flex-1",
						"h-full min-h-screen md:ml-[var(--theme-sidebar-width)]",
						"transition-all duration-300 ease"
					)}>
					{/* 헤더 */}
					<div
						className={fnCss.concat("sticky top-0", "w-full pl-5", "border-b themeBorder themePaperColor")}>
						<div className={fnCss.concat("flex items-center", "h-15")}>
							<Image
								className={fnCss.concat("md:hidden mr-5", "cursor-pointer")}
								src={Asset.svg.barsStaggered}
								alt={"bars"}
								width={24}
								height={24}
								onClick={handler.toggleSideBar}
							/>
							{header}
						</div>
					</div>

					{/* 본문 */}
					<main
						className={fnCss.concat(
							"h-full min-h-[calc(100dvh-var(--theme-header-height)-1px)] p-5",
							"themeBackground"
						)}>
						{children}
					</main>
				</div>
			</div>

			{/* 백드롭 */}
			{/* TODO: 백드롭은 자주 사용되는 기능이므로 별도 컴포넌트 분리 고려 */}
			<div
				className={fnCss.concat(
					"fixed md:hidden top-0 left-0",
					"w-screen h-full min-h-screen",
					"transition-opacity duration-300",
					isOpen ? "backdrop-blur-sm" : "opacity-0 pointer-events-none"
				)}
				onClick={handler.toggleSideBar}
			/>
		</>
	);
}
