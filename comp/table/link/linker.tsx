"use client";
import {useRouter} from "next/navigation";
import {fnCss} from "nextjs-tools";
import {ReactNode} from "react";
import CSS from "../index.module.scss";

type Props = {
	children: ReactNode;
	href: string;
	className?: string;
};

export default function ({children, href, className}: Readonly<Props>) {
	const router = useRouter();
	return (
		<div
			className={fnCss.concat(`flex`, CSS["table-top-border"], CSS["row"], CSS["hover"], className)}
			onClick={(e) => {
				e.stopPropagation();
				e.preventDefault();
				router.push(href);
			}}>
			{children}
		</div>
	);
}
