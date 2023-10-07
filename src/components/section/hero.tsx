import Image from 'next/image'
import { Inter } from 'next/font/google'

import Link from "next/link";
import React from "react";

const navigation = [
	{ name: "Department", href: "/department" },
	{ name: "Contact", href: "/contact" },
	{ name: "S1", href: "/1" },
	{ name: "S3", href: "/2" },
	{ name: "S5", href: "/3" },
	{ name: "S7", href: "/4" },
];

const inter = Inter({ subsets: ['latin'] })

export default function HeroSection({...props}) {
  return (
		<div className="flex flex-col items-center justify-center w-screen h-screen">
			<nav className="my-16 animate-fade-in">
				<Image src={"/assets/sjcet_typo.png"} className="w-80 opacity-80 rounded-md" height={1000} width={1000} alt="" />
			</nav>
			<div {...props}>
			<div className="w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
				<h1 className="z-10 leading-10 mt-3 text-center md:mt-5 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title sm:text-7xl md:text-8xl lg:text-9xl whitespace-nowrap bg-clip-text ">
					Artificial Intelligence <br/> & Data Science
				</h1>
			<div className="w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			</div>

			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-6xl text-zinc-500 ">
                    Students Association
				</h2>
			</div>
		</div>
	);
}
