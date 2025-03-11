import Image from "next/image";
import {fnCss} from "nextjs-tools";
import React from "react";
import {Asset} from "../../../asset";
import Backdrop, {ModalBackdropProps} from "../backdrop";

type Props = {
	disableCloseButton?: boolean;
} & ModalBackdropProps;

export default function ({open, onClose, children, disableEscapeKey, disableBackdrop, disableCloseButton}: Props) {
	if (!open) return null;
	if (!children) return null;

	return (
		<Backdrop
			open={open}
			onClose={onClose}
			{...{
				disableEscapeKey,
				disableBackdrop,
			}}>
			<div className="flex flex-wrap">
				{!disableCloseButton && (
					<div className="w-full pb-2 flex justify-end">
						<Image
							className={fnCss.concat("modal-close", "cursor-pointer")}
							width={30}
							height={30}
							src={Asset.svg.cross}
							alt={"close"}
							onClick={onClose}
						/>
					</div>
				)}
				<div className={fnCss.concat("w-full p-4 rounded-md shadow-2xl", "modal-content")}>{children}</div>
			</div>
		</Backdrop>
	);
}
