import { ReactNode } from "react";
type Props = {
    children: ReactNode;
    href: string;
};
export default function ({ children, href }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
