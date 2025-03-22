"use client";
import {State} from "nextjs-tools";
import React, {ReactNode, useEffect, useState} from "react";
import {ModalBase} from "../..";

interface Props<T> {
	children?: (props: ChildrenProps) => ReactNode;
	state?: State<unknown, ActionStateDone<T>>;
}

interface ChildrenProps {
	close: () => void;
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

	const childrenProps: ChildrenProps = {
		close: () => setOpen(false),
	};

	return (
		<ModalBase
			disableBackdrop
			disableCloseButton
			open={open}
			onClose={() => setOpen(false)}>
			{children(childrenProps)}
		</ModalBase>
	);
}
