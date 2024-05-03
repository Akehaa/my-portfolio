import { LanguageContext } from "@/src/app/context/LanguageContext";
import Link from "next/link";
import { useContext } from "react";
import { AiFillGithub } from "react-icons/ai";

export function DailyDiet() {
  const { language } = useContext(LanguageContext)

  return (
    <>
      {
        language === "en" ?
          <div className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl mx-8 mb-14 w-3/4 md:mx-auto md:p-12 lg:gap-8 lg:text-lg lg:p-12 xl:w-3/4 3xl:w-4/6">
            <div className="p-6 lg:p-0 lg:flex lg:flex-col lg:justify-between">
              <div>
                <h3 className="text-xl text-left mb-4 font-bold">Daily Diet, a diet control API</h3>
                <p className="mb-4">API developed to assist users in managing their diets, allowing the recording, editing, deletion and statistical analysis of meals. It uses JWT for authentication.
                  <br />
                  <br />
                  ・The API follows Domain-Driven Design (DDD), Clean Architecture and SOLID.
                  <br />
                  <br />
                  ・Has end-to-end and unit tests to ensure reliability.
                  <br />
                  <br />
                  ・Uses JWT for authentication.
                </p>
              </div>
              <div className="flex flex-col mb-4">
                <span className="font-bold mb-4 text-left">Technologies:</span>
                <p>TypeScript, Node.js, NestJS, Vitest, PostgreSQL, Docker, and Prisma.</p>
              </div>
              <div className="flex items-center justify-center gap-12 lg:justify-normal">
                <Link href="https://github.com/deneruaraujo/daily-diet-api" target="_blank" aria-label="GitHub GitHub" className="flex items-center hover:text-redishpinksh hover:-translate-y-1 duration-200">
                  <AiFillGithub size='auto' className="w-10 p-1" />
                  <span className="font-bold">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
          :
          <div
            className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl mx-8 mb-14 w-3/4 md:mx-auto md:p-12 lg:gap-8 lg:text-lg lg:p-12 xl:w-3/4 3xl:w-4/6"
            lang="pt-br"
          >
            <div className="p-6 lg:p-0 lg:flex lg:flex-col lg:justify-between">
              <div>
                <h3 className="text-xl text-left mb-4 font-bold">Daily Diet, API de controle de dieta</h3>
                <p className="mb-4">API desenvolvida para auxiliar os usuários no gerenciamento de suas dietas, permitindo o registro, edição, exclusão e análise estatística das refeições. Utiliza JWT para autenticação.
                  <br />
                  <br />
                  ・A API segue os princípios de Domain-Driven Design (DDD), Arquitetura Limpa (Clean Architecture) e os princípios SOLID.
                  <br />
                  <br />
                  ・Possui testes de ponta a ponta (end-to-end) e testes unitários para garantir confiabilidade.
                  <br />
                  <br />
                  ・Utiliza JWT para autenticação.
                </p>
              </div>
              <div className="flex flex-col mb-4">
                <span className="font-bold mb-4 text-left">Tecnologias:</span>
                <p>TypeScript, Node.js, NestJS, Vitest, PostgreSQL, Docker, e Prisma.</p>
              </div>
              <div className="flex items-center justify-center gap-12 lg:justify-normal">
                <Link href="https://github.com/deneruaraujo/daily-diet-api" target="_blank" aria-label="GitHub GitHub" className="flex items-center hover:text-redishpinksh hover:-translate-y-1 duration-200">
                  <AiFillGithub size='auto' className="w-10 p-1" />
                  <span className="font-bold">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
      }
    </>
  )
}