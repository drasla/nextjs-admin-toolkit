import Modal from "@comp/modal";
import React, {ReactNode} from "react";

type Props = {
	pending: boolean;
	children?: ReactNode;
};

// todo 로딩이 너무 짧으면 반짝거리는 모양으로 보이게 된다. 1초 정도 대기 후 페이드 인, 페이드 아웃 효과 주기
export default function ({children, pending}: Props) {
	if (!pending) return null;

	return (
		<Modal.Backdrop
			open={true}
			onClose={() => {}}
			disableBackdrop
			disableEscapeKey>
			{children || "로딩중"}
		</Modal.Backdrop>
	);
}
