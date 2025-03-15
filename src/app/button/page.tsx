import Widget from "@comp/widget";
import {Asset, Button} from "@src";
import {NextPageProps} from "nextjs-tools";
import React from "react";

const buttonStyles = [
	"primary",
	"secondary",
	"info",
	"success",
	"danger",
	"warning",
	"light",
	"dark",
	"pink",
	"purple",
	"blue",
];

export default function ({}: NextPageProps) {
	return (
		<Widget.Panel>
			<Widget.Title>Buttons</Widget.Title>

			<h4>Button</h4>

			{/*todo 이미지를 넣으면 items-center 가 이상하게 됨, items-baseline 으로 하면 사이즈는 맞는데 이미지가 위쪽으로 틀어짐 이유 알아보기*/}
			<Button.Base iconSrc={Asset.svg.id}>ID</Button.Base>
			<Button.Base>ID</Button.Base>

			<div className="mb-20 mt-5 grid grid-cols-4 gap-4">
				{buttonStyles.map((v, i) => (
					<Button.Base
						key={i}
						className="mr-2"
						buttonStyle={v as any}>
						{v}
					</Button.Base>
				))}
			</div>

			<h4>With icon</h4>
			<div className="mb-20 grid grid-cols-4 gap-4">
				{buttonStyles.map((v, i) => (
					<Button.Base
						iconSrc={Asset.svg.id}
						key={i}
						className="mr-2"
						buttonStyle={v as any}>
						{v}
					</Button.Base>
				))}
			</div>

			<h4>Rounded</h4>
			<div className="mb-20 grid grid-cols-4 gap-4">
				{buttonStyles.map((v, i) => (
					<Button.Base
						key={i}
						buttonShape="pilled"
						className="mr-2"
						buttonCorner="round"
						buttonStyle={v as any}>
						{v}
					</Button.Base>
				))}
			</div>

			<h4>Outlined</h4>
			<div className="mb-20 grid grid-cols-4 gap-4">
				{buttonStyles.map((v, i) => (
					<Button.Base
						key={i}
						buttonShape="outlined"
						className="mr-2"
						buttonStyle={v as any}>
						{v}
					</Button.Base>
				))}
			</div>

			<h4>Rounded outlined</h4>
			<div className="mb-20 grid grid-cols-4 gap-4">
				{buttonStyles.map((v, i) => (
					<Button.Base
						iconSrc={Asset.svg.id}
						key={i}
						buttonShape="outlined"
						buttonCorner="round"
						className="mr-2"
						buttonStyle={v as any}>
						{v}
					</Button.Base>
				))}
			</div>

			<h4>Size</h4>
			<div className="mb-20">
				{["sm", "md", "lg"].map((v, i) => (
					<Button.Base
						key={i}
						iconSrc={Asset.svg.id}
						buttonShape="outlined"
						buttonCorner="round"
						buttonSize={v as any}
						className="mr-2"
						buttonStyle="primary">
						{v}
					</Button.Base>
				))}
			</div>

			<h4>Link</h4>
			<div className="mb-20 grid grid-cols-4 gap-4">
				<Button.Base href="/">HOME</Button.Base>
			</div>

			<h4>Disabled</h4>
			<div className="mb-20 grid grid-cols-4 gap-4">
				{buttonStyles.map((v, i) => (
					<Button.Base
						iconSrc={Asset.svg.id}
						key={i}
						buttonShape="outlined"
						buttonCorner="round"
						className="mr-2"
						buttonStyle={v as any}
						disabled>
						{v}
					</Button.Base>
				))}
			</div>

			<div className="mb-20 grid grid-cols-4 gap-4">
				{buttonStyles.map((v, i) => (
					<Button.Base
						iconSrc={Asset.svg.id}
						key={i}
						className="mr-2"
						buttonStyle={v as any}
						disabled>
						{v}
					</Button.Base>
				))}
			</div>
		</Widget.Panel>
	);
}
