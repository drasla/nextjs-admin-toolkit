import { State } from "nextjs-tools";
import React from "react";
export default function Component({ state, printer, className, }: {
    state: State<unknown, unknown>;
    printer?: Record<string, string>;
    className?: string;
}): React.JSX.Element;
