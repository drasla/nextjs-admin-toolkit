"use client";
import React, {ReactNode} from "react";
import {fnCss} from "nextjs-tools";

interface Props {
	open: boolean;
	onClose: () => void;
	children?: ReactNode;
}

export default function ({children, open, onClose}: Readonly<Props>) {
	return (
		<>
			{open && (
				<aside
					className={fnCss.sum(`
						lg:hidden fixed top-0 left-0 w-full h-full
						backdrop-blur-xs backdrop-grayscale-40
						bg-(--color-background-modal)
					`)}
					onClick={() => onClose()}>
					<div
						className={fnCss.sum(`
							fixed left-0 top-0 w-4/5 h-full
							overflow-hidden overscroll-y-auto 
							bg-(--color-background-nav)	
							border-right
						`)}>
						{children}
					</div>
				</aside>
			)}
			<aside
				className={fnCss.sum(`
					hidden lg:block
					w-(--width-aside) fixed top-0 left-0 h-full 
					overflow-hidden overscroll-y-auto 
					bg-(--color-background-nav) border-right
				`)}>
				{children}
			</aside>
		</>
	);
}
