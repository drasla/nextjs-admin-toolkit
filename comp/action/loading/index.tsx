import React, {ReactNode} from "react";
import Modal from "../../modal/index";

type Props = {
	pending: boolean;
	children?: ReactNode;
};

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
