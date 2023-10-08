import { CursorController } from "@/lib/cursor-control";
import { AT, TextDiv } from "../framer-div";
import { SliderContainer } from "../ui/project-slider";
import { Space10, Space40 } from "../ui/spacer";
import { acheivements, projects, workshops } from "@/data/images";

const CourosalGroups = () => {
    const {setDefault, setText} = CursorController()

    const textEnter = () => setText()
    const textLeave = () => setDefault()
    return ( <>
        <TextDiv>
        <AT type="h1" onMouseEnter={textEnter} onMouseLeave={textLeave} >
          Engineering Projects
        </AT>
        <h3>Students Project Based Learning</h3>
      </TextDiv>
      <Space10/>
      <SliderContainer autoplay images={projects} />
      <Space40/>

      <TextDiv>
        <AT type="h1" onMouseEnter={textEnter} onMouseLeave={textLeave} >Accadamic Achievements</AT>
        <h3>Students Accadamic Achievements</h3>
      </TextDiv>
      <Space10/>
      <SliderContainer autoplay images={acheivements} />
      <Space40/>

      <TextDiv>
        <AT type="h1" onMouseEnter={textEnter} onMouseLeave={textLeave} >
        Event & Workshops
        </AT>
        <h3>Student Self Hosted Event & Workshops</h3>
      </TextDiv>
      <Space10/>
      <SliderContainer autoplay images={workshops} />
      </>);
}
 
export default CourosalGroups;