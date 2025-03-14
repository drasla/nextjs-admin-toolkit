import { jsx as _jsx } from "react/jsx-runtime";
import { fnCss } from "nextjs-tools";
export default function ({ items, row }) {
    return items.map((header, i) => (_jsx("div", { className: fnCss.concat("p-3", "table-content", header.className), children: header.parser(row) }, i)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcC90YWJsZS9iYXNlL3Jvdy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFRbkMsTUFBTSxDQUFDLE9BQU8sV0FBYyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQXFCO0lBQzNELE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQy9CLGNBRUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQ2hFLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBRmQsQ0FBQyxDQUdELENBQ04sQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9