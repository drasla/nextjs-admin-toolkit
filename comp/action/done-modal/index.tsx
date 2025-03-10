"use client";
import {State} from "nextjs-tools";
import React, {ReactNode, useEffect, useState} from "react";
import Button from "../../button";
import Modal from "../../modal";

type Props<T> = {
	children?: ReactNode;
	buttonText?: string;
	hideButton?: boolean;
	state?: State<unknown, ActionStateDone<T>>;
};

export type ActionStateDone<T> = {
	time: number;
	value: T;
};

// todo enter key 인식하기
export default function <T>({children, state, buttonText, hideButton}: Props<T>) {
	const [open, setOpen] = useState(true);
	const [time, setTime] = useState(0);

	buttonText = buttonText || "확인";

	useEffect(() => {
		if (!state) return;
		if (!state.response) return;
		if (time === state.response.time) return;

		setOpen(true);
		setTime(state.response.time);
	}, [state]);

	if (!state) return null;
	if (!state.response) return null;
	if (!children) return null;

	return (
		<Modal.Simple
			disableBackdrop
			disableCloseButton
			open={open}
			onClose={() => setOpen(false)}>
			{children}
			{!hideButton && (
				<Button.Basic
					className="mt-3 w-full"
					onClick={() => setOpen(false)}>
					{buttonText}
				</Button.Basic>
			)}
		</Modal.Simple>
	);
}
