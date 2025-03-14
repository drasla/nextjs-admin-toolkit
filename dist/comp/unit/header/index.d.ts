import { PrintBaseProps } from "../../unit/base";
import React from "react";
type Props = Pick<PrintBaseProps, "className" | "children" | "align" | "ellipsis" | "length">;
export default function (props: Props): React.JSX.Element;
export {};
