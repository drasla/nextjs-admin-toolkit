import Image from "next/image";
import {fnCss} from "nextjs-tools";
import React, {MouseEventHandler, ReactNode} from "react";
import {ButtonStyles} from "../types";

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
			className={fnCss.concat("button", style, className)}>
			{icon && (
				<Image
					className={"mb-3"}
					src={icon}
					width={16}
					height={16}
					alt={"icon"}
				/>
			)}
			{children}
		</button>
	);
}
