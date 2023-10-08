import { MoveUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Variants, motion } from 'framer-motion';
import { CursorController } from '@/lib/cursor-control';


export const Cursor = () => {
    const {varient: cursorVariant } = CursorController()
    const [mousePosition, setMousePosition] = useState({ x: -150, y: -150 });
  
    useEffect(() => {
      const mouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
  
      window.addEventListener("mousemove", mouseMove);
  
      return () => {
        window.removeEventListener("mousemove", mouseMove);
      };
    }, []);
  
    const variants = {
      default: {
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        height: "32px",
        width: "32px",
      },
      text: {
        height: 150,
        width: 150,
        x: mousePosition.x - 75,
        y: mousePosition.y - 75,
        background: "white",
        mixBlendMode: "difference",
      },
      link: {
        height: 90,
        width: 90,
        x: mousePosition.x - 75,
        y: mousePosition.y - 75,
        background: "white",
        color: "black",
      }
    };

    return ( 
      <motion.div
        className="cursor"
        variants={variants as Variants}
        animate={cursorVariant}
        >
      <MoveUpRight />
    </motion.div>
     );
  }