import Image from "next/image";
import Link from "next/link";
import exclusiveStoreHome from "@/public/exclusive-store-home.jpg";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

export function ExclusiveStore() {
  return (
    <div className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl mx-8 mb-14 w-3/4 md:mx-auto md:p-12 lg:gap-8 lg:text-lg lg:p-12 xl:grid xl:grid-cols-[50%_50%] xl:w-3/4 3xl:w-4/6">
      <Link href="https://akehaa-exclusive-store.vercel.app/" target="_blank" aria-label="Live">
        <Image src={exclusiveStoreHome} width={1000} height={0} alt="exclusive store home page" className="h-auto rounded hover:shadow-lg lg:hover:shadow-gray-400 duration-200 lg:hover:-translate-x-1 lg:hover:-translate-y-1 mb-6 xl:mb-0" />
      </Link>
      <div className="p-6 lg:p-0 lg:flex lg:flex-col lg:justify-between">
        <div>
          <h3 className="text-xl text-left mb-4 font-bold">Exclusive Store</h3>
          <p className="mb-4">An e-commerce platform built with React and NextJS, incorporating libraries such as React-Slick, Material UI and Radix-UI. It makes use of the context API for the shopping cart system and consumes the Stripe API to perform the checkout. </p>
        </div>
        <div className="flex flex-col mb-4">
          <span className="font-bold mb-4 text-left">Technologies:</span>
          <p>HTML5, CSS3, TypeScript, React, NextJS, TailwindCSS, Context API, Stripe API, React-Slick, Material UI and Radix-UI.</p>
        </div>
        <div className="flex flex-col">
          <span className="font-bold mb-4 text-left">Design:</span>
          <p className="mb-4">A free design from <span className="font-bold">Figma</span>. It was made by: <Link href="https://www.figma.com/@mdrimel15" target="_blank" className="font-bold">@mdrimel15</Link></p>
        </div>
        <div className="flex items-center justify-center gap-12 lg:justify-normal">
          <Link href="https://github.com/Akehaa/exclusive-store" target="_blank" aria-label="GitHub GitHub" className="flex items-center hover:text-redishpinksh hover:-translate-y-1 duration-200">
            <AiFillGithub size='auto' className="w-10 p-1" />
            <span className="font-bold">GitHub</span>
          </Link>
          <Link href="https://akehaa-exclusive-store.vercel.app/" target="_blank" aria-label="Live" className="flex items-center hover:text-redishpinksh hover:-translate-y-1 duration-200">
            <BiLinkExternal size='auto' className="w-9 p-1" />
            <span className="font-bold">Live</span>
          </Link>
        </div>
      </div>
    </div>
  )
}