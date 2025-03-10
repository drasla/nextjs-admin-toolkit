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
	const debug = fnEnv.client.string("NODE_ENV") === "development";
	let msg = state.error ? state.error.message : "";

	printer = printer || {};
	for (const key in printer) {
		if (msg.includes(key)) {
			msg = printer[key];
		}
	}
	return (
		<p className={fnCss.concat("min-h-12 text-center", className || "")}>
			{msg}
			{debug && state.error && (
				<>
					<br />({state.error.message})
				</>
			)}
		</p>
	);
}
