import { fnCss } from "nextjs-tools";
import React from "react";
export default function ({ children, className }) {
    return (<div className={fnCss.concat("w-full p-3 flex font-bold items-center justify-center", "table-top-border table-content text-center", className)}>
			{children || "내용이 없습니다."}
		</div>);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanN4Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXAvdGFibGUvYmFzZS9lbXB0eS9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEtBQWtCLE1BQU0sT0FBTyxDQUFDO0FBT3ZDLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFRO0lBQ3BELE9BQU8sQ0FDTixDQUFDLEdBQUcsQ0FDSCxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN0Qix1REFBdUQsRUFDdkQsNENBQTRDLEVBQzVDLFNBQVMsQ0FDVCxDQUFDLENBQ0Y7R0FBQSxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQ3pCO0VBQUEsRUFBRSxHQUFHLENBQUMsQ0FDTixDQUFDO0FBQ0gsQ0FBQyJ9