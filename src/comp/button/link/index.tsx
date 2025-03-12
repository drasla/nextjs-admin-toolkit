import Image from "next/image";
import Link from "next/link";
import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";

type Props = {
	icon?: string;
	href: string;
	className?: string;
	children?: ReactNode;
	style?: "normal" | "primary";
};

export default function ({icon, children, href, style, className}: Props) {
	style = style || "normal";
	return (
		<Link href={href}>
			<div className={fnCss.concat("button flex items-center justify-center", style, className)}>
				{icon && (
					<Image
						className={"mr-1"}
						src={icon}
						width={20}
						height={20}
						alt={"icon"}
					/>
				)}
				{children}
			</div>
		</Link>
	);
}
