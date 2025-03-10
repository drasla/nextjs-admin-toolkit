import { ReactNode } from "react";
type Props = {
    icon?: string;
    children?: ReactNode;
    href?: string;
};
export default function ({ children, href, icon }: Props): import("react/jsx-runtime").JSX.Element;
export {};
