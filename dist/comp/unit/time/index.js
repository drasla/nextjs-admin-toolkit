import { jsx as _jsx } from "react/jsx-runtime";
import { DateTime } from "luxon";
import { Asset } from "../../../asset";
import Base from "../base";
export default function (props) {
    const timezone = props.timezone || "Asia/Seoul";
    const dateFormat = props.hideDate ? "" : "yyyy-MM-dd";
    const timeFormat = props.hideTime ? "" : " (HH:mm:ss)";
    const date = DateTime.fromISO(props.children || "").setZone(timezone);
    return (_jsx(Base, { ...props, children: date.toFormat(`${dateFormat}${timeFormat}`), icon: Asset.svg.time }));
}
