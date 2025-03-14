import { PrintBaseProps } from "../../unit/base";
import React from "react";
type Props = Pick<PrintBaseProps, "className" | "children" | "align" | "copy" | "ellipsis" | "length"> & {
    timezone?: string;
    hideTime?: boolean;
    hideDate?: boolean;
};
export default function (props: Props): React.JSX.Element;
export {};
