import React, { useRef, useState, useEffect } from "react";
import sky from "../assets/sky.jpg";
import mount from "../assets/Mount.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 3], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 4], ["0%", "110%"]);

  const initialText1 = "HELLO  I  AM";
  const initialText2 = "Full Stack Developer";

  const [visibleText1, setVisibleText1] = useState("");
  const [visibleText2, setVisibleText2] = useState("");

  useEffect(() => {
    const animateText = async (text, setTextFunction) => {
      for (let i = 0; i <= text.length; i++) {
        setTextFunction(text.slice(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust the delay as needed
      }
    };

    animateText(initialText1, setVisibleText1);
    setTimeout(() => {
      animateText(initialText2, setVisibleText2);
    }, initialText1.length * 100); // Start animating the second text after the first one finishes
  }, []);

  return (
    <div
      ref={ref}
      name="home"
      className="h-screen w-full  text-white  relative"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-center z-10">
        <motion.div
          style={{ y: textY }}
          className="flex flex-col justify-center h-full items-center z-10"
        >
          <h2 className="text-2xl  sm:text-3xl font-bold text-cyan-500 pl-4">
            {visibleText1}
          </h2>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'easeIn', duration: 1 }}
            
            className="text-4xl sm:text-6xl font-bold text-white font-signature pt-8"
          >
            Hristo Trifonov
          </motion.h2>
          <h2 className="text-2xl sm:text-2xl font-bold text-cyan-500 pl-4 mb-10">
            {visibleText2}
          </h2>
          {/* <div>
            <Link to="projects" smooth duration={500}>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                <Link to="projects" smooth duration={500}>
                  Portfolio
                </Link>
                <span className="group-hover:rotate-90 duration-300">
                  <MdArrowRightAlt size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div> */}
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${sky})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${mount})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};

export default Home;
