"use client";
import React from "react";
import {fnAction, NextPageProps} from "nextjs-tools";
import {ActErrors, ActLoading, ActResponseModal, Button, InputString, Panel, Title} from "@root";
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
