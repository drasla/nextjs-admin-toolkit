import {fnInput} from "nextjs-tools";

export const sampleForm = fnInput.field.form({
	username: fnInput.field.username(),
	password: fnInput.field.password(),
	boolean: fnInput.field.boolean({
		nullable: true,
	}),
});
