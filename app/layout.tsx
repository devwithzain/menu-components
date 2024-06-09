import "@styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Navigations Components by Zain Ali",
	description: "Navigations Components by Zain Ali",
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
