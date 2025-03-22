import React from "react";
import {TableCol} from "../..";

interface Props<T> {
	cols: TableCol<T>[];
}

export default function <T>({cols}: Props<T>) {
	return (
		<thead>
			<tr className="border-top">
				{cols.map((v, key) => (
					<th
						className={v.headerClassName}
						key={key}>
						{v.name}
					</th>
				))}
			</tr>
		</thead>
	);
}
