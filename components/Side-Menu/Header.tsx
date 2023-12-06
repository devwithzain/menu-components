"use client";
import Nav from "./Nav/Nav";
import { menu } from "@motion";
import { useState } from "react";
import Button from "./Button/Button";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="fixed right-[50rem] top-[50rem]">
			<motion.div
				className="w-[480rem] h-[650rem] bg-[#c9fd74] rounded-[25rem] relative"
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
