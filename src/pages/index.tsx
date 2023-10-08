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

export default function Home() {
  const {setDefault, setText, setLink} = CursorController()

  const textEnter = () => setText()
  const textLeave = () => setDefault()
  const textLink = () => setLink()
  
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
      

      <TextDiv>
        <AT type="h1" > Core Team </AT>
        <h3>ADSA Core team</h3>
      </TextDiv>
      <div className="max-w-screen-lg mx-10 h-96 mt-10 text-center md:mx-auto mb-40" >
        {/* <Image src={"/assets/sjcet.jpg"} className="w-full rounded-md" height={1000} width={1000} alt="" /> */}
        <Link href="/execom">
          <div onMouseEnter={textLink} onMouseLeave={textLeave} className="rounded-md flex justify-center w-full h-full items-center p-18 bg-no-repeat bg-cover bg-center" 
            style={{
              backgroundImage: "linear-gradient(360deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.2) 100%), url('/assets/sjcet.jpg')"
            }}>
            <AT type="h1">Meet Our Dream Team</AT>
          </div>
        </Link>
      </div>



      <Downlayout />
    </>
  );
}
