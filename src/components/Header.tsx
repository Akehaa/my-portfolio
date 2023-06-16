import profile from "@/public/profile.jpg"
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { Skills } from "./Header/Skills";

export function Header() {
  return (
    <header className="bg-gradient-to-b from-gray-200 via-white to-gray-200 h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-10 mt-40 lg:mt-0 lg:flex-row">
        <Image src={profile} width={250} height={0} alt="profile picture" className="mb-12 rounded-full shadow-[4px_10px_25px_rgba(0,0,0,0.3)] w-52 h-auto lg:w-60 lg:mb-0"></Image>
        <div className="flex flex-col items-center mx-10 text-center gap-6 lg:text-left lg:items-start">
          <span>Hi! My name is</span>
          <h1 className="text-3xl"><span className="text-redishpinksh">DENER</span> ARAUJO</h1>
          <p className="text-lg">
            You may know me as <span className="text-redishpinksh">AKEHAA</span>.<br />
            I am a <span className="text-redishpinksh">Front-end React Developer<span className="text-black"> based in</span> Brazil</span><br /> that
            loves learning new techs and has lots of curiosity.
          </p>
          <div className="flex items-center gap-4 lg:gap-6">
            <Link href="#" className="bg-redishpinksh py-3 px-7 text-sm rounded-3xl text-white hover:opacity-70 duration-200">Resume</Link>
            <div className="flex gap-4 lg:gap-6">
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
      </div>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
        <div>
          <span className="text-xl">SKILLS:</span>
        </div>
        <div className="flex gap-3 lg:gap-12">
          <Skills />
        </div>
      </div>
    </header>
  )
}