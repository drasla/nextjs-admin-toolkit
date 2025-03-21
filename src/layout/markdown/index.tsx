import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
	className?: string;
	children?: string;
}

// todo 추후 코드블럭 하이라이터 플러그인 추가하기 remark-prism
// todo 클라이언트에서 렌더링이 애매하게 됨 (파싱이 됬다 안됬다 함)
export default async function ({children, className}: Readonly<Props>) {
	children = children || "";
	children = children.replaceAll("\n", "\r");
	return (
		<div className={className}>
			<Markdown remarkPlugins={[remarkGfm]}>{children}</Markdown>
		</div>
	);
}
