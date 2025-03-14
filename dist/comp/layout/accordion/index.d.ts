import { ReactNode } from "react";
type Props = {
    items: AccordionItem[];
    children?: ReactNode;
};
export type AccordionItem = {
    title: ReactNode;
    icon?: string;
    className?: string;
    submenu: AccordionSubmenu[];
};
export type AccordionSubmenu = {
    title: ReactNode;
    className?: string;
    icon: string;
    href: string;
    prefix: string;
};
export default function ({ items, children }: Props): import("react/jsx-runtime").JSX.Element;
export {};
