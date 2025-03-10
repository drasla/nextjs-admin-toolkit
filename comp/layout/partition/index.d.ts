import { ReactNode } from "react";
type Props = {
    children?: ReactNode;
    side?: ReactNode;
    top?: ReactNode;
};
export default function ({ children, side, top }: Props): Promise<import("react/jsx-runtime").JSX.Element>;
export {};
