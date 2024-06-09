"use client";
import { gsap } from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { responsiveMenuItem } from "@constants";
import React, { useEffect, useRef, useState } from "react";

export default function ResponsiveMenu() {
	const container = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const tl = useRef<gsap.core.Timeline | null>(null);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useGSAP(
		() => {
			gsap.set("#menu-link-item-holder", { y: 75 });
			tl.current = gsap
				.timeline({ paused: true })
				.to("#menu-overlay", {
					duration: 1.25,
					clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
					ease: "power4.inOut",
				})
				.to("#menu-link-item-holder", {
					y: 0,
					duration: 1,
					stagger: 0.1,
					ease: "power4.out",
					delay: -0.75,
				});
		},
		{ scope: container },
	);

	useEffect(() => {
		if (isMenuOpen) {
			tl.current?.play();
		} else {
			tl.current?.reverse();
		}
	}, [isMenuOpen]);

	return (
		<div
			ref={container}
			className=" font-[TrialSans]">
			<div className="fixed top-0 left-0 w-full p-[32px] sm:p-[20px] xm:p-[20px] flex justify-between z-10 bg-[url('/hero.jpg')] bg-cover bg-center h-screen">
				<div>
					<Link
						className="text-white cursor-pointer text-[14px] uppercase"
						href="/">
						@devwithzain
					</Link>
				</div>
				<div onClick={toggleMenu}>
					<p className="text-white cursor-pointer text-[14px] uppercase">
						Menu
					</p>
				</div>
			</div>
			<div
				className="fixed top-0 left-0 w-full h-screen p-[32px] flex bg-[#c5fb45] z-10"
				style={{
					clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
				}}
				id="menu-overlay">
				<div className="fixed top-0 left-0 w-full p-[32px] flex justify-between items-center z-10">
					<div>
						<Link
							className="text-black cursor-pointer text-[14px] uppercase"
							href="/">
							@devwithzain
						</Link>
					</div>
					<div>
						<p
							className="text-black cursor-pointer text-[14px] uppercase"
							onClick={toggleMenu}>
							Close
						</p>
					</div>
				</div>
				<div
					className="flex flex-[2] items-end cursor-pointer sm:hidden xm:hidden mb-[-40px]"
					onClick={toggleMenu}>
					<p className="text-black cursor-pointer text-[100px]">&#x2715;</p>
				</div>
				<div className="flex flex-[4] flex-col justify-between pt-[32px] sm:pt-[100px] xm:pt-[100px]">
					<div>
						{responsiveMenuItem.map((link, index) => (
							<div
								key={index}
								className="w-max"
								style={{
									clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
								}}>
								<div
									id="menu-link-item-holder"
									className="relative"
									onClick={toggleMenu}>
									<Link
										className="text-black text-[80px] font-normal tracking-[-0.2px] leading-[85%]"
										href={link.href}>
										{link.title}
									</Link>
								</div>
							</div>
						))}
					</div>
					<div className="flex sm:flex-col xm:flex-col gap-6">
						<div className="flex-1 flex flex-col justify-end">
							<Link
								href="/"
								className="text-black cursor-pointer text-[14px] uppercase">
								X &#8599;
							</Link>
							<Link
								href="/"
								className="text-black cursor-pointer text-[14px] uppercase">
								Instagram &#8599;
							</Link>
							<Link
								href="/"
								className="text-black cursor-pointer text-[14px] uppercase">
								LinkedIn &#8599;
							</Link>
							<Link
								href="/"
								className="text-black cursor-pointer text-[14px] uppercase">
								Behance &#8599;
							</Link>
							<Link
								href="/"
								className="text-black cursor-pointer text-[14px] uppercase">
								Dribbble &#8599;
							</Link>
						</div>
						<div className="flex-1 flex flex-col justify-end">
							<p className="text-black cursor-pointer text-[14px] uppercase">
								+92 317 2603532
							</p>
							<p className="text-black cursor-pointer text-[14px] uppercase">
								zainsoftwear11@gmail.com
							</p>
						</div>
					</div>
				</div>
				<div className="flex flex-[4] justify-end items-end sm:hidden xm:hidden">
					<p className="text-black cursor-pointer text-[14px] uppercase">
						View ShowReel
					</p>
				</div>
			</div>
		</div>
	);
}
