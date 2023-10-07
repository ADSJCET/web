import { SliderContainer } from "@/components/section/project-slider";
import AboutSection from "@/components/section/about";
import GridSection from "@/components/section/grid";
import HeroSection from "@/components/section/hero";
import { ParallaxText } from "@/components/text-paralax";
import Downlayout from "../components/section";
import { projects, workshops } from "@/data/images";
import { TextDiv } from "@/components/framer-div";
import { Variant, Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Paralax from "@/components/section/draft";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MoveUpRight, Video } from "lucide-react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: -150, y: -150 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: "32px",
      width: "32px",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      background: "white",
      mixBlendMode: "difference",
    },
    link: {
      height: 90,
      width: 90,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      background: "white",
      color: "black",
    }
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const textLink = () => setCursorVariant("link");
  return (
    <>
      <HeroSection onMouseEnter={textEnter} onMouseLeave={textLeave} />

      <TextDiv>
          <h1 className="text-7xl" onMouseEnter={textEnter} onMouseLeave={textLeave}>Feel Beauty of SJCET </h1>
          <h3>St. Joseph’s College of Engineering & Technology Palai</h3>
        </TextDiv>
      <div className="max-w-screen-xl sjcet h-[70vh] mx-auto mt-10 mb-40 !gap-10" >
        <Card className="sjcetDiv1 border-0" notHover>
          <video className="w-full" autoPlay muted loop >
            <source src="/assets/onmood.mp4" type="video/mp4"/>
          </video>
        </Card>
        <Card className="sjcetDiv7 border-0" notHover>
          <video className="w-full -rotate-90 -translate-y-48" autoPlay  muted loop >
            <source src="/assets/christ.mp4" type="video/mp4"/>
          </video>
        </Card>

        <Card className="sjcetDiv2 border-0" notHover>
          <Image src={"/assets/sjcet.jpg"} className="w-auto h-full object-cover" height={1000} width={1000} alt="" />
        </Card>

        <Card className="sjcetDiv3 border-0" notHover>
          <Image src={"/assets/sjcet.jpg"} className="w-auto h-full object-cover" height={1000} width={1000} alt="" />
        </Card>


        <Card className="sjcetDiv8">
          <CardHeader> VISION </CardHeader>
          <CardContent>
              to attain excellence in data science and artificial intelligence
              in order to meet the changing needs of industry and society.
          </CardContent>
        </Card>

        <Card className="sjcetDiv5">
          <CardHeader> AI & DS</CardHeader>
          <CardContent>
              <CardDescription>
              The Department of Artificial Intelligence and Data Science was established in 2020 and is affiliated under APJ Abdul Kalam Technological University (KTU). 
              </CardDescription>
          </CardContent>
        </Card>

        <Card className="sjcetDiv4">
          <CardHeader>MISSION</CardHeader>
          <CardContent>
            <CardDescription>
            1. Deliver top-tier education in AI and Data Science.<br/>
            2. Build industry-institute interaction infrastructure for global alignment<br/>
            3. Empower students for global competency, problem-solving, entrepreneurship, and advanced studies.<br/>
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <AboutSection onMouseEnter={textEnter} onMouseLeave={textLeave} />

      <Paralax/>

      <TextDiv>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-7xl" >
          Projects
        </h1>
        <h3>Project Based Learning</h3>
      </TextDiv>
      <SliderContainer images={projects} />

      <TextDiv>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-7xl" >
          Workshops
        </h1>
        <h3>Event & Workshops Conducted</h3>
      </TextDiv>
      <SliderContainer images={workshops} />

      <TextDiv>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-7xl" > Core Team </h1>
        <h3>ADSA Core team</h3>
      </TextDiv>
      <div className="max-w-screen-lg h-96 mt-10 mx-auto mb-40" >
        {/* <Image src={"/assets/sjcet.jpg"} className="w-full rounded-md" height={1000} width={1000} alt="" /> */}
        <Link href="/execom">
          <div onMouseEnter={textLink} onMouseLeave={textLeave} className="rounded-md flex justify-center w-full h-full items-center p-18 bg-no-repeat bg-cover bg-center" 
            style={{
              backgroundImage: "linear-gradient(360deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.2) 100%), url('/assets/sjcet.jpg')"
            }}>
            <h1 className="text-7xl" > Meet Our Dream Team </h1>
          </div>
        </Link>
      </div>



      <Downlayout />
      <motion.div
        className="cursor"
        variants={variants as Variants}
        animate={cursorVariant}
      >
        <MoveUpRight />
      </motion.div>
    </>
  );
}
