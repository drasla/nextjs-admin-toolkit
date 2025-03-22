"use client";
import {Nullable} from "nextjs-tools";
import React, {ReactNode, useState} from "react";
import {ModalBase} from "../..";

interface Props {
	action: (payload: FormData) => void;
	className?: string;
	children: ReactNode;
	button: (props: ConfirmButtonProps) => ReactNode;
	ask: (props: ConfirmCancelProps) => ReactNode;
	disableBackdrop?: boolean;
	disableEscapeKey?: boolean;
	disableCloseButton?: boolean;
}

interface ConfirmCancelProps {
	confirm: () => void;
	cancel: () => void;
}

interface ConfirmButtonProps {
	open: () => void;
	close: () => void;
}

export default function ({
	className,
	children,
	action,
	button,
	ask,
	disableEscapeKey,
	disableBackdrop,
	disableCloseButton,
}: Readonly<Props>) {
	const [form, setForm] = useState<Nullable<HTMLFormElement>>();
	const [open, setOpen] = useState(false);

	const props: ConfirmCancelProps = {
		confirm: () => {
			form?.requestSubmit();
			setOpen(false);
		},
		cancel: () => {
			setOpen(false);
		},
	};

	return (
		<>
			<form
				ref={setForm}
				className={className}
				action={action}>
				{children}
				{button({
					open: () => {
						if (form?.reportValidity()) setOpen(true);
					},
					close: () => setOpen(false),
				})}
			</form>

			{form && (
				<ModalBase
					disableCloseButton={disableCloseButton}
					disableEscapeKey={disableEscapeKey}
					disableBackdrop={disableBackdrop}
					open={open}
					onClose={() => setOpen(false)}>
					{ask(props)}
				</ModalBase>
			)}
		</>
	);
}
