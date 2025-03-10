import React from "react";
import { PrintBaseProps } from "../base";
type Props = Pick<PrintBaseProps, "className" | "children" | "align" | "ellipsis" | "length">;
export default function (props: Props): React.JSX.Element;
export {};
