import { PrintBaseProps } from "../base";
type Props = Pick<PrintBaseProps, "className" | "children" | "align" | "copy" | "ellipsis" | "length"> & {
    timezone?: string;
    hideTime?: boolean;
    hideDate?: boolean;
};
export default function (props: Props): import("react/jsx-runtime").JSX.Element;
export {};
