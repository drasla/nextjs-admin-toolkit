"use client";
import Button from "@comp/button";
import {ButtonStyles} from "@comp/button/types";
import Modal from "@comp/modal";
import {fnCss, Nullable} from "nextjs-tools";
import React, {MouseEventHandler, ReactNode, useState} from "react";

type Props = {
	form: Nullable<HTMLFormElement>;
	onConfirm: () => void;
	pending: boolean;
	buttonStyle?: ButtonStyles;
	buttonText?: string;
	buttonClassName?: string;
	confirmText?: string;
	cancelText?: string;
	children?: ReactNode;
};

// todo enter key 인식하기
export default function ({
	form,
	onConfirm,
	buttonStyle,
	buttonText,
	buttonClassName,
	confirmText,
	cancelText,
	children,
}: Props) {
	const [open, setOpen] = useState(false);
	buttonText = buttonText || "확인";
	confirmText = confirmText || "확인";
	cancelText = cancelText || "취소";

	const onClickConfirm: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (!form) return;
		form.requestSubmit();
		onConfirm();
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
						onClick={onClickConfirm}>
						{confirmText}
					</Button.Basic>
					<Button.Basic onClick={() => setOpen(false)}>{cancelText}</Button.Basic>
				</div>
			</Modal.Simple>
		</>
	);
}
