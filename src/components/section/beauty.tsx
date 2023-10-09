import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { AT, TextDiv } from "../framer-div";
import { Space40 } from "../ui/spacer";

const BeautySJCET = () => {
  return (
    <>
      <Space40 />
      <TextDiv>
        <AT type="h1">Feel the Beauty of SJCET</AT>
        <h3>St. Joseph’s College of Engineering & Technology Palai</h3>
      </TextDiv>
      <Space40 />
      <div className="max-w-screen-2xl flex flex-col px-5 md:grid-cols-4 md:grid min-h-[90vh] md:mx-auto gap-5">
        <div className="md:-translate-y-20 flex flex-col gap-5">
          <Card className="w-full border-0 h-80 md:h-auto" notHover>
            <video className="w-full" autoPlay muted loop>
              <source src="/assets/videos/onmood.mp4" type="video/mp4" />
            </video>
          </Card>

          <Card className="w-full border-0 h-80 md:h-auto flex md:block items-center" notHover>
            <video className="w-full scale-150" autoPlay muted loop>
              <source src="/assets/videos/summit.mp4" type="video/mp4" />
            </video>
          </Card>
        </div>

        <div className="flex flex-col col-span-2 gap-5">
          <div className="flex flex-col gap-5">
            <Card className="w-full">
              <CardHeader> SJCET Palai</CardHeader>
              <CardContent>
                <CardDescription>
                  is an Indian private college managed by the Syro-Malabar
                  Catholic Diocese of Pala, located in Pala, Kerala, India. It
                  is an AICTE approved college offering professional degree
                  programs in engineering and management courses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="w-full h-fit border-0" notHover>
              <video className="w-full" autoPlay muted loop>
                <source src="/assets/videos/christ.mp4" type="video/mp4" />
              </video>
            </Card>
          </div>

          <Card className="w-full border-0" notHover>
            <video className="w-full" autoPlay muted loop>
              <source src="/assets/videos/adsa.mp4" type="video/mp4" />
            </video>
          </Card>

          <div className="flex md:flex-row flex-col gap-5 items-start">
            <Card className="md:w-3/5 border-0" notHover>
              <video className="w-full" autoPlay muted loop>
                <source src="/assets/videos/fresh.mp4" type="video/mp4" />
              </video>
            </Card>

            <Card className="md:w-2/5 border-0 h-80 md:h-auto flex md:block items-center" notHover>
              <video className="w-full" autoPlay muted loop>
                <source src="/assets/videos/silent.mp4" type="video/mp4" />
              </video>
            </Card>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Card className="w-full border-0" notHover>
            <video className="w-full" autoPlay muted loop>
              <source src="/assets/videos/sargam.mp4" type="video/mp4" />
            </video>
          </Card>

          <Card className="w-full border-0 h-80 md:h-auto flex md:block items-center" notHover>
            <video className="w-full" autoPlay muted loop>
              <source src="/assets/videos/college.mp4" type="video/mp4" />
            </video>
          </Card>

          <Card className="hidden md:block">
            <CardHeader>VISION</CardHeader>
            <CardContent>
              <CardDescription>
                Developing into a world-class, pace-setting Institute of
                Engineering and Technology with distinct identity and character,
                meeting the goals and aspirations of the society.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="hidden md:block">
            <CardHeader>MISSION</CardHeader>
            <CardContent>
              <CardDescription>
                To maintain a conducive infrastructure and learning environment
                for world class education.
              </CardDescription>
              <CardDescription>
                To nurture a team of dedicated, competent and research oriented
                faculty.
              </CardDescription>
              <CardDescription>
                To develop students with moral & ethical values, for their
                successful career by offering variety of programmes and
                services.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* <Space40/> */}

        {/* 

      <Card className="sjcetDiv5">
        <CardHeader> AI & DS</CardHeader>
        <CardContent>
            <CardDescription>
            The Department of Artificial Intelligence and Data Science was established in 2020 and is affiliated under APJ Abdul Kalam Technological University (KTU). 
            </CardDescription>
        </CardContent>
      </Card> */}

        {/* <Card className="sjcetDiv4">
        <CardHeader>MISSION</CardHeader>
        <CardContent>
          <CardDescription>
          1. Deliver top-tier education in AI and Data Science.<br/>
          2. Build industry-institute interaction infrastructure for global alignment<br/>
          3. Empower students for global competency, problem-solving, entrepreneurship, and advanced studies.<br/>
          </CardDescription>
        </CardContent>
      </Card> */}
      </div>
    </>
  );
};

export default BeautySJCET;
