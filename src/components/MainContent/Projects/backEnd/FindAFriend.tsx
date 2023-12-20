import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export function FindAFriend() {
  return (
    <div className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl mx-8 mb-14 w-3/4 md:mx-auto md:p-12 lg:gap-8 lg:text-lg lg:p-12 xl:w-3/4 3xl:w-4/6">
      <div className="p-6 lg:p-0 lg:flex lg:flex-col lg:justify-between">
        <div>
          <h3 className="text-xl text-left mb-4 font-bold">Find a Friend, a pet adoption API</h3>
          <p className="mb-4">API Specifically crafted to connect individuals in search of pets with pet adoption organizations. It provides a platform for organizations to register and validate their identity using JWT. Once authenticated, these organizations can upload information about pets available for adoption, view their own profiles, manage the listed pets, and carry out various account-related tasks. For those seeking a pet, the API offers the ability to search for pets using filters, view results in paginated format, and access detailed information about each pet, including the contact details of the respective organization.
          <br/>
          <br/>
          ・The API follows a Test-Driven Development (TDD), Domain-Driven Design (DDD), Clean Architecture and SOLID.
          <br/>
          <br/>
          ・To ensure reliability and accuracy, it is equipped with a comprehensive set of end-to-end and unit tests.
          <br/>
          <br/>
          ・Uses Cloudflare R2 for storage.
          <br/>
          <br/>
          ・It provides a platform for organizations to register and validate their identity using JWT.
          </p>
        </div>
        <div className="flex flex-col mb-4">
          <span className="font-bold mb-4 text-left">Technologies:</span>
          <p>Node.js, TypeScript, NestJS, Vitest, PostgreSQL, Docker, Prisma and Cloudflare R2.</p>
        </div>
        <div className="flex items-center justify-center gap-12 lg:justify-normal">
          <Link href="https://github.com/deneruaraujo/find-a-friend-api" target="_blank" aria-label="GitHub GitHub" className="flex items-center hover:text-redishpinksh hover:-translate-y-1 duration-200">
            <AiFillGithub size='auto' className="w-10 p-1" />
            <span className="font-bold">GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  )
}