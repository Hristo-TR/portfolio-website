import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import Csharp from '../assets/csharp.png';
import asp from '../assets/asp.png';
import MongoDB from '../assets/mongodb.png';
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TechStack = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

const stacks = [
  {
    id:1,
    src:html,
    title:'HTML',
    style: 'shadow-orange-500'
  },
  {
    id:2,
    src:css,
    title:'CSS',
    style: 'shadow-blue-500'
  },
  {
    id:3,
    src:js,
    title:'Javascript',
    style: 'shadow-yellow-500'
  },
  {
    id:4,
    src:react,
    title:'React.js',
    style: 'shadow-cyan-500'
  },
  {
    id:5,
    src:tailwind,
    title:'Tailwind',
    style: 'shadow-cyan-500'
  },
  {
    id:6,
    src:node,
    title:'Node.js',
    style: 'shadow-green-500'
  },
  {
    id:7,
    src:Csharp,
    title:'C#',
    style: 'shadow-purple-500'
  },
  {
    id:8,
    src:asp,
    title:'ASP.NET',
    style: 'shadow-blue-500'
  },
  {
    id:9,
    src:MongoDB,
    title:'MongoDB',
    style: 'shadow-yellow-900'
  }
]

  return (
    <div name="stack" className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-20">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

          <div className="py-8">
            <motion.p ref={ref}
            initial="hidden"
            animate={controls}
            variants={animationVariants}
            transition={{ type: "easeIn", duration: 5 }} className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline">Tech Stack</motion.p>
            <p className="py-6 text-cyan-500">Here are some of the technologies I have worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 shadow-">
           {
            stacks.map(({id,src,title,style}) =>(
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto"/>
              <p className="mt-4">{title}</p>
            </div>
            ))
           }
            
          </div>
        </div>
    </div>
  )
}

export default TechStack