import profile from "@/public/profile.jpg"
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/ai";
import { Skills } from "./Header/Skills";

export function Header() {
  return (
    <header id="home" className="bg-gradient-to-b from-gray-200 via-white to-gray-200 h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-10 mt-52 lg:mt-0 lg:flex-row">
        <Image src={profile} width={250} height={0} alt="profile picture" className="mb-12 rounded-full shadow-[4px_10px_25px_rgba(0,0,0,0.3)] w-52 h-auto lg:w-60 lg:mb-0"></Image>
        <div className="flex flex-col items-center mx-10 text-center gap-6 lg:text-left lg:items-start">
          <span>Hi! My name is</span>
          <h1 className="text-3xl"><span className="text-redishpinksh">DENER</span> ARAUJO</h1>
          <p className="text-lg">
            I am a <span className="text-redishpinksh">FullStack Web Developer<span className="text-black"> based in</span> Brazil</span><br />
            that loves learning new techs and it's extremely curious.
          </p>
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <Link href="/resume.pdf" target="_blank" className="bg-redishpinksh py-3 px-7 text-sm rounded-3xl text-white hover:opacity-70 duration-200">Resume</Link>
            <div className="flex gap-6">
              <Link href="mailto:deneruaraujo@gmail.com" target="_blank" className="text-redishpinksh" aria-label="LinkedIn">
                <AiOutlineMail size='auto' className="w-10 p-1 shadow-inner shadow-redishpinksh hover:text-[#4285F4] hover:shadow-[#4285F4] duration-200" />
              </Link>
              <Link href="https://www.linkedin.com/in/deneruaraujo/" target="_blank" className="text-redishpinksh" aria-label="LinkedIn">
                <AiFillLinkedin size='auto' className="w-10 p-1 shadow-inner shadow-redishpinksh hover:text-[#0073B2] hover:shadow-[#0073B2] duration-200" />
              </Link>
              <Link href="https://github.com/deneruaraujo" target="_blank" className="text-redishpinksh" aria-label="GitHub">
                <AiFillGithub size='auto' className="w-10 p-1 shadow-inner shadow-redishpinksh hover:text-black hover:shadow-black duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 flex-wrap justify-center lg:gap-12 2xl:flex-nowrap">
          <Skills />
      </div>
    </header>
  )
}