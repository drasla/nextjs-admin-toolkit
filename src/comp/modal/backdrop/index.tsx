"use client";
import {fnCss} from "nextjs-tools";
import React, {MouseEventHandler, ReactNode, useCallback, useEffect} from "react";

export type ModalBackdropProps = {
	children?: ReactNode;
	disableEscapeKey?: boolean;
	disableBackdrop?: boolean;
	open: boolean;
	onClose: () => void;
};

export default function Component({open, children, onClose, disableEscapeKey, disableBackdrop}: ModalBackdropProps) {
	const onEscPress = useCallback(
		(e: KeyboardEvent) => {
			if (e.key == "Escape") {
				onClose();
			}
		},
		[onClose]
	);

	const onClick: MouseEventHandler<HTMLDivElement> = () => {
		if (disableBackdrop) return;
		onClose();
	};

	useEffect(() => {
		if (disableEscapeKey) {
			return;
		}

		if (open) {
			window.addEventListener("keydown", onEscPress);
		} else {
			window.removeEventListener("keydown", onEscPress);
		}

		return () => {
			window.removeEventListener("keydown", onEscPress);
		};
	}, [onEscPress, open, disableEscapeKey]);

	if (!children) return null;

	if (!open) return null;

	return (
		<div
			className={fnCss.concat(
				"w-screen h-screen z-100 fixed left-0 top-0",
				"flex items-center justify-center",
				"backdrop-blur-xs backdrop-grayscale-40",
				"modal-background"
			)}
			onClick={onClick}>
			<div
				className={fnCss.concat("pl-0.5 pr-0.5 z-110 pointer-events-auto", "lg:pl-0 lg:pr-0")}
				onClick={(e) => {
					e.stopPropagation();
				}}>
				{children}
			</div>
		</div>
	);
}

Component.__isStatic = true;
