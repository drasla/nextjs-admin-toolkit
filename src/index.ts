import Asset from "./asset";
import Base from "./base";
import Layout from "./layout";
import Widget from "./widget";
import Value from "./value";
import Modal from "./modal";
import Pager from "./pager";
import Form from "./form";
import Action from "./action";

import {ReactNode} from "react";

export {Asset, Base, Layout, Widget, Value, Modal, Pager, Form, Action};

export * from "./asset";
export * from "./base";
export * from "./layout";
export * from "./table";
export * from "./widget";
export * from "./value";
export * from "./modal";
export * from "./pager";
export * from "./form";
export * from "./action";

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

// table
export type TableCol<T> = {
	name: ReactNode;
	parser: (v: T) => ReactNode;
	className: string;
};
