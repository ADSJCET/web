'use client';
import { useEffect, useRef, useState } from 'react';
// import styles from './page.module.scss'
import Image from 'next/image';
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion, MotionValue } from 'framer-motion';

const images = [
  "favicon.ico",
  "favicon.ico",
  "favicon.ico",
  "favicon.ico",
  "favicon.ico",
  "favicon.ico",
  "favicon.ico",
  "favicon.ico",
  "favicon.ico",
  "favicon.ico",
  "favicon.ico",
  "favicon.ico",
]

export default function ProjectSection() {
  
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({width:0, height:0});

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect( () => {
    const lenis = new Lenis()

    const raf = (time:any) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <section className='h-[175vh]'>
      <div className="h-[30vh] bg-black"></div>
      <div ref={gallery} className={"gallery"}>
        <Column images={[images[0], images[1], images[2]]} y={y}/>
        <Column images={[images[3], images[4], images[5]]} y={y2}/>
        <Column images={[images[6], images[7], images[8]]} y={y3}/>
        <Column images={[images[9], images[10], images[11]]} y={y4}/>
      </div>
      <div className="h-[30vh] bg-black"></div>
    </section>
  )
}

const Column = ({images, y}:{images:string[], y:MotionValue<number>}) => {
  return (
    <motion.div 
      className={"column"}
      style={{y}}
      >
      {
        images.map((src:string, i) => {
          return <div key={i} className={""}>
            <Image 
              src={`/${src}`}
              alt='image'
              fill
              className='imageContainer'
            />
          </div>
        })
      }
    </motion.div>
  )
}