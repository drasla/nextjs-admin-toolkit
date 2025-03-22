"use client";
import {Nullable} from "nextjs-tools";
import React, {ReactNode, useState} from "react";
import {ActLoading, ModalBase} from "../..";

interface Props {
	action: (payload: FormData) => void;
	pending: boolean;
	className?: string;
	children: (props: ConfirmButtonProps) => ReactNode;
	loadingChildren?: ReactNode;
	ask: (props: ConfirmCancelProps) => ReactNode;
	disableBackdrop?: boolean;
	disableEscapeKey?: boolean;
	disableCloseButton?: boolean;
	disableLoadingView?: boolean;
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
	loadingChildren,
	pending,
	action,
	ask,
	disableEscapeKey,
	disableBackdrop,
	disableCloseButton,
	disableLoadingView,
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
				{children({
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

			{!disableLoadingView && <ActLoading pending={pending}>{loadingChildren}</ActLoading>}
		</>
	);
}
