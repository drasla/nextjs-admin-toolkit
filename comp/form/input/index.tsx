"use client";
import {fnCss, HTMLInputModeAttribute} from "nextjs-tools";
import React, {HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, ReactNode, useEffect, useState} from "react";
import CSS from "../index.module.scss";

type Props = {
	label?: ReactNode;
	className?: string;
	hidden?: boolean;
	children?: ReactNode;
	disabled?: boolean;
	required?: boolean;
	name?: string;
	defaultValue?: string;
	type?: HTMLInputTypeAttribute;
	autoComplete?: HTMLInputAutoCompleteAttribute;
	inputMode?: HTMLInputModeAttribute;
	regexp?: string;
	invalidMessage?: string;
	// todo 빈값일 때 처리하는 기능 추가하기
	// emptyValue?: boolean;
};

export default function ({
	label,
	className,
	hidden,
	children,
	disabled,
	required,
	name,
	defaultValue,
	type,
	autoComplete,
	inputMode,
	regexp,
	invalidMessage,
}: Props) {
	const [value, setValue] = useState(defaultValue || "");
	const isValid = new RegExp(regexp || "").test(`${value || ""}`);
	const errMsg = value && !isValid ? invalidMessage || "" : "";

	useEffect(() => {
		setValue(defaultValue || "");
	}, [defaultValue]);

	return (
		<div className={fnCss.concat(className, hidden ? "hidden" : "")}>
			{label && (
				<div className={CSS["label"]}>
					{label}
					{errMsg && <span className="color-warning ml-2">({errMsg})</span>}
				</div>
			)}

			<div className="flex items-center">
				<input
					{...{disabled, required, name, type, autoComplete, inputMode}}
					className={fnCss.concat("grow", errMsg && CSS["wrong"], CSS["input"], CSS["tag"])}
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>

				{children && <div className={"ml-3"}>{children}</div>}
			</div>
		</div>
	);
}
