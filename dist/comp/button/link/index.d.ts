import { ReactNode } from "react";
type Props = {
    icon?: string;
    href: string;
    className?: string;
    children?: ReactNode;
    style?: "normal" | "primary";
};
export default function ({ icon, children, href, style, className }: Props): import("react/jsx-runtime").JSX.Element;
export {};
