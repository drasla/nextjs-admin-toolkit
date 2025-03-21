import React, {ReactNode} from "react";
import {fnCss} from "nextjs-tools";

interface Props {
	pending: boolean;
	children?: ReactNode;
}

// todo pending 이 true 후 1초 정도 뒤에 배경이 검정으로 나오도록 나중에 수정하기
// 이유 : 너무 자주 깜빡거리게 됨
export default function ({children, pending}: Readonly<Props>) {
	if (!pending) return null;

	return (
		<div
			className={fnCss.concat(
				"w-full h-full z-100 fixed left-0 top-0",
				"flex items-center justify-center",
				"backdrop-blur-xs backdrop-grayscale-40"
				// "bg-(--color-background-modal)"
			)}>
			{children || <div className="text-(--light)">로딩중...</div>}
		</div>
	);
}
