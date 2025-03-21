"use client";
import {ActErrors, ActLoading, ActResponseModal, Button, InputField, InputString, Panel, Title, VId} from "@root";
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
			<form
				action={action}
				className={"grid grid-cols-1 gap-4"}>
				<InputField label="필드">
					<VId>abcd</VId>
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
				<Button type="submit">확인</Button>
			</form>

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
