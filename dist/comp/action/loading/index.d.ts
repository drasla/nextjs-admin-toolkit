import { ReactNode } from "react";
type Props = {
    pending: boolean;
    children?: ReactNode;
};
export default function ({ children, pending }: Props): import("react/jsx-runtime").JSX.Element | null;
export {};
