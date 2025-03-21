"use client";
import {fnCss, fnEnv, State} from "nextjs-tools";
import React from "react";

export default function Component({
	state,
	printer,
	className,
}: {
	state: State<unknown, unknown>;
	printer?: Record<string, string>;
	className?: string;
}) {
	className = className || "";
	printer = printer || {};

	if (!state.error) return null;
	
	const debug = fnEnv.client.string("NODE_ENV") === "development";
	let msg = state.error.message;
	for (const key in printer) {
		if (msg.includes(key)) {
			msg = printer[key];
		}
	}

	return (
		<p className={fnCss.concat("text-center text-(--danger)", className)}>
			{msg}
			{debug && state.error && (
				<>
					<br />({state.error.message})
				</>
			)}
		</p>
	);
}
