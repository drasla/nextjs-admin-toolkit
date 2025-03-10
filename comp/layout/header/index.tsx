"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";
import CSS from "../partition/index.module.scss";

type Props = {
	icon?: string;
	children?: ReactNode;
	href?: string;
};

export default function ({children, href, icon}: Props) {
	const router = useRouter();
	return (
		<div
			className={fnCss.concat(CSS["nav-height"], "flex items-center justify-center font-bold no-drag")}
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				if (href) router.push(href);
			}}>
			{icon && (
				<Image
					className="mr-3"
					width={40}
					height={40}
					src={icon}
					alt={"logo"}
				/>
			)}
			<h2 className="cursor-pointer">{children}</h2>
		</div>
	);
}
