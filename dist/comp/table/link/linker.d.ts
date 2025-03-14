import { ReactNode } from "react";
type Props = {
    children: ReactNode;
    href: string;
    className?: string;
};
export default function ({ children, href, className }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
