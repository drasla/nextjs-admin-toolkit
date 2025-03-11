"use client";
import {fnCss} from "nextjs-tools";
import React, {Fragment} from "react";

interface Props {
	buttons?: number;
	page: number;
	size: number;
	total: number;
	onClick?: (page: number) => void;
}

export default function ({buttons, page, size, total, onClick}: Props) {
	buttons = buttons || 3;

	const last = Math.floor(total / size) + (0 < Math.floor(total / size) && 0 < total % size ? 1 : 0);
	const left: number[] = [];
	const right: number[] = [];

	for (let i = 1; i <= buttons; i++) {
		if (0 <= page - i) {
			left.push(page - i);
		}

		if (page + i <= last) {
			right.push(page + i);
		}
	}

	const items = [...left, page, ...right].sort((a, b) => a - b);
	const hasPrev = items.findIndex((v) => v === 0) === -1;
	const hasNext = items.findIndex((v) => v === last) === -1;

	const onNavigate = (page: number) => {
		if (onClick) onClick(page);
	};

	return (
		<div className="flex justify-center items-center no-drag">
			<div
				className={fnCss.concat("pager hover", page === 0 ? "disabled" : "")}
				onClick={() => {
					if (page === 0) return;
					onNavigate(page - 1);
				}}>
				{"<"}
			</div>

			{hasPrev && (
				<Fragment>
					<div
						className="pager hover"
						onClick={() => onNavigate(0)}>
						1
					</div>
					<div className="pager">...</div>
				</Fragment>
			)}

			{items.map((i, key) => (
				<div
					className={fnCss.concat("pager hover", page === i ? "active" : "")}
					key={key}
					onClick={() => {
						if (page === i) return;
						onNavigate(i);
					}}>
					{i + 1}
				</div>
			))}

			{hasNext && (
				<Fragment>
					<div className={fnCss.concat("pager")}>...</div>
					<div
						className="pager hover"
						onClick={() => onNavigate(last + 1)}>
						{last + 1}
					</div>
				</Fragment>
			)}

			<div
				className={fnCss.concat("pager hover", page === last ? "disabled" : "")}
				onClick={() => {
					if (page === last) return;
					onNavigate(page + 1);
				}}>
				{">"}
			</div>
		</div>
	);
}
