"use client";

import { LanguageContext } from "@/src/app/context/LanguageContext";
import Link from "next/link";
import { useContext } from "react";

export function About() {
  const { language } = useContext(LanguageContext)

  return (
    <>
      {
        language === "en" ?
          <div className="mx-8 pt-60 md:mx-auto w-3/4 lg:pt-40 xl:w-3/4 3xl:w-4/6">
            <span className="text-xs">A LITTLE</span>
            <h2 className="text-xl mb-8">ABOUT ME</h2>
            <p className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl p-8 text-sm lg:text-lg lg:p-12">
              25-year-old Full Stack Developer with a focus on React and Node.js. You can find my projects on <Link href="https://github.com/deneruaraujo?tab=GitHubsitories" className="text-redishpinksh" target="_blank">GitHub</Link>.
              <br />
              <br />
              Languages: Portuguese: Native, English: Fluent, Spanish: Intermediate.
              <br />
              <br />
              My <span className="text-redishpinksh font-bold">Front-end</span> experience lies in <span className="font-bold">JavaScript</span>, <span className="font-bold">TypeScript</span>, <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">Redux</span>, <span className="font-bold">Context API</span>, <span className="font-bold">TailwindCSS</span>, UIs like <span className="font-bold">MUI</span>, <span className="font-bold">Radix-UI</span> and <span className="font-bold">shadcn/ui</span>. Also <span className="font-bold">Figma</span>.<br />
              <br />
              My <span className="text-redishpinksh font-bold">Back-end</span> experience lies in <span className="font-bold">JavaScript</span>, <span className="font-bold">TypeScript</span>, <span className="font-bold">Node.js</span>, <span className="font-bold">NestJS</span>, <span className="font-bold">Vitest</span>, <span className="font-bold">Jest</span>, <span className="font-bold">PostgreeSQL</span>, <span className="font-bold">Docker</span>, <span className="font-bold">Prisma</span>, <span className="font-bold">AWS S3</span> e <span className="font-bold">Cloudflare R2</span>.
              <br />
              <br />
              I have <span className="text-redishpinksh font-bold">experience</span> in: <span className="font-bold">SEO</span>, <span className="font-bold">Accessibility</span>, <span className="font-bold">Responsiveness</span>, <span className="font-bold">TDD</span>, <span className="font-bold">DDD</span>, <span className="font-bold">Clean Architecture</span>, <span className="font-bold">SOLID</span>, <span className="font-bold">Clean Code</span>, <span className="font-bold">Business Rules</span>, <span className="font-bold">Functional Requirements</span>, <span className="font-bold">Non-Functional Requirements</span>.
              <br />
              <br />
              I'm constantly exploring new technologies.
            </p>
          </div>
          :
          <div className="mx-8 pt-60 md:mx-auto w-3/4 lg:pt-40 xl:w-3/4 3xl:w-4/6" lang="pt-br">
            <span className="text-xs">UM POUCO</span>
            <h2 className="text-xl mb-8">SOBRE MIM</h2>
            <p className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl p-8 text-sm lg:text-lg lg:p-12">
              Tenho 25 anos e sou um desenvolvedor Full Stack React/Node. Você pode ver meus projetos no <Link href="https://github.com/deneruaraujo?tab=GitHubsitories" className="text-redishpinksh" target="_blank">GitHub</Link>.
              <br />
              <br />
              Idiomas: Português: Nativo, Inglês: Fluente, Espanhol: Intermediário.
              <br />
              <br />
              No <span className="text-redishpinksh font-bold">Front-end</span> tenho experiência em <span className="font-bold">JavaScript</span>, <span className="font-bold">TypeScript</span>, <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">Redux</span>, <span className="font-bold">Context API</span>, <span className="font-bold">TailwindCSS</span>, UIs como <span className="font-bold">MUI</span>, <span className="font-bold">Radix-UI</span> e <span className="font-bold">shadcn/ui</span>. Também <span className="font-bold">Figma</span>.<br />
              <br />
              No <span className="text-redishpinksh font-bold">Back-end</span> tenho experiência em <span className="font-bold">JavaScript</span>, <span className="font-bold">TypeScript</span>, <span className="font-bold">Node.js</span>, <span className="font-bold">NestJS</span>, <span className="font-bold">Vitest</span>, <span className="font-bold">Jest</span>, <span className="font-bold">PostgreeSQL</span>, <span className="font-bold">Docker</span>, <span className="font-bold">Prisma</span>, <span className="font-bold">AWS S3</span> e <span className="font-bold">Cloudflare R2</span>.
              <br />
              <br />
              Tenho <span className="text-redishpinksh font-bold">experiência</span> em: <span className="font-bold">SEO</span>, <span className="font-bold">Acessibilidade</span>, <span className="font-bold">Responsividade</span>, <span className="font-bold">TDD</span>, <span className="font-bold">DDD</span>, <span className="font-bold">Clean Architecture</span>, <span className="font-bold">SOLID</span>, <span className="font-bold">Clean Code</span>, <span className="font-bold">Regras de Negócio</span>, <span className="font-bold">Regras Funcionais</span>, <span className="font-bold">Regras não Funcionais</span>.
              <br />
              <br />
              Estou constantemente explorando novas tecnologias.
            </p>
          </div>
      }
    </>
  )
}