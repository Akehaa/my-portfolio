import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export function DailyDiet() {
  return (
    <div className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl mx-8 mb-14 w-3/4 md:mx-auto md:p-12 lg:gap-8 lg:text-lg lg:p-12 xl:w-3/4 3xl:w-4/6">
      <div className="p-6 lg:p-0 lg:flex lg:flex-col lg:justify-between">
        <div>
          <h3 className="text-xl text-left mb-4 font-bold">Daily Diet, a diet control API</h3>
          <p className="mb-4">API developed to assist users in managing their diets, allowing the recording, editing, deletion and statistical analysis of meals. It uses JWT for authentication.
          <br/>
          <br/>
          ・The API follows Domain-Driven Design (DDD), Clean Architecture and SOLID.
          <br/>
          <br/>
          ・Has end-to-end and unit tests to ensure reliability.
          <br/>
          <br/>
          ・Uses JWT for authentication.
          </p>
        </div>
        <div className="flex flex-col mb-4">
          <span className="font-bold mb-4 text-left">Technologies:</span>
          <p>Node.js, TypeScript, NestJS, Vitest, PostgreSQL, Docker, and Prisma.</p>
        </div>
        <div className="flex items-center justify-center gap-12 lg:justify-normal">
          <Link href="https://github.com/deneruaraujo/daily-diet-api" target="_blank" aria-label="GitHub GitHub" className="flex items-center hover:text-redishpinksh hover:-translate-y-1 duration-200">
            <AiFillGithub size='auto' className="w-10 p-1" />
            <span className="font-bold">GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  )
}