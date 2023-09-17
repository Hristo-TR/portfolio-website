import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
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

  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto  h-full">
            <div className="pb-8 text-center">
                <motion.p ref={ref}
            initial="hidden"
            animate={controls}
            variants={animationVariants}
            transition={{ type: "easeIn", duration: 5 }} className="text-4xl font-bold inline border-b-4 border-cyan-500">Contact me!</motion.p>
                <p className="py-6 text-cyan-500">Submit this form to get in touch:</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/a9e3431a-89d8-43bd-bf1c-b5f0cbe856c5" method="POST" className="flex flex-col w-full md:w-1/2">
                    <input type="text" name="name" placeholder="Enter your name" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <input type="text" name="email" placeholder="Enter your email" className="p-2  my-4  bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <textarea placeholder="Enter your message" name="message" rows="10" className="p-2 rounded-md bg-transparent border-2 text-white focus:outline-none"></textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk!</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact