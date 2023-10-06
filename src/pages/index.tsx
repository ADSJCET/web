import { SliderContainer } from '@/components/section/project-slider';
import AboutSection from '@/components/section/about';
import GridSection from '@/components/section/grid';
import HeroSection from '@/components/section/hero';
import { ParallaxText } from '@/components/text-paralax';
import Downlayout from './down';
import { projects, workshops } from "@/data/images";
import { TextDiv } from '@/components/framer-div';

const x = "text-transparent duration-1000 bg-gradient-to-tr cursor-default text-edge-outline whitespace-nowrap bg-clip-text"

export default function Home() {
  return (
	<>
		<HeroSection/>
		<AboutSection/>
		<div className='mb-40'>
			<ParallaxText baseVelocity={3}>Artificial <span className={"text-primary"}>Intelligence</span></ParallaxText>
			<ParallaxText baseVelocity={-3}><span className={"text-primary2"}>Data</span> Science </ParallaxText>
			<ParallaxText baseVelocity={3}>Artificial <span className={x + " to-rose from-primary"}>Intelligence</span></ParallaxText>
			<ParallaxText baseVelocity={3}>Artificial <span className={x + " to-green-400 from-teal-300"}>Intelligence</span></ParallaxText>
			<ParallaxText baseVelocity={-3}><span className={x + " to-orange-600 from-yellow-400"}>Data</span> Science </ParallaxText>
		</div>

		<TextDiv>
          <h1 className="text-7xl"> About AI & DS </h1>
          <h3 className="text-zinc-500">
            Artificial Intelligence & Data Science
          </h3>
        </TextDiv>
		<SliderContainer images={projects}/>
		<GridSection/>
		<SliderContainer images={workshops}/>
		<Downlayout/>
	</>
	);
}
