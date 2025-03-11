import { jsx as _jsx } from "react/jsx-runtime";
import { fnEnv } from "nextjs-tools";
import "../../../scss/index.scss";
export default async function ({ children }) {
    return (_jsx("html", { lang: await fnEnv.server.string("HTML_LANG"), children: _jsx("body", { className: "font-12 lg:font-16", children: children }) }));
}
