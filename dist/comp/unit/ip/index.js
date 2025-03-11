import { jsx as _jsx } from "react/jsx-runtime";
import { Asset } from "../../../asset";
import Base from "../base";
export default function (props) {
    return (_jsx(Base, { ...props, icon: Asset.svg.host }));
}
