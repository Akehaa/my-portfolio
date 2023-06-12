import profile from "@/public/profile.jpg"
import Link from "next/link";
import Image from "next/image";
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'

export default function Home() {
  return (
    <header className="flex flex-col items-center justify-center h-screen lg:flex-row lg:gap-12">
      <Image src={profile} width={250} height={0} alt="profile picture" className="mb-12 rounded-full shadow-[4px_10px_25px_rgba(0,0,0,0.3)] w-52 h-auto lg:w-[250px] lg:mb-0"></Image>
      <div className="flex flex-col items-center mx-10 text-center gap-6 lg:mx-0 lg:items-start lg:text-left">
        <span className="font-semibold">HI! I'M</span>
        <h1 className="text-3xl"><span className="text-redishpinksh">DENER</span> ARAUJO</h1>
        <p>You may know me as <span className="text-redishpinksh">Akehaa</span> and i'm a <br />
          <span className="text-redishpinksh">Front-end React Web Developer </span><br />
          that loves learning new techs and has lots of curiosity.</p>
        <div className="flex items-center gap-4 lg:gap-6">
          <div>
            <Link href="#" className="bg-redishpinksh py-2 px-6 text-sm rounded-3xl text-white hover:opacity-70 duration-200">Resume</Link>
          </div>
          <div className="flex gap-3">
            <Link href="https://www.linkedin.com/in/akehaa/" target="_blank" className="text-redishpinksh" aria-label="LinkedIn">
              <AiFillLinkedin size='auto' className="w-10 p-1 shadow-inner shadow-redishpinksh hover:text-[#0073B2] hover:shadow-[#0073B2] duration-200" />
            </Link>
            <Link href="https://github.com/Akehaa" target="_blank" className="text-redishpinksh" aria-label="GitHub">
              <AiFillGithub size='auto' className="w-10 p-1 shadow-inner shadow-redishpinksh hover:text-black hover:shadow-black duration-200" />
            </Link>
            <Link href="https://twitter.com/_Akeha" target="_blank" className="text-redishpinksh" aria-label="Twitter">
              <AiOutlineTwitter size='auto' className="w-10 p-1 shadow-inner shadow-redishpinksh hover:text-[#1D9BF0] hover:shadow-[#1D9BF0] duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
