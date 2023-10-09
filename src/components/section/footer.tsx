import { FramerMag } from "@/components/framer-mag";
import { Github, Twitter, Instagram, Mail, Globe2 } from "lucide-react";
import Image from "next/image";
import { AT } from "../framer-div";
import { CursorController } from "@/lib/cursor-control";
import Link from "next/link";
import { Button } from "../ui/button";

const Downlayout = () => {
  const {setText, setDefault, setLink} = CursorController()
    return (
      <section className="max-w-screen flex flex-col bg-black border-t py-5">
        <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-evenly py-10">
          <div className="flex flex-col gap-4 p-10">
            <Image onMouseEnter={setText} onMouseLeave={setDefault} className="invert w-40" src={'/assets/adsa-only.svg'} alt="adsa logo" width={'100'} height={"100"}/>
            <h3>Artificial Intelligence & Data Science Students Association</h3>
          </div>
          <div onMouseEnter={setText} onMouseLeave={setDefault} className="flex gap-10 md:gap-20 text-white w-full justify-center h-20 text-3xl">
            <FramerMag className="w-10 h-10">
              <Link href="" className="absolute w-full h-full flex justify-center items-center">
                <Globe2 className="text-inherit"/>
              </Link>
            </FramerMag>
            <FramerMag className="w-10 h-10">
              <Link href="" className="absolute w-full h-full flex justify-center items-center">
                <Github className="text-inherit"/>
              </Link>
            </FramerMag>
            <FramerMag className="w-10 h-10">
              <Link href="https://www.instagram.com/adsa.sjcet/" className="absolute w-full h-full flex justify-center items-center">
                <Instagram className="text-inherit"/>
              </Link>
            </FramerMag>
            <FramerMag className="w-10 h-10">
              <Link href="" className="absolute w-full h-full flex justify-center items-center">
                <Mail className="text-inherit"/>
              </Link>
            </FramerMag>
          </div>
        </div>
          <Button onMouseEnter={setLink} onMouseLeave={setDefault} asChild variant={"link"} className="mx-auto text-white">
              <Link href={'https://x.com/rajatsandeepsen'}>
                  Made with ❤️ by Rajat Sandeep
              </Link>
          </Button>
      </section>
    );
  };
  
  export default Downlayout;
  