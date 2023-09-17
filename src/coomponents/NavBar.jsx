import React,{useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const NavBar = () => {

  const[nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center px-4 w-full h-12 text-white bg-gray-950 fixed z-50'>
       <div>
         <h1 className='text-4xl font-signature ml-2'>Hristo</h1>
        </div>
        <ul className='hidden md:flex text-xl'>
            <li className='px-4 cursor-pointer font-medium text-white hover:scale-110 duration-200'><Link to='home' smooth duration={500}>Home</Link></li>
            <li className='px-4 cursor-pointer font-medium text-white hover:scale-110 duration-200'><Link to='about' smooth duration={500}>About</Link></li>
            <li className='px-4 cursor-pointer font-medium text-white hover:scale-110 duration-200'><Link to='projects' smooth duration={500}>Projects</Link></li>
            <li className='px-4 cursor-pointer font-medium text-white hover:scale-110 duration-200'><Link to='stack' smooth duration={500}>Tech Stack</Link></li>
            <li className='px-4 cursor-pointer font-medium text-white hover:scale-110 duration-200'><Link to='contact' smooth duration={500}>Contact</Link></li>

        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-white md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>
        
        {nav &&(
        <ul className='flex flex-col justify-center items-center absolute
         top-0 left-0 w-full h-screen bg-gradient-to-b
          from-black to-gray-800 text-white'>
          <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-200 py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='home' smooth duration={500}>Home</Link></li>
          <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-200 py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='about' smooth duration={500}>About</Link></li>
          <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-200 py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='projects' smooth duration={500}>Projects</Link></li>
          <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-200 py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='stack' smooth duration={500}>Tech Stack</Link></li>
          <li className='px-4 cursor-pointer font-medium hover:scale-110 duration-200 py-6 text-4xl'><Link onClick={() => setNav(!nav)} to='contact' smooth duration={500}>Contact</Link></li>
        </ul>)}

    </div>
  )
}

export default NavBar