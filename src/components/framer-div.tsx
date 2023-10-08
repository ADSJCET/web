import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

export const TextDiv = ({className, children, ...props}: HTMLAttributes<HTMLDivElement>) => {
    return ( 
        <motion.div 
            initial={{opacity:0, y:200}}
            transition={{ duration: 1 }}
            whileInView={{opacity:100, y:0}}
            viewport={{ once: true }}
            className={cn("max-w-screen-xl mx-auto mt-40 mb-10 text-center", className)}
            // {...props}
            >
                {children}
        </motion.div>
     );
}


export const AT:FC<{type: HTMLTextTags, children:string}> = ({ children, className, type }) => {
  const words = children.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const Slot = motion[type]

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true  }}
      className={cn("flex justify-center flex-wrap gap-2 md:gap-3", className)}
    >
      {words.map((word, i) => {
        const x = Array.from(word)
        return (<span className="flex" key={i}>
          {x.map((letter, i)=>(
            <Slot variants={child} key={i}>
              {letter === " " ? "\u00A0" : letter}
            </Slot>
          ))}
          </span>)
        }
      )}
    </motion.div>
  );
};
