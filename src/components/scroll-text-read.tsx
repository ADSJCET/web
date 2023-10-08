import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate
} from "framer-motion";
import Balancer from 'react-wrap-balancer'

const ContentLine = ({ content }:{content:string}) => {
  const contentRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end center", "start start"]
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);
  const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <span className="text-container" ref={contentRef}>

      <motion.span style={{ clipPath: clipPathVal }} className="highlighted-text" >
          {content}
      </motion.span>

      <span className="static-text " style={{color: "#202020"}}>
        {content}
      </span>
    </span>
  );
};

export const ScrollText = ({ content }:{content:string[]}) => {
  return (
    <div className="text-center">
      <div className="inner">
        <h3 className="text-white">
        
          {/* {content.join(" ")} */}
          {content.map((item) => <ContentLine key={item} content={item} /> )}
      
        </h3>
      </div>
    </div>
  );
};
