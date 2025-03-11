"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
export default function ({ state }) {
    const [time, setTime] = useState(0);
    if (!state)
        return;
    if (!state.response)
        return;
    if (time === state.response.time)
        return;
    setTime(state.response.time);
    redirect(state.response.href);
    return null;
}
