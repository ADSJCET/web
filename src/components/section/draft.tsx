import Image from "next/image";
import { Card } from "../ui/card";
import { ParallaxText } from "../text-paralax";

const sliderText =
  "text-transparent duration-1000 bg-gradient-to-tr cursor-default text-edge-outline whitespace-nowrap bg-clip-text";

const Paralax = () => {
  return (
    <div className="my-40">
        <ParallaxText baseVelocity={2}>
          <span className={sliderText + " to-blue-600 from-teal-300"}>
            Artificial
          </span>
          Intelligence
        </ParallaxText>
        <ParallaxText baseVelocity={-3}>
          <span className={sliderText + " to-orange-600 from-yellow-400"}>
            Data
          </span>
          Science
        </ParallaxText>
      </div>
  );
};

export default Paralax;
