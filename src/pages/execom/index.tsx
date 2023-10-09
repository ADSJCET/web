import { AT, TextDiv } from "@/components/framer-div";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Space10, Space40 } from "@/components/ui/spacer";
import { execom } from "@/data/images";
import { CursorController } from "@/lib/cursor-control";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const { setDefault, setText, setLink } = CursorController();

  const textEnter = () => setText();
  const textLink = () => setLink();
  const textLeave = () => setDefault();
  const collection = execom; //.sort(() => Math.random() - 0.5)
  return (
    <>
      <TextDiv>
        <AT
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="justify-center flex"
          type="h1"
        >
          
          Meet The Dream Team
        </AT>
        <h3>ADSA Core Team 2023-24</h3>
      </TextDiv>
      <Space10 />
      <div
        onMouseEnter={textLink}
        onMouseLeave={textLeave}
        className="mx-auto max-w-screen-2xl px-5 masonry-2-col sm:masonry-3-col lg:p-0 md:masonry-4-col gap-5 [column-fill:_balance]"
      >
        {collection.map((e, i) => (
          <Link href={e.link} key={i}>
            <Card className="mb-6 relative group" notHover>
              <Image
                src={e.img}
                alt={e.name}
                height={400}
                width={400}
                className="w-full h-auto group-hover:scale-110 transition-all duration-700"
              />
              {/* {e.lead && <span className="absolute top-0 left-0 w-20 h-20 flex items-end justify-center bg-gradient-to-r to-blue-600 from-teal-300 text-fuchsia-200 -rotate-45 -translate-x-10 -translate-y-10">LEAD</span>} */}
              <div className="absolute transition-all w-full pt-20 duration-300 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 bottom-0 left-0">
                <CardContent className="whitespace-break-spaces p-3 lg:p-6">
                  <h3 className={e.lead ? "text-white" : "text-white"}>
                    {e.name}
                  </h3>
                  <CardDescription>{e.position}</CardDescription>
                  <CardDescription>{e.year}</CardDescription>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <Space40 />
      <div className="mx-auto max-w-screen-xl flex px-5 gap-5 justify-center items-center">
        <Button variant={"secondary"} className="p-10" asChild>
          <Link href={"/"}>
            <ChevronLeft /> <h4>Back to Home</h4>
          </Link>
        </Button>
        <Button variant={"secondary"} className="p-10" asChild>
          <Link href={"/execom/previous"}>
            <h4>Previous Execom </h4>
            <ChevronRight />
          </Link>
        </Button>
      </div>

      <Space40 />
    </>
  );
};
export default Home;
