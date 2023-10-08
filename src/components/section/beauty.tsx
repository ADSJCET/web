import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AT, TextDiv } from "../framer-div";

const BeautySJCET = () => {
    return ( <>
    <TextDiv>
        <AT type="h1">Feel the Beauty of SJCET</AT>
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
    </>);
}
 
export default BeautySJCET;