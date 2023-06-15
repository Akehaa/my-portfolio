import Image from "next/image";
import exclusiveStoreHome from "@/public/exclusive-store-home.jpg";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from 'react-icons/bi'

export function Projects() {
  return (
    <>
      <div className="mx-8 pt-40 md:mx-auto w-3/4 2xl:w-2/4">
        <span className="text-xs">SOME OF</span>
        <h2 className="text-xl mb-8">MY PROJECTS</h2>
      </div>
      <div className="pb-20">
        <div className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl mx-8 w-3/4 md:mx-auto lg:text-lg lg:p-12 2xl:w-2/4">
          <div className="flex flex-col lg:flex-row lg:gap-8">
            <Link href="https://github.com/Akehaa/exclusive-store" target="_blank" aria-label="GitHub Repo">
              <Image src={exclusiveStoreHome} width={900} height={0} alt="exclusive store home page" className="h-auto rounded" />
            </Link>
            <div className="p-6 text-sm lg:p-0 lg:flex lg:flex-col lg:justify-between">
              <div>
                <h3 className="text-lg text-center mb-4 font-bold lg:text-left">Exclusive Store</h3>
                <p className="mb-4">Exclusive is a really complete e-commerce. It has multiple pages, product page, sliders, wishlist, cart, checkout, etc.</p>
              </div>
              <div className="flex flex-col mb-4">
                <span className="font-bold mb-4 text-center lg:text-left">It uses:</span>
                <p>NextJS 13, TypeScript, TailwindCSS with PostCSS, Stripe API, React-Slick, Material UI and Radix-UI.</p>
              </div>
              <div className="flex items-center justify-center gap-12 lg:justify-normal">
                <Link href="https://github.com/Akehaa/exclusive-store" target="_blank" aria-label="GitHub Repo" className="flex items-center hover:text-redishpinksh duration-200">
                  <AiFillGithub size='auto' className="w-10 p-1" />
                  <span className="font-bold">Repo</span>
                </Link>
                <Link href="https://akehaa-exclusive-store.vercel.app/" target="_blank" aria-label="Live" className="flex items-center hover:text-redishpinksh duration-200">
                  <BiLinkExternal size='auto' className="w-9 p-1" />
                  <span className="font-bold">Live</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}