"use client";
import React, {ReactNode} from "react";
import {redirect} from "next/navigation";

interface Props {
	children: ReactNode;
	href: string;
}

export default function ({children, href}: Readonly<Props>) {
	return (
		<tr
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				redirect(href);
			}}>
			{children}
		</tr>
	);
}
