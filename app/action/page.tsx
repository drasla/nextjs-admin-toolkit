"use client";
import {
	ActErrors,
	ActLoading,
	ActResponseModal,
	Button,
	FormAskConfirm,
	InputField,
	InputString,
	Panel,
	Title,
	VId,
} from "@root";
import {fnAction, NextPageProps} from "nextjs-tools";
import React from "react";
import form from "./form";
import serverAction from "./server-action";

export default function ({}: NextPageProps) {
	const {state, action, pending} = fnAction.use(serverAction, form);
	const {username, password} = state.input;
	return (
		<Panel>
			<Title>Action</Title>
			<FormAskConfirm
				disableBackdrop
				disableCloseButton
				action={action}
				className={"grid grid-cols-1 gap-4"}
				ask={({confirm, cancel}) => (
					<div>
						<h4>확인 모달</h4>
						<div className="grid grid-cols-2 gap-2">
							<Button onClick={confirm}>확인</Button>
							<Button
								buttonStyle="outlined"
								onClick={cancel}>
								취소
							</Button>
						</div>
					</div>
				)}
				button={({open}) => (
					<Button
						type="button"
						onClick={() => open()}>
						확인
					</Button>
				)}>
				<InputField label="필드">
					<VId>12354ABCD</VId>
				</InputField>
				<InputString
					{...form.username}
					label="아이디"
					defaultValue={username}
					required
				/>

				<InputString
					{...form.password}
					label="비밀번호"
					defaultValue={password}
					required
				/>
			</FormAskConfirm>

			<ActLoading pending={pending} />
			<ActErrors state={state} />
			<ActResponseModal state={state}>
				{({onClose}) => (
					<div className="min-w-[200px]">
						<h4 className="mb-5">응답 모달</h4>
						<Button
							className="w-full"
							onClick={onClose}>
							닫기
						</Button>
					</div>
				)}
			</ActResponseModal>
		</Panel>
	);
}
