"use client";
import React, {useState} from "react";
import {Button, ModalBase} from "@root";

interface Props {}

export default function ({}: Readonly<Props>) {
	const [open, onOpen] = useState(false);
	return (
		<>
			<Button
				onClick={(e) => {
					onOpen(true);
				}}>
				Modal(base)
			</Button>

			<ModalBase
				open={open}
				onClose={() => onOpen(false)}>
				<h3 className="mb-3">Modal (base)</h3>
				<Button
					className="w-full"
					onClick={(e) => {
						e.stopPropagation();
						onOpen(false);
					}}>
					Close
				</Button>
			</ModalBase>
		</>
	);
}
