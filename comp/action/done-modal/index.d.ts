import { State } from "nextjs-tools";
import { ReactNode } from "react";
type Props<T> = {
    children?: ReactNode;
    buttonText?: string;
    hideButton?: boolean;
    state?: State<unknown, ActionStateDone<T>>;
};
export type ActionStateDone<T> = {
    time: number;
    value: T;
};
export default function <T>({ children, state, buttonText, hideButton }: Props<T>): import("react/jsx-runtime").JSX.Element | null;
export {};
