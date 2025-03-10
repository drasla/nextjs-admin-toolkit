import Image from "next/image";
import Link from "next/link";
import {fnCss} from "nextjs-tools";
import React, {ReactNode} from "react";
import CSS from "../index.module.scss";

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
			<div className={fnCss.concat(CSS["button"], CSS[style], className, "flex items-center justify-center")}>
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
