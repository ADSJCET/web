import { TextDiv } from "@/components/framer-div";
import Image from "next/image";
import { useEffect } from "react";
import { ScrollText } from "../scroll-text-read";

const content1 = [
  "AI involves creating machines that can simulate human",
  "intelligence processes, while DS focuses on extracting meaningful",
  "information from data to solve real-world problems. Together, AI and",
  "DS comprise a new interdisciplinary field that draws on various",
  "domains, such as engineering science, statistics, cognitive science,",
  "computing, health science, and information science. ",
];

const content2 = [
  "Students in this",
  "field learn how to design and implement AI and DS-based solutions for",
  "engineering and business problems, including machine learning, data",
  "visualization, semantic web and social network analytics, blockchain",
  "technologies, and data security and privacy. Big data solutions have",
  "changed the way in which business models are built and run.",
];

const content3 = [
  "The Department of Artificial intelligence and Data has science is a",
  "newly involved department of this Institution. Education is simply the",
  "soul of a society as it passes from one generation to another.",
  "Commemorating the quote of a famous American civil rights activist,",
  "“A word as to the education of the heart, we don’t believe that this can",
  "be imparted through books, it can only be imparted through the loving",
  "touch of the teacher”, ADSA was proposed with the objective to",
  "organize various activities that consists of drawing the goodness and",
  "best out of our own students under the guidance of the well trained",
  "faculty members of the department.",
];

const AboutSection = () => {
  return (
    <div className="mb-40">
      <div className="flex flex-col justify-center items-center w-screen">
        <TextDiv>
          <h1 className="text-7xl"> About AI & DS </h1>
          <h3 className="text-zinc-500">
            Artificial Intelligence & Data Science
          </h3>
        </TextDiv>
        <TextDiv>
          <ScrollText content={content1} />
        </TextDiv>
        <TextDiv>
          <ScrollText content={content2} />
        </TextDiv>
      </div>
      <div className="flex flex-col justify-center items-center w-screen">
        <TextDiv>
          <h1 className="text-7xl">About ADSA</h1>
          <h3 className="text-zinc-500">Artificial Intelligence & Data Science Students Association</h3>
        </TextDiv>
        <TextDiv>
          <ScrollText content={content3} />
        </TextDiv>
      </div>
    </div>
  );
};

export default AboutSection;
