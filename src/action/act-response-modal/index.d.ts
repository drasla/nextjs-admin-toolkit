import { ReactNode } from "react";
import { State } from "nextjs-tools";
interface Props<T> {
    children?: (props: {
        onClose: () => void;
    }) => ReactNode;
    state?: State<unknown, ActionStateDone<T>>;
}
export type ActionStateDone<T> = {
    time: number;
    value: T;
};
export default function <T>({ state, children }: Readonly<Props<T>>): import("react/jsx-runtime").JSX.Element | null;
export {};
