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
            className={cn("max-w-screen-lg mx-auto mt-40 text-center", className)}
            // {...props}
            >
                {children}
        </motion.div>
     );
}