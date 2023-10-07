import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate
} from "framer-motion";

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
      <motion.span
        style={{ clipPath: clipPathVal }}
        className="highlighted-text"
        data-text={content}
      />
      <span className="static-text " style={{color: "#202020"}}>{content}</span>
    </span>
  );
};

export const ScrollText = ({ content }:{content:string[]}) => {
  return (
    <div className="text-center">
      <div className="inner">
        <h2>
          {content.map((item) => (
            <ContentLine key={item} content={item} />
          ))}
        </h2>
      </div>
    </div>
  );
};
