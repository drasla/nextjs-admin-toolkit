"use client";
import {Nullable} from "nextjs-tools";
import React, {ReactNode, useState} from "react";
import {ActLoading, ModalBase} from "../..";

interface Props {
	action: (payload: FormData) => void;
	pending: boolean;
	className?: string;
	children: (props: ChildrenProps) => ReactNode;
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

interface ChildrenProps {
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

	const askProps: ConfirmCancelProps = {
		confirm: () => {
			form?.requestSubmit();
			setOpen(false);
		},
		cancel: () => {
			setOpen(false);
		},
	};

	const childrenProps: ChildrenProps = {
		open: () => {
			if (form?.reportValidity()) setOpen(true);
		},
		close: () => setOpen(false),
	};

	return (
		<>
			<form
				ref={setForm}
				className={className}
				action={action}>
				{children(childrenProps)}
			</form>

			{form && (
				<ModalBase
					disableCloseButton={disableCloseButton}
					disableEscapeKey={disableEscapeKey}
					disableBackdrop={disableBackdrop}
					open={open}
					onClose={() => setOpen(false)}>
					{ask(askProps)}
				</ModalBase>
			)}

			{!disableLoadingView && <ActLoading pending={pending}>{loadingChildren}</ActLoading>}
		</>
	);
}
