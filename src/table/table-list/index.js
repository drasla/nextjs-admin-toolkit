import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Base from "../base";
const { RowBuilder, Colgroup, Thead, Table, RowEmpty } = Base;
export default function ({ className, cols, list, empty }) {
    return (_jsxs(Table, { className: className, children: [_jsx(Colgroup, { cols: cols }), _jsx(Thead, { cols: cols }), _jsxs("tbody", { children: [list.map((row, key) => (_jsx("tr", { children: _jsx(RowBuilder, { cols: cols, value: row }) }, key))), list.length === 0 && _jsx(RowEmpty, { cols: cols, children: empty })] })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sSUFBSSxNQUFNLFNBQVMsQ0FBQztBQVMzQixNQUFNLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQyxHQUFHLElBQUksQ0FBQztBQUU1RCxNQUFNLENBQUMsT0FBTyxXQUFjLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFXO0lBQ25FLE9BQU8sQ0FDTixNQUFDLEtBQUssSUFBQyxTQUFTLEVBQUUsU0FBUyxhQUMxQixLQUFDLFFBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxHQUFJLEVBQ3hCLEtBQUMsS0FBSyxJQUFDLElBQUksRUFBRSxJQUFJLEdBQUksRUFDckIsNEJBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQ3ZCLHVCQUNDLEtBQUMsVUFBVSxJQUNWLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLEdBQUcsR0FDVCxJQUpNLEdBQUcsQ0FLUCxDQUNMLENBQUMsRUFDRCxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFDLFFBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxZQUFHLEtBQUssR0FBWSxJQUN2RCxJQUNELENBQ1IsQ0FBQztBQUNILENBQUMifQ==