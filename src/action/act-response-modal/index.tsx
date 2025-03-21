"use client";
import React, {ReactNode, useEffect, useState} from "react";
import {State} from "nextjs-tools";
import {ModalBase} from "../..";

interface Props<T> {
	children?: (props: {onClose: () => void}) => ReactNode;
	state?: State<unknown, ActionStateDone<T>>;
}

export type ActionStateDone<T> = {
	time: number;
	value: T;
};

export default function <T>({state, children}: Readonly<Props<T>>) {
	const [open, setOpen] = useState(true);
	const [time, setTime] = useState(0);
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
		<ModalBase
			disableBackdrop
			disableCloseButton
			open={open}
			onClose={() => setOpen(false)}>
			{children({onClose: () => setOpen(false)})}
		</ModalBase>
	);
}
