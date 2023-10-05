import Image from 'next/image'
import { Inter } from 'next/font/google'

import Link from "next/link";
import React from "react";
import Particles from "@/components/particles";
import { Card } from '@/components/ui/card';

const navigation = [
	{ name: "Department", href: "/department" },
	{ name: "Contact", href: "/contact" },
	{ name: "S1", href: "/1" },
	{ name: "S3", href: "/2" },
	{ name: "S5", href: "/3" },
	{ name: "S7", href: "/4" },
];

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				AD SJCET
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            hehe
          </h2>
			</div>
		</div>
	);
}
