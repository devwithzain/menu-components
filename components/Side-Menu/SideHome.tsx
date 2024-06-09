"use client";
import Nav from "./Nav/Nav";
import { menu } from "@motion";
import { useState } from "react";
import Button from "./Button/Button";
import { AnimatePresence, motion } from "framer-motion";

export default function SideHome() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="fixed right-[50px] top-[50px]">
			<motion.div
				className="bg-[#c9fd74] rounded-[25px] relative"
				variants={menu}
				animate={isActive ? "open" : "closed"}
				initial="closed">
				<AnimatePresence>{isActive && <Nav />}</AnimatePresence>
			</motion.div>
			<Button
				isActive={isActive}
				toggleMenu={() => {
					setIsActive(!isActive);
				}}
			/>
		</div>
	);
}
