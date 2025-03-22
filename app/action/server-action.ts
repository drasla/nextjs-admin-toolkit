"use server";
import {fnAction} from "nextjs-tools";
import actionForm from "./form";

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function (_: any, form: FormData) {
	return fnAction.new(form, actionForm, async ({username, password}) => {
		await delay(3000);
		return {
			time: new Date().getTime(),
			value: {
				username,
				password,
			},
		};
	});
}
