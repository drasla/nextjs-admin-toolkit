import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
import Base from "../base";
export default function (props) {
    return (_jsx(Base, { ...props, className: fnCss.concat(props.className, "font-bold") }));
}
