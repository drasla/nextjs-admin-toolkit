import {fnCss} from "nextjs-tools";
import Title from "@comp/widget/title";
import Tooltip from "@comp/tooltip";
import {Asset} from "@src";
import Image from "next/image";

export default function () {
	return (
		<>
			<Title children={"Basic Tooltip"} />
			<div className={fnCss.concat("flex justify-center items-center mb-20", "w-full h-60", "border rounded-lg")}>
				<Tooltip.Base text={"기본적으로 툴팁은 bottom-center 에 출력됩니다."}>
					<Image
						src={Asset.svg.bag}
						width={40}
						height={40}
						alt={"bag"}
					/>
				</Tooltip.Base>
			</div>
			<Title children={"Positioned tooltip"} />
			<div className={fnCss.concat("flex justify-center items-center mb-20", "w-full h-60", "border rounded-lg")}>
				<div className={fnCss.concat("relative", "w-120 h-30")}>
					<div className={fnCss.concat("absolute top-0 -left-10")}>
						<Tooltip.Base
							text={"top-left"}
							position={"top-left"}>
							<button>TOP-LEFT</button>
						</Tooltip.Base>
					</div>
					<div className={fnCss.concat("absolute top-0 left-1/2 transform -translate-x-1/2")}>
						<Tooltip.Base
							text={"top-center"}
							position={"top-center"}>
							<button>TOP-CENTER</button>
						</Tooltip.Base>
					</div>
					<div className={fnCss.concat("absolute top-0 -right-10")}>
						<Tooltip.Base
							text={"top-right"}
							position={"top-right"}>
							<button>TOP-RIGHT</button>
						</Tooltip.Base>
					</div>
					<div className={fnCss.concat("absolute top-1/2 -left-10 transform -translate-y-1/2")}>
						<Tooltip.Base
							text={"left"}
							position={"left"}>
							<button>LEFT</button>
						</Tooltip.Base>
					</div>
					<div className={fnCss.concat("absolute bottom-0 -left-10")}>
						<Tooltip.Base
							text={"bottom-left"}
							position={"bottom-left"}>
							<button>BOTTOM-LEFT</button>
						</Tooltip.Base>
					</div>
					<div className={fnCss.concat("absolute bottom-0 left-1/2 transform -translate-x-1/2")}>
						<Tooltip.Base
							text={"bottom-center"}
							position={"bottom-center"}>
							<button>BOTTOM-CENTER</button>
						</Tooltip.Base>
					</div>
					<div className={fnCss.concat("absolute bottom-0 -right-10")}>
						<Tooltip.Base
							text={"bottom-right"}
							position={"bottom-right"}>
							<button>BOTTOM-RIGHT</button>
						</Tooltip.Base>
					</div>
					<div className={fnCss.concat("absolute top-1/2 -right-10 transform -translate-y-1/2")}>
						<Tooltip.Base
							text={"right"}
							position={"right"}>
							<button>RIGHT</button>
						</Tooltip.Base>
					</div>
				</div>
			</div>
		</>
	);
}
