"use client";
import Link from "next/link";
import {ReactNode} from "react";

type Props = {
	children: ReactNode;
	href: string;
};

export default function ({children, href}: Readonly<Props>) {
	return <Link {...{href}}>{children}</Link>;
}
