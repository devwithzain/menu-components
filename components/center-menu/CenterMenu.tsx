"use client";
import gsap from "gsap";
import Image from "next/image";
import { centerMenu } from "@public";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function CenterMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const [isActive, setIsActive] = useState(true);
	const timelineRef = useRef<gsap.core.Timeline>();
	const toggleButtonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		gsap.registerPlugin(CSSRulePlugin);
		const activeItemIndicator = CSSRulePlugin.getRule("#active-index");

		gsap.set("#menu-item p", { y: 225 });

		const timeline = gsap.timeline({ paused: true });

		timeline.to("#overlay", {
			duration: 1.5,
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			ease: "power4.inOut",
		});

		timeline.to(
			"#menu-item p",
			{
				duration: 1.5,
				y: 0,
				stagger: 0.2,
				ease: "power4.out",
			},
			"-=1",
		);

		timeline.to(
			activeItemIndicator,
			{
				width: "100%",
				duration: 1,
				ease: "power4.out",
				delay: 0.5,
			},
			"<",
		);

		timeline.to(
			"#sub-nav",
			{
				bottom: "5%",
				opacity: 1,
				duration: 0.5,
				delay: 0.5,
			},
			"<",
		);

		timelineRef.current = timeline;
	}, []);

	const toggleMenu = () => {
		if (timelineRef.current) {
			if (isOpen) {
				timelineRef.current.reverse();
			} else {
				timelineRef.current.play();
			}
			setIsOpen(!isOpen);
		}
	};

	return (
		<>
			<div className="fixed top-0 left-0 w-full h-full z-0 bg-[#cdc6be] p-[32px] font-CanopeeRegular">
				<div className="mt-[64px] w-full h-full border-[2px] border-[#141412]">
					<Image
						src={centerMenu}
						alt="centerMenu"
						width={800}
						height={400}
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
			<nav className="fixed w-full flex justify-between items-center py-[24px] px-[32px] text-[#cdc6be] mix-blend-difference z-20">
				<div>
					<p className="text-[20px] font-CanopeeRegular text-[#cdc6be]">
						@devwithzain
					</p>
				</div>
				<div className="text-center font-CanopeeRegular">
					<p className="relative top-[3px]">
						<Link
							href="/"
							className="text-[30px] text-[#cdc6be]">
							The Elite Portfolio
						</Link>
					</p>
				</div>
				<div className="flex justify-end">
					<button
						className={`flex justify-center items-center pt-[28px] pr-[32px] pb-[24px] pl-[32px] bg-[#ffffff00] rounded-[4px] outline-none h-[20px] w-[28px] border-none transition-all duration-[0.25] ease-out cursor-pointer before:content-[""] before:w-[40px] before:h-[2px] before:absolute before:bg-white before:will-change-transform before:-translate-y-[3px]
							after:content-[""] after:w-[40px] after:h-[2px] after:absolute after:bg-white after:will-change-transform after:translate-y-[3px] before:transition-all before:duration-[0.3s] before:ease-out after:transition-all after:duration-[0.3s] after:ease-out ${
								isOpen
									? "after:-rotate-45 after:translate-y-0 before:translate-y-0 before:rotate-45 transition-all duration-[0.25] ease-out"
									: "after:-rotate-0  before:rotate-0 transition-all duration-[0.25] ease-out"
							}`}
						onClick={toggleMenu}
						ref={toggleButtonRef}></button>
				</div>
			</nav>
			<div
				className="fixed top-0 left-0 w-full h-screen flex bg-[#141412] will-change-transform"
				style={{
					clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
				}}
				id="overlay">
				<div className="fixed top-0 left-0 w-full h-screen flex gap-[16px] flex-col justify-center items-center text-white">
					<div
						className="flex cursor-pointer"
						style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
						id="menu-item">
						<div>
							<p className="relative text-center font-CanopeeRegular text-[15vw] leading-[80%] will-change-transform transition-all duration-[0.1s] hover:tracking-[6px]">
								<Link
									href="/"
									className="text-[#cdc6be]">
									Index
								</Link>
								<span
									id="active-index"
									className={`${
										isActive &&
										"bg-[#c03f13] absolute w-[0%] h-4 flex top-1/2 -translate-y-1/2"
									}`}
								/>
							</p>
						</div>
					</div>
					<div
						className="flex cursor-pointer"
						style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
						id="menu-item">
						<div>
							<p className="relative text-center font-CanopeeRegular text-[15vw] leading-[80%] will-change-transform transition-all duration-[0.1s] hover:tracking-[6px]">
								<Link
									href="/"
									className="text-[#cdc6be]">
									Work
								</Link>
							</p>
						</div>
					</div>
					<div
						className="flex cursor-pointer"
						style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
						id="menu-item">
						<div>
							<p className="relative text-center font-CanopeeRegular text-[15vw] leading-[80%] will-change-transform transition-all duration-[0.1s] hover:tracking-[6px]">
								<Link
									href="/"
									className="text-[#cdc6be]">
									About
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div
					className="absolute bottom-[2%] left-1/2 -translate-x-1/2 flex gap-[8px] opacity-0"
					id="sub-nav">
					{["Twitter", "Instagram", "Dribble", "Behance"].map((item, index) => (
						<div
							key={index}
							className="flex gap-2 items-center">
							<Link
								href="/"
								className="text-[20px] text-[#cdc6be] font-CanopeeRegular">
								{item}
							</Link>
							<p className="text-[#cdc6be]">.</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
