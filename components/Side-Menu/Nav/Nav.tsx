import { motion } from "framer-motion";
import { footerLinks, links } from "@constants";
import { perspective, slideIn } from "@motion";
import Link from "next/link";

export default function Nav() {
	return (
		<div className="flex flex-col justify-between px-[40px] pt-[100px] pb-[50px] h-full">
			<div className="flex gap-[10px] flex-col">
				{links.map((link, i) => {
					const { title, href } = link;
					return (
						<div
							key={`b_${i}`}
							className="perspective-120 perspective-origin-bottom">
							<motion.div
								custom={i}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit">
								<Link
									href={href}
									className="text-black text-[46px]">
									{title}
								</Link>
							</motion.div>
						</div>
					);
				})}
			</div>
			<motion.div className="flex flex-wrap">
				{footerLinks.map((link, i) => {
					const { title, href } = link;
					return (
						<motion.div
							className="w-[50%] mt-[5px] text-[16px]"
							variants={slideIn}
							custom={i}
							initial="initial"
							animate="enter"
							exit="exit"
							key={`f_${i}`}>
							<Link href={href}>{title}</Link>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
}
