import { LanguageContext } from "@/src/app/context/LanguageContext";
import Link from "next/link";
import { useContext } from "react";
import { AiFillGithub } from "react-icons/ai";

export function FindAFriend() {
  const { language } = useContext(LanguageContext)

  return (
    <div className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl mx-8 mb-14 w-3/4 md:mx-auto md:p-12 lg:gap-8 lg:text-lg lg:p-12 xl:w-3/4 3xl:w-4/6">
      {
        language === "en" ?
          <div className="p-6 lg:p-0 lg:flex lg:flex-col lg:justify-between">
            <div>
              <h3 className="text-xl text-left mb-4 font-bold">Find a Friend, a pet adoption API</h3>
              <p className="mb-4">API Specifically crafted to connect individuals in search of pets with pet adoption organizations. It provides a platform for organizations to register and validate their identity using JWT. Once authenticated, these organizations can upload information about pets available for adoption, view their own profiles, manage the listed pets, and carry out various account-related tasks. For those seeking a pet, the API offers the ability to search for pets using filters, view results in paginated format, and access detailed information about each pet, including the contact details of the respective organization.
                <br />
                <br />
                ・The API follows Test-Driven Development (TDD), Domain-Driven Design (DDD), Clean Architecture, and SOLID.
                <br />
                <br />
                ・To ensure reliability and accuracy, it is equipped with a comprehensive set of end-to-end and unit tests.
                <br />
                <br />
                ・Uses Cloudflare R2 for storage.
                <br />
                <br />
                ・It provides a platform for organizations to register and validate their identity using JWT.
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <span className="font-bold mb-4 text-left">Technologies:</span>
              <p>TypeScript, Node.js, NestJS, Vitest, PostgreSQL, Docker, Prisma and Cloudflare R2.</p>
            </div>
            <div className="flex items-center justify-center gap-12 lg:justify-normal">
              <Link href="https://github.com/deneruaraujo/find-a-friend-api" target="_blank" aria-label="GitHub GitHub" className="flex items-center hover:text-redishpinksh hover:-translate-y-1 duration-200">
                <AiFillGithub size='auto' className="w-10 p-1" />
                <span className="font-bold">GitHub</span>
              </Link>
            </div>
          </div>
          :
          <div className="p-6 lg:p-0 lg:flex lg:flex-col lg:justify-between" lang="pt-br">
            <div>
              <h3 className="text-xl text-left mb-4 font-bold">Find a Friend, a pet adoption API</h3>
              <p className="mb-4">A API foi especificamente desenvolvida para conectar indivíduos em busca de animais de estimação com organizações de adoção de animais. Ela fornece uma plataforma para que as organizações possam se registrar e validar sua identidade usando JWT. Uma vez autenticadas, essas organizações podem fazer upload de informações sobre os animais disponíveis para adoção, visualizar seus próprios perfis, gerenciar os animais listados e realizar várias tarefas relacionadas à conta. Para aqueles que buscam um animal de estimação, a API oferece a capacidade de buscar animais usando filtros, visualizar os resultados em formato paginado e acessar informações detalhadas sobre cada animal, incluindo os detalhes de contato da respectiva organização.
                <br />
                <br />
                ・A API segue o Desenvolvimento Orientado a Testes (Test-Driven Development - TDD), Design Orientado a Domínio (Domain-Driven Design - DDD), Arquitetura Limpa (Clean Architecture) e os princípios SOLID.
                <br />
                <br />
                ・To ensure reliability and accuracy, it is equipped with a comprehensive set of end-to-end and unit tests.
                <br />
                <br />
                ・Para garantir confiabilidade e precisão, ela está equipada com um conjunto abrangente de testes de ponta a ponta e testes unitários.
                <br />
                <br />
                ・Ela fornece uma plataforma para que organizações possam se registrar e validar sua identidade usando JWT.
              </p>
            </div>
            <div className="flex flex-col mb-4">
              <span className="font-bold mb-4 text-left">Tecnologias:</span>
              <p>TypeScript, Node.js, NestJS, Vitest, PostgreSQL, Docker, Prisma e Cloudflare R2.</p>
            </div>
            <div className="flex items-center justify-center gap-12 lg:justify-normal">
              <Link href="https://github.com/deneruaraujo/find-a-friend-api" target="_blank" aria-label="GitHub GitHub" className="flex items-center hover:text-redishpinksh hover:-translate-y-1 duration-200">
                <AiFillGithub size='auto' className="w-10 p-1" />
                <span className="font-bold">GitHub</span>
              </Link>
            </div>
          </div>
      }
    </div>
  )
}