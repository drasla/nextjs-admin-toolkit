import { fnEnv } from "nextjs-tools";
import "../../index.scss";
export default async function ({ children }) {
    return (<html lang={await fnEnv.server.string("HTML_LANG")}>
			<body className="font-12 lg:font-16">{children}</body>
		</html>);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanN4Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFbkMsT0FBTyxrQkFBa0IsQ0FBQztBQUUxQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVyxFQUFDLFFBQVEsRUFBZ0I7SUFDdkQsT0FBTyxDQUNOLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDbEQ7R0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQ3REO0VBQUEsRUFBRSxJQUFJLENBQUMsQ0FDUCxDQUFDO0FBQ0gsQ0FBQyJ9