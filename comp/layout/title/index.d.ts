import { ReactNode } from "react";
type Props = {
    right?: ReactNode | ReactNode[];
    children?: ReactNode;
};
export default function ({ children, right }: Props): import("react/jsx-runtime").JSX.Element;
export {};
