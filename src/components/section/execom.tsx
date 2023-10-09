import Link from "next/link";
import { AT, TextDiv } from "../framer-div";
import { CursorController } from "@/lib/cursor-control";

const ExecomIntro = () => {
  const { setDefault, setText, setLink } = CursorController();

  return (
    <>
      <div className="max-w-screen-lg mx-10 h-96 mt-10 text-center md:mx-auto mb-40">
        <Link href="/execom">
          <div
            onMouseEnter={setLink}
            onMouseLeave={setDefault}
            className="rounded-md flex flex-col justify-center w-full h-full items-center p-18 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(360deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.2) 100%), url('/assets/sjcet.jpg')",
            }}
          >
            <AT type="h1">Meet Our Dream Team</AT>
            <h3>ADSA Core team</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ExecomIntro;
