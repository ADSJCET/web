import { CursorController } from "@/lib/cursor-control";
import { AT, TextDiv } from "../framer-div";
import { SliderContainer } from "../ui/project-slider";
import { Space40 } from "../ui/spacer";
import { projects, workshops } from "@/data/images";

const CourosalGroups = () => {
    const {setDefault, setText} = CursorController()

    const textEnter = () => setText()
    const textLeave = () => setDefault()
    return ( <>
        <TextDiv>
        <AT type="h1" onMouseEnter={textEnter} onMouseLeave={textLeave} >
          Projects
        </AT>
        <h3>Project Based Learning</h3>
      </TextDiv>
      <SliderContainer images={projects} />
      <Space40/>

      <TextDiv>
        <AT type="h1" onMouseEnter={textEnter} onMouseLeave={textLeave} >
          Workshops
        </AT>
        <h3>Event & Workshops Conducted</h3>
      </TextDiv>
      <SliderContainer images={workshops} />
      </>);
}
 
export default CourosalGroups;