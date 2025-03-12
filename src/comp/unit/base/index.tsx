"use client";
import {AlignJustifyCSS} from "@comp/types";
import Image from "next/image";
import {fnCss} from "nextjs-tools";
import React, {MouseEventHandler} from "react";

export type PrintBaseProps = {
	icon?: string;
	className?: string;
	children?: string;
	align?: AlignJustifyCSS;
	copy?: boolean;
	ellipsis?: boolean;
	length?: number;
};

// todo ellipsis 되었을때 전체 내용 툴팁으로 보여주는 기능 추가하기
export default function ({icon, className, children, align, copy, ellipsis, length}: PrintBaseProps) {
	if (!children) return null;
	align = align || "justify-center";
	copy = copy || false;
	ellipsis = ellipsis || false;
	length = length || 15;

	let value = children;
	if (ellipsis) value = length < value.length ? `${value.slice(0, length)}...` : value;
	const onCopy: MouseEventHandler<HTMLDivElement> = (e) => {
		if (!copy) return;
		e.stopPropagation();
		window.navigator.clipboard.writeText(children).catch();
	};

	return (
		<div className={fnCss.concat("flex items-center", "unit-value", align, className)}>
			{icon && (
				<Image
					className={fnCss.concat("mr-1 pt-1/2", "unit-icon")}
					width={18}
					height={18}
					src={icon}
					alt={"id"}
					priority={true}
				/>
			)}
			<div
				className={fnCss.concat(copy && "unit-copy")}
				onClick={onCopy}>
				{value}
			</div>
		</div>
	);
}
