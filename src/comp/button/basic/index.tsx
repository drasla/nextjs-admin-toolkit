import {ButtonStyles} from "@comp/button/types";
import Image from "next/image";
import {fnCss} from "nextjs-tools";
import React, {MouseEventHandler, ReactNode} from "react";

type Props = {
	icon?: string;
	type?: "submit" | "reset" | "button";
	className?: string;
	children?: ReactNode;
	style?: ButtonStyles;
	disabled?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ({icon, children, className, type, style, disabled, onClick}: Props) {
	style = style || "normal";
	type = type || "button";
	return (
		<button
			{...{onClick, type, disabled}}
			className={fnCss.concat("button flex items-center justify-center", style, className)}>
			{icon && (
				<Image
					className="mr-1"
					src={icon}
					width={20}
					height={20}
					alt={"icon"}
				/>
			)}
			{children}
		</button>
	);
}
