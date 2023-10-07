import { SliderContainer } from "@/components/section/project-slider";
import AboutSection from "@/components/section/about";
import GridSection from "@/components/section/grid";
import HeroSection from "@/components/section/hero";
import { ParallaxText } from "@/components/text-paralax";
import Downlayout from "./down";
import { projects, workshops } from "@/data/images";
import { TextDiv } from "@/components/framer-div";
import { Variant, Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";

const sliderText =
  "text-transparent duration-1000 bg-gradient-to-tr cursor-default text-edge-outline whitespace-nowrap bg-clip-text";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: -150, y: -150 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e:MouseEvent) => {
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
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
      <HeroSection onMouseEnter={textEnter} onMouseLeave={textLeave} />
      <AboutSection />
      <div className="mb-40">
        <ParallaxText baseVelocity={3}>
          Artificial <span className={"text-primary"}>Intelligence</span>
        </ParallaxText>
        <ParallaxText baseVelocity={-3}>
          <span className={"text-primary2"}>Data</span> Science{" "}
        </ParallaxText>
        <ParallaxText baseVelocity={3}>
          Artificial{" "}
          <span className={sliderText + " to-rose from-primary"}>Intelligence</span>
        </ParallaxText>
        <ParallaxText baseVelocity={3}>
          Artificial{" "}
          <span className={sliderText + " to-green-400 from-teal-300"}>
            Intelligence
          </span>
        </ParallaxText>
        <ParallaxText baseVelocity={-3}>
          <span className={sliderText + " to-orange-600 from-yellow-400"}>Data</span>{" "}
          Science{" "}
        </ParallaxText>
      </div>

      <TextDiv>
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="title text-7xl"
        >
          {" "}
          About AI & DS{" "}
        </h1>
        <h3 className="text-zinc-500">
          {" "}
          Artificial Intelligence & Data Science{" "}
        </h3>
      </TextDiv>

      <motion.div
        className="cursor"
        variants={variants as Variants}
        animate={cursorVariant}
      />
      <SliderContainer images={projects} />
      <GridSection />
      <SliderContainer images={workshops} />
      <Downlayout />
    </>
  );
}
