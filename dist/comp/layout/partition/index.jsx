import { fnCss } from "nextjs-tools";
import React, { Fragment } from "react";
export default async function ({ children, side, top }) {
    return (<Fragment>
			<div className={fnCss.concat("hidden lg:block", "fixed z-1 top-0 left-0 h-screen w-1/5 overflow-hidden overscroll-y-auto", "partition-side-nav")}>
				{side}
			</div>
			<div className={fnCss.concat("fixed z-1 top-0", "w-full left-0 lg:left-1/5 lg:w-4/5", "partition-top-nav")}>
				{top}
			</div>
			<div className={fnCss.concat("left-0 min-h-screen", "lg:absolute lg:left-1/5 lg:w-4/5 p-3", "partition-content")}>
				{children}
			</div>
		</Fragment>);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanN4Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXAvbGF5b3V0L3BhcnRpdGlvbi9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBWSxNQUFNLE9BQU8sQ0FBQztBQVFqRCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFRO0lBQzFELE9BQU8sQ0FDTixDQUFDLFFBQVEsQ0FDUjtHQUFBLENBQUMsR0FBRyxDQUNILFNBQVMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3RCLGlCQUFpQixFQUNqQix5RUFBeUUsRUFDekUsb0JBQW9CLENBQ3BCLENBQUMsQ0FDRjtJQUFBLENBQUMsSUFBSSxDQUNOO0dBQUEsRUFBRSxHQUFHLENBQ0w7R0FBQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLG9DQUFvQyxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FDMUc7SUFBQSxDQUFDLEdBQUcsQ0FDTDtHQUFBLEVBQUUsR0FBRyxDQUNMO0dBQUEsQ0FBQyxHQUFHLENBQ0gsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDdEIscUJBQXFCLEVBQ3JCLHNDQUFzQyxFQUN0QyxtQkFBbUIsQ0FDbkIsQ0FBQyxDQUNGO0lBQUEsQ0FBQyxRQUFRLENBQ1Y7R0FBQSxFQUFFLEdBQUcsQ0FDTjtFQUFBLEVBQUUsUUFBUSxDQUFDLENBQ1gsQ0FBQztBQUNILENBQUMifQ==