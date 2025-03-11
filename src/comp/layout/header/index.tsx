"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";

type Props = {
	icon?: string;
	children?: ReactNode;
	href?: string;
};

export default function ({children, href, icon}: Props) {
	const router = useRouter();
	return (
		<div
			className={fnCss.concat("partition-nav-height", "flex items-center font-bold no-drag pl-3 pr-3")}
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
