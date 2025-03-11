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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9hY3Rpb24vcmVkaXJlY3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sT0FBTyxDQUFDO0FBVy9CLE1BQU0sQ0FBQyxPQUFPLFdBQVcsRUFBQyxLQUFLLEVBQVE7SUFDdEMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEMsSUFBSSxDQUFDLEtBQUs7UUFBRSxPQUFPO0lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUFFLE9BQU87SUFDNUIsSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJO1FBQUUsT0FBTztJQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixPQUFPLElBQUksQ0FBQztBQUNiLENBQUMifQ==