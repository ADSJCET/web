import { FramerMag } from "@/components/framer-mag";
import { Github, Twitter, Instagram, Mail } from "lucide-react";
import Image from "next/image";

const Downlayout = () => {
    return (
      <section className="w-screen bg-black border-t py-5">
        <div className="max-w-screen-lg mx-auto flex items-center justify-evenly py-10">
          <div className="flex flex-col gap-4 ">
            <Image className="invert w-40" src={'/adsa-only.svg'} alt="adsa logo" width={'100'} height={"100"}/>
            <h3 className="">Artificial Intelligence & <br/> Data Science Students Association</h3>
          </div>
          <div className="flex gap-20">
            <FramerMag>
              <div className="absolute flex justify-center items-center">
                <Twitter className="text-primary" size={40}/>
              </div>
            </FramerMag>
            <FramerMag>
              <div className="absolute flex justify-center items-center">
                <Github className="text-primary" size={40}/>
              </div>
            </FramerMag>
            <FramerMag>
              <div className="absolute flex justify-center items-center">
                <Instagram className="text-primary" size={40}/>
              </div>
            </FramerMag>
            <FramerMag>
              <div className="absolute flex justify-center items-center">
                <Mail className="text-primary" size={40}/>
              </div>
            </FramerMag>
          </div>
        </div>
        <h5 className="text-center">Made with ❤ by non-tech team</h5>
      </section>
    );
  };
  
  export default Downlayout;
  