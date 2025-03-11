"use client";
import {redirect} from "next/navigation";
import {State} from "nextjs-tools";
import {useState} from "react";

type Props = {
	state?: State<unknown, ActionStateRedirect>;
};

export type ActionStateRedirect = {
	time: number;
	href: string;
};

export default function ({state}: Props) {
	const [time, setTime] = useState(0);
	if (!state) return;
	if (!state.response) return;
	if (time === state.response.time) return;
	setTime(state.response.time);
	redirect(state.response.href);
	return null;
}
