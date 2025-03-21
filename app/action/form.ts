import {fnInput} from "nextjs-tools";

export default fnInput.field.form({
	username: fnInput.field.username(),
	password: fnInput.field.password(),
});
