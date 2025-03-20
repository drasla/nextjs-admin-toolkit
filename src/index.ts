import Asset from "./asset";
import Base from "./base";
import Layout from "./layout";
import Widget from "./widget";

export {Asset, Base, Layout, Widget};

export * from "./asset";

export type ColorStyle =
	| "primary"
	| "secondary"
	| "success"
	| "info"
	| "warning"
	| "danger"
	| "light"
	| "dark"
	| "pink"
	| "purple"
	| "blue";
