import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-30">
        <ul>
            <li className="flex justify-between items-center w-40 h-14 px-4 bg-cyan-500 ml-[-100px] rounded-tr-md hover:rounded-md duration-300 hover:ml-[-10px]">
                <a href="https://www.linkedin.com/in/hristo-trifonov-470655286/" className="flex justify-between items-center w-full text-white">
                    <>LinkedIn <FaLinkedin size={30}/></>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 bg-cyan-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]">
                <a href="https://github.com/Hristo-TR" className="flex justify-between items-center w-full text-white">
                    <>Github <FaGithub size={30}/></>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 bg-cyan-500 ml-[-100px]  hover:rounded-md duration-300 hover:ml-[-10px]">
                <a href="mailto:hristo-trifonov@abv.bg" className="flex justify-between items-center w-full text-white">
                    <>Mail <HiOutlineMail size={30}/></>
                </a>
            </li>
            <li className="flex justify-between items-center w-40 h-14 px-4 bg-cyan-500 ml-[-100px] rounded-br-md hover:rounded-md duration-300 hover:ml-[-10px]">
                <a href="/CV.pdf" className="flex justify-between items-center w-full text-white">
                    <>CV <BsFillPersonLinesFill size={30}/></>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialMedia