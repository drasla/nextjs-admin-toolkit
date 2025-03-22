"use client";
import Image from "next/image";
import {fnCss} from "nextjs-tools";
import React, {ReactNode, useState} from "react";
import {Flat} from "../../..";
import Accordion, {Props as AccordionProps} from "./accordion";
import Aside from "./aside";

export interface Props extends AccordionProps {
	top?: ReactNode;
}

export default function ({header, asideMenus, top}: Readonly<Props>) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<nav
				className={fnCss.sum(`
					flex items-center top-0
					fixed lg:left-(--width-aside) lg:w-(--width-main) w-full left-0 h-(--height-nav) 
					bg-(--color-background-nav) border-bottom
				`)}>
				<button
					className={fnCss.sum(`ml-2 block lg:hidden p-2 rounded-sm border-all`)}
					onClick={() => setOpen(!open)}>
					<Image
						className="filter-(--light-filter)"
						src={Flat.MenuBurger}
						width={25}
						height={25}
						alt="menu"
					/>
				</button>
				<div className="grow" />
				<div className="text-(--light)">{top}</div>
			</nav>
			<Aside
				open={open}
				onClose={() => setOpen(false)}>
				<Accordion {...{header, asideMenus}} />
			</Aside>
		</>
	);
}
