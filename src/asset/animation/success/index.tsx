import "./success.scss";
import {CSSProperties} from "react";
import {Flat} from "@root";
import Image from "next/image";

type Props = {
	width?: number;
	height?: number;
	stroke?: number;
	color?: string;
	loop?: boolean;
};

export default function ({width = 120, height = 120, stroke = 6, color = "#15D773", loop = true}: Props) {
	const cx = width / 2;
	const cy = height / 2;
	const r = Math.min(width, height) / 2 - 10;

	const animationCssWrapper = loop ? "draw-svg loop" : "draw-svg";

	return (
		<div className={animationCssWrapper}>
			<svg
				className={"draw-svg"}
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				style={{"--cx": cx, "--cy": cy, "--r": r} as CSSProperties}>
				<circle
					className={"inner-circle"}
					cx={cx}
					cy={cy}
					r={r}
					fill={color}
					strokeWidth="none"
				/>
				<circle
					className={"outer-circle"}
					cx={cx}
					cy={cy}
					r={r}
					fill={color}
					strokeWidth="none"
				/>
				<circle
					className="draw-circle"
					cx={cx}
					cy={cy}
					r={r}
					fill="none"
					stroke={color}
					strokeWidth={stroke}
				/>
				<foreignObject
					x={0}
					y={0}
					width={width}
					height={height}>
					<div className={"check-svg"}>
						<Image
							src={Flat.Check}
							className={"check-svg"}
							width={width}
							height={height}
							alt={"success"}
						/>
					</div>
				</foreignObject>
			</svg>
		</div>
	);
}
