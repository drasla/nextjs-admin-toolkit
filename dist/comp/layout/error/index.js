import { jsx as _jsx } from "react/jsx-runtime";
export default function ({ error }) {
    if (!error)
        return null;
    return _jsx("h4", { children: error.message });
}
