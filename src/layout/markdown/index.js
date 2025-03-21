import { jsx as _jsx } from "react/jsx-runtime";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default async function ({ children, className }) {
    children = children || "";
    children = children.replaceAll("\n", "\r");
    return (_jsx("div", { className: className, children: _jsx(Markdown, { remarkPlugins: [remarkGfm], children: children }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sUUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sU0FBUyxNQUFNLFlBQVksQ0FBQztBQVNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQWtCO0lBQ3BFLFFBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQzFCLFFBQVEsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzQyxPQUFPLENBQ04sY0FBSyxTQUFTLEVBQUUsU0FBUyxZQUN4QixLQUFDLFFBQVEsSUFBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBRyxRQUFRLEdBQVksR0FDdEQsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9