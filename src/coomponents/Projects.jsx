import BlogApp from '../assets/portfolio/BlogApp.png';
import Events from '../assets/portfolio/Events.png';
import RecipeApp from '../assets/portfolio/RecipeApp.png';
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
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

  const projects =[
    {
        id:1,
        src: RecipeApp,
        demo:"",
        code:""
    },
    {
        id:2,
        src: BlogApp,
        demo:"",
        code:""
    },
    {
        id:3,
        src: Events,
        demo:"",
        code:""
    }
  ]

  const openUrlInNewTab = (url) => {
    window.open(url, '_blank');
  }
  return (
    <div name="projects" className="flex min-h-full bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className=" max-w-screen-lg p-4 pt-24 mx-auto flex flex-col justify-center w-full h-full">
            <div className="">
            <motion.p ref={ref}
            initial="hidden"
            animate={controls}
            variants={animationVariants}
            transition={{ type: "easeIn", duration: 5 }} className="text-4xl font-bold inline border-b-4 border-cyan-500">Projects</motion.p>
            <p className="py-6 text-cyan-500">Check out some of my recent projects</p>
            </div>

            
             <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 px-12">
               { projects.map(({id,src,demo,code}) =>(
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg lg:last-of-type:translate-x-1/2">
                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                        <div className="flex items-center justify-center">
                        <button onClick={() => openUrlInNewTab(demo)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        <button onClick={() => openUrlInNewTab(code)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                        </div>
                    </div>
                ))}
            </div>

        
        </div>
    </div>
  )
}

export default Projects