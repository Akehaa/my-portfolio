import Link from "next/link";

export function About() {
  return (
    <div className="mx-8 pt-60 md:mx-auto w-3/4 lg:pt-40 xl:w-3/4 3xl:w-4/6">
      <span className="text-xs">A LITTLE</span>
      <h2 className="text-xl mb-8">ABOUT ME</h2>
      <p className="shadow-inner shadow-gray-300 bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl p-8 text-sm lg:text-lg lg:p-12">
        A 24-year-old <span className="font-bold">React</span> Developer with over a year of coding experience. I gained my coding skills through the <Link href="https://www.rocketseat.com.br/ignite?utm_source=site_rocketseat&utm_medium=tabs_programas&utm_campaign=redirecionameto&utm_term=organic&utm_content=button" className="text-[#8257E5]" target="_blank">Rocketseat ReactJS Specialization Bootcamp</Link>. You can find the projects on my <Link href="https://github.com/Akehaa?tab=repositories" className="text-redishpinksh" target="_blank">GitHub</Link>.<br />
        I'm used to code using <span className="font-bold">NextJS</span>, <span className="font-bold">TypeScript</span>, <span className="font-bold">TailwindCSS with PostCSS</span>, UIs like <span className="font-bold">MUI</span> and <span className="font-bold">Radix-UI</span>, and to use <span className="font-bold">Figma</span>. I'm constantly exploring new technologies and i really enjoy staying up to date with the latest trends in the market.
      </p>
    </div>
  )
}