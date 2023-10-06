import Image from "next/image";
import { Card } from "../ui/card";

const AboutSection = () => {
  return (
    <div className="flex flex-col justify-center w-screen overflow-hidden p-10">
      <h1 className="my-10 text-6xl">About ADSA</h1>
      <div className="aboutSection w-full h-full gap-6 flex flex-col md:grid">
        <Card className="aboutDiv1 p-4">
        <p>
            Artificial Intelligence (AI) and Data Science (DS) are distinct but
            complementary fields that have become increasingly important in
            recent years.AI involves creating machines that can simulate human
            intelligence processes, while DS focuses on extracting meaningful
            information from data to solve real-world problems. Together, AI and
            DS comprise a new interdisciplinary field that draws on various
            domains, such as engineering science, statistics, cognitive science,
            computing, health science, and information science. Students in this
            field learn how to design and implement AI and DS-based solutions
            for engineering and business problems, including machine learning,
            data visualization, semantic web and social network analytics,
            blockchain technologies, and data security and privacy. Big data
            solutions have changed the way in which business models are built
            and run. 
          </p>
        </Card>
        <Card notHover className="aboutDiv2 flex justify-center items-center hover:bg-none">
          <Image className="invert w-full m-0 p-10" src={'/adsa-small.svg'} alt="adsa logo" width={'100'} height={"100"}/>
        </Card>
        <Card className="aboutDiv3 ">
            
        </Card>
        <Card className="aboutDiv4 p-4"> 
        <p>
            Established in 2020 with an initial intake of 60 students, the
            Department of Artificial Intelligence and Data Science offers a
            graduate program that has been approved by the All India Council for
            Technical Education (AICTE) and is affiliated with APJ Abdul Kalam
            Technological University (KTU). The department is equipped with
            state-of-the-art infrastructure and possesses a well-qualified,
            experienced, and dedicated faculty team. The department’s success is
            attributed to the innovative and creative outlook of its students,
            who actively participate in co-curricular activities, such as
            IEEE,and extra-curricular activities, such as sports and social
            events, throughout the academic year. The department also
            facilitates technology-enabled learning,with students actively
            participating in NPTEL and coding/project competitions across the
            country.
          </p>
        </Card>
        <Card className="aboutDiv5 ">  </Card>
        <Card className="aboutDiv6 ">  </Card>
        <Card className="w-full">  </Card>
        <Card className="">  </Card>
        <Card className="">  </Card>
        <Card className="">  </Card>
      </div>
    </div>
  );
};

export default AboutSection;
