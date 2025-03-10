import React from "react";

type Props = {
	error?: Error;
};

export default function ({error}: Props) {
	if (!error) return null;
	return <h4>{error.message}</h4>;
}
