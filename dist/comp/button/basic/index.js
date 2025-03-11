import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { fnCss } from "nextjs-tools";
export default function ({ icon, children, className, type, style, disabled, onClick }) {
    style = style || "normal";
    type = type || "button";
    return (_jsxs("button", { onClick, type, disabled, className: fnCss.concat("button", style, className), children: [icon && (_jsx(Image, { className: "mb-3", src: icon, width: 16, height: 16, alt: "icon" })), children] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcC9idXR0b24vYmFzaWMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEtBQUssTUFBTSxZQUFZLENBQUM7QUFDL0IsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGNBQWMsQ0FBQztBQWFuQyxNQUFNLENBQUMsT0FBTyxXQUFXLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFRO0lBQzFGLEtBQUssR0FBRyxLQUFLLElBQUksUUFBUSxDQUFDO0lBQzFCLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxDQUFDO0lBQ3hCLE9BQU8sQ0FDTixrQkFDTSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFDNUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsYUFDbEQsSUFBSSxJQUFJLENBQ1IsS0FBQyxLQUFLLElBQ0wsU0FBUyxFQUFFLE1BQU0sRUFDakIsR0FBRyxFQUFFLElBQUksRUFDVCxLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsR0FBRyxFQUFFLE1BQU0sR0FDVixDQUNGLEVBQ0EsUUFBUSxJQUNELENBQ1QsQ0FBQztBQUNILENBQUMifQ==