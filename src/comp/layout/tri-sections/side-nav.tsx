"use client";
import Button from "@comp/button";
import {animated, useSpringRef, useTransition} from "@react-spring/web";
import {fnCss} from "nextjs-tools";
import React, {Fragment, ReactNode, useEffect, useState} from "react";

type Props = {
	children?: ReactNode;
};

export default function ({children}: Readonly<Props>) {
	const [open, setOpen] = useState(true);
	const fnRef = useSpringRef();
	const fn = useTransition(open, {
		ref: fnRef,
		from: {opacity: 0, left: "-80%"},
		enter: {opacity: 1, left: "0%"},
		leave: {opacity: 0, left: "-80%"},
	});

	useEffect(() => {
		fnRef.start();
	}, [open]);

	return (
		<>
			<Button.Base onClick={() => setOpen(true)}>open</Button.Base>
			{fn(
				(style, value) =>
					value && (
						<div>
							<animated.div
								style={{opacity: style.opacity}}
								className={fnCss.concat(
									"w-full h-full z-100 fixed left-0 top-0",
									"flex items-center justify-center",
									"backdrop-blur-xs backdrop-grayscale-40",
									"modal-background"
								)}
							/>
							<animated.div
								style={{left: style.left}}
								className={fnCss.concat(
									"fixed top-0 h-full w-4/5 z-110",
									"tri-sections-side-nav-background border-right"
								)}>
								<Button.Base onClick={() => setOpen(false)}>close</Button.Base>
							</animated.div>
						</div>
					)
			)}
		</>
	);
}
