"use client";
import {fnCss, Nullable} from "nextjs-tools";
import React, {MouseEventHandler, ReactNode, useState} from "react";
import {Button} from "../../button";
import {ButtonStyles} from "../../button/types";
import {Modal} from "../../modal";

type Props = {
	form: Nullable<HTMLFormElement>;
	pending: boolean;
	buttonStyle?: ButtonStyles;
	buttonText?: string;
	buttonClassName?: string;
	confirmText?: string;
	cancelText?: string;
	children?: ReactNode;
};

// todo enter key 인식하기
export default function ({form, buttonStyle, buttonText, buttonClassName, confirmText, cancelText, children}: Props) {
	const [open, setOpen] = useState(false);
	buttonText = buttonText || "확인";
	confirmText = confirmText || "확인";
	cancelText = cancelText || "취소";

	const onConfirm: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.stopPropagation();
		if (!form) return;
		form.requestSubmit();
		setOpen(false);
	};

	return (
		<>
			<Button.Basic
				className={buttonClassName}
				style={buttonStyle}
				onClick={() => setOpen(true)}>
				{buttonText}
			</Button.Basic>
			<Modal.Simple
				disableBackdrop
				disableCloseButton
				open={open}
				onClose={() => setOpen(false)}>
				{children}
				<div className={fnCss.concat("mt-3 grid grid-cols-1 gap-2", "lg:grid-cols-2 lg:gap-4")}>
					<Button.Basic
						style="primary"
						onClick={onConfirm}>
						{confirmText}
					</Button.Basic>
					<Button.Basic onClick={() => setOpen(false)}>{cancelText}</Button.Basic>
				</div>
			</Modal.Simple>
		</>
	);
}
