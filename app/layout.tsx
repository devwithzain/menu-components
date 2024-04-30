import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Top Side Menu",
	description: "Top Side Menu",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
