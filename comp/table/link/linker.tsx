"use client";
import {useRouter} from "next/navigation";
import {ReactNode} from "react";

type Props = {
	children: ReactNode;
	href: string;
};

export default function ({children, href}: Readonly<Props>) {
	const router = useRouter();
	return (
		<div
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				router.push(href);
			}}>
			{children}
		</div>
	);
}
