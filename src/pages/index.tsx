import { SliderContainer } from "@/components/ui/project-slider";
import AboutSection from "@/components/section/about";
import GridSection from "@/components/section/grid";
import HeroSection from "@/components/section/hero";
import { ParallaxText } from "@/components/text-paralax";
import Downlayout from "../components/section/footer";
import { projects, workshops } from "@/data/images";
import { AT, TextDiv } from "@/components/framer-div";
import Paralax from "@/components/section/draft";
import Image from "next/image";
import Link from "next/link";

import { Space40 } from "@/components/ui/spacer";
import { CursorController } from "@/lib/cursor-control";
import BeautySJCET from "@/components/section/beauty";
import CourosalGroups from "@/components/section/courosal";
import { Example } from "@/components/ui/Example";
import ExecomIntro from "@/components/section/execom";

export default function Home() {
  
  return (
    <>
      <HeroSection />
      <Space40/>

      <BeautySJCET/>
      <Space40/>

      <AboutSection />
      <Space40/>

      <Paralax/>
      <Space40/>

      <CourosalGroups/>
      <Space40/>
      

      <Space40/>
      <ExecomIntro/>
      <Space40/>

      <Downlayout />
    </>
  );
}
