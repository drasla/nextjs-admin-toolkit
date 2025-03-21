import React from "react";
import Button, {Props as BaseProps} from "../button";
import Link from "next/link";

interface Props
	extends Pick<
		BaseProps,
		| "children"
		| "className"
		| "iconSrc"
		| "buttonSize"
		| "buttonColor"
		| "buttonStyle"
		| "buttonCorner"
		| "buttonAlign"
	> {
	href: string;
}

export default function (props: Readonly<Props>) {
	return (
		<Link href={props.href}>
			<Button
				type="button"
				{...props}
			/>
		</Link>
	);
}
