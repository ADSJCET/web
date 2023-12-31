import { AT, TextDiv } from "@/components/framer-div";
import Image from "next/image";
import { useEffect } from "react";
import { ScrollText } from "../scroll-text-read";
import { CursorController } from "@/lib/cursor-control";
import { Space10, Space40 } from "../ui/spacer";

const content1 = [
  "AI and DS, distinct yet complementary, AI simulates human intelligence",
  "in machines,  while DS extracts insights from data. Together, ",
  "they form an interdisciplinary field spanning engineering, ",
  "statistics, and more. Students learn to design AI and DS ",
  "solutions for real-world challenges, including machine learning,",
  "data visualization, blockchain, and data security. Hence making",
  "this program ideal for promising candidates who could develop ",
  "smart solutions in the era of big data, impacting various fields of humanity",
];

const content2 = [
  "Students in this",
  "field learn how to design and implement AI and DS-based solutions for",
  "engineering and business problems, including machine learning, ",
  "data visualization, semantic web and social network analytics, blockchain",
  "technologies, and data security and privacy. Big data solutions have",
  "changed the way in which business models are built and run.",
];

const content3 = [
"The Department of Artificial Intelligence and ",
"Data Science was established in 2020 ",
"and is affiliated under APJ Abdul Kalam Technological University (KTU).",
"The department is well equipped with modern infrastructure",
"along with highly qualified and experienced faculty team.",
"ADSA was proposed with the objective to organize various activities",
"that consists of drawing the goodness and best out of our own students",
"under the guidance of the well trained faculty members of the department."
];

const AboutSection = () => {
  const {setDefault, setText} = CursorController()
  return (
  <>
        <Space10/>
        <TextDiv>
          <AT type="h1" onMouseEnter={setText} onMouseLeave={setDefault}> About AD Department</AT>
          <h3> Artificial Intelligence & Data Science </h3>
        </TextDiv>
        <Space10/>
        <TextDiv>
          <ScrollText content={content1} />
        </TextDiv>

        <Space10/>
        <TextDiv>
          <ScrollText content={content2} />
        </TextDiv>

        <Space40/>
        <TextDiv>
          <AT type="h1" onMouseEnter={setText} onMouseLeave={setDefault}>About ADSA</AT>
          <h3>Artificial Intelligence & Data Science Students Association</h3>
        </TextDiv>

        <TextDiv>
          <ScrollText content={content3} />
        </TextDiv>
    </>
  );
};

export default AboutSection;
