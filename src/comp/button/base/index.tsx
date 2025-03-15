"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {fnCss, fnReflect} from "nextjs-tools";
import React, {MouseEventHandler, ReactNode} from "react";

export type Props = {
	iconSrc?: string;
	className?: string;
	children?: ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	type?: ButtonType;
	buttonStyle?: ButtonStyle;
	buttonShape?: ButtonShape;
	buttonCorner?: ButtonCorner;
	buttonAlign?: ButtonAlign;
	buttonSize?: ButtonSize;
	href?: string;
	disabled?: boolean;
};

export const defaultProps: Props = {
	iconSrc: undefined,
	className: undefined,
	children: undefined,
	onClick: undefined,
	href: undefined,
	type: "button",
	buttonShape: "pilled",
	buttonStyle: "primary",
	buttonCorner: "square",
	buttonAlign: "justify-center",
	buttonSize: "md",
	disabled: undefined,
};

type ButtonType = "submit" | "button" | "reset";
type ButtonShape = "pilled" | "outlined";
type ButtonCorner = "square" | "round";
type ButtonAlign = "justify-start" | "justify-end" | "justify-center";
type ButtonStyle =
	| "primary"
	| "secondary"
	| "success"
	| "info"
	| "warning"
	| "danger"
	| "light"
	| "dark"
	| "pink"
	| "purple"
	| "blue";
type ButtonSize = "sm" | "md" | "lg";

export default function (props: Readonly<Props>) {
	const {
		iconSrc,
		children,
		onClick,
		type,
		className,
		buttonStyle,
		buttonAlign,
		buttonShape,
		buttonCorner,
		buttonSize,
		href,
		disabled,
	} = fnReflect.merge(defaultProps, props);

	const router = useRouter();
	return (
		<button
			{...{type, disabled}}
			onClick={(e) => {
				if (onClick) onClick(e);
				else if (href) router.push(href);
			}}
			className={fnCss.concat(
				"button pl-3 pr-3 pt-2 pb-2 no-drag",
				buttonShape,
				buttonStyle,
				buttonCorner,
				buttonSize,
				className,
				disabled && "disabled"
			)}>
			{/* todo items-center 사용하면 이미지를 입력한 버튼과 이미지가 없는 버튼과 위치가 달라짐 items-baseline 으로 하면 이미지가 위쪽으로 치우침.*/}
			<div className={fnCss.concat("flex items-baseline")}>
				{iconSrc && (
					<Image
						className="button-icon mr-2"
						src={iconSrc}
						width={20}
						height={20}
						alt="icon"
					/>
				)}

				<div className={fnCss.concat("flex grow items-center", buttonAlign)}>{children}</div>
			</div>
		</button>
	);
}
