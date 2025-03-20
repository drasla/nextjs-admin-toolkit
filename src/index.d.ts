import Asset from "./asset";
import Base from "./base";
import Layout from "./layout";
import Widget from "./widget";
import { ReactNode } from "react";
export { Asset, Base, Layout, Widget };
export * from "./asset";
export * from "./base";
export * from "./layout";
export * from "./table";
export * from "./widget";
export type ColorStyle = "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "light" | "dark" | "pink" | "purple" | "blue";
export type TableCol<T> = {
    name: ReactNode;
    parser: (v: T) => ReactNode;
    className: string;
};
