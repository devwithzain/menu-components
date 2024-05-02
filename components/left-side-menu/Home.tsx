"use client";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

export default function Home() {
	const pathname = usePathname();
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	return (
		<>
			<div className="p-[20px] fixed right-0 z-10">
				<div
					onClick={() => {
						setIsActive(!isActive);
					}}
					className="w-[60px] h-[60px] rounded-full bg-[#455ce9] cursor-pointer flex items-center justify-center relative">
					<div
						className={`w-[50%] h-[1.2px] bg-white absolute top-[50%] ${
							!isActive && "top-[47%]"
						} transform -translate-x-1/2 -translate-y-1/2`}
						style={{
							transform: isActive ? "rotate(45deg)" : "none",
							transition: "transform 0.3s",
						}}
					/>
					<div
						className={`w-[50%] h-[1.2px] bg-white absolute top-[50%] ${
							!isActive && "top-[53%]"
						} transform -translate-x-1/2 -translate-y-1/2`}
						style={{
							transform: isActive ? "rotate(-45deg)" : "none",
							transition: "transform 0.3s",
						}}
					/>
				</div>
			</div>
			<AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
		</>
	);
}
