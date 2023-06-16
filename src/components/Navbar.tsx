import Link from "next/link";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'

export function Navbar() {
  return (
    <div className="fixed">
      <div className="flex text-xs text-gray-100 w-screen bg-gradient-to-l from-[#fa7c8d] via-redishpinksh to-[#fa7c8d] py-4 mx-auto justify-center -translate-y-7 gap-8 hover:-translate-y-0 duration-300 md:gap-10 lg:gap-12 2xl:gap-16 group">
        <div className="gap-8 hidden group-hover:flex duration-200">
          <Link href="#home" className="px-3 py-2 hover:bg-gray-100 hover:text-black font-semibold hover:shadow-black hover:shadow-md hover:py-2 hover:px-3 hover:rounded duration-200">HOME</Link>
          <Link href="#about" className="px-3 py-2 hover:bg-gray-100 hover:text-black font-semibold hover:shadow-black hover:shadow-md hover:py-2 hover:px-3 hover:rounded duration-200">ABOUT</Link>
          <Link href="#projects" className="px-3 py-2 hover:bg-gray-100 hover:text-black font-semibold hover:shadow-black hover:shadow-md hover:py-2 hover:px-3 hover:rounded duration-200">PROJECTS</Link>
        </div>
        <div className="flex gap-20 pb-2 translate-y-4 group-hover:hidden group-hover:-translate-y-4">
          <AiOutlineHome size={20} className="text-white mr-2" aria-label="home" />
          <BsFillPersonFill size={20} className="mr-4" aria-label="about" />
          <BiCodeAlt size={20} className="mr-4" aria-label="projects" />
        </div>
      </div>
    </div>
  )
}