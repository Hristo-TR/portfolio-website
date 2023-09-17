import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import heroImage from "../assets/profilePic.jpg";

const About = () => {
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
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-mountcolor to-black via-mountcolor text-white absolute top-full"
    >
      <div className="max-w-screen-lg mx-auto flex lg:flex-row flex-col justify-center w-full h-full z-40 mt-20 text-justify">
        <div className="lg:w-1/4 z-40 mt-12 text-center lg:text-left">
          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={animationVariants}
            transition={{ type: "easeIn", duration: 5 }}
            className="text-4xl font-bold inline border-b-4 border-cyan-500"
          >
            About me
          </motion.p>
          <p className="text-xl mt-6 italic px-8 lg:px-0">
            A hardworking student and a passionate developer
          </p>

          <img
            src={heroImage}
            alt="my profile"
            className="rounded-full mx-auto lg:mt-20 mt-4 border-l-8 border-b-8 border-double border-cyan-500 w-1/2 lg:w-full"
          />
        </div>
        <div className="lg:w-3/4 z-40 flex flex-col items-end">
          <p className="lg:w-3/4 lg:text-xl lg:mt-20 mt-4 lg:pr-10 lg:pl-0 pl-6 pr-6 text-center lg:text-justify">
            My name is Hristo Trifonov, and I am a full-stack developer based in
            Sofia, Bulgaria, fluent in both English and German. I began my journey
            in the software world back in 2019 as a self-taught programmer, and
            shortly after, I applied for a software engineering course that I
            successfully completed in 2023.
          </p>
          <p className="lg:w-3/4 text-xl mt-20 pr-10 hidden lg:flex">
            Proficient in a range of programming languages and technologies, I
            offer a substantial pool of experience and am constantly pursuing new
            knowledge and opportunities.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
