import Link from "next/link";

export function About() {
  return (
    <div className="mx-8 pt-40 md:mx-auto w-3/4 2xl:w-2/4 lg:pt-0 ">
      <span className="text-xs">A LITTLE</span>
      <h2 className="text-xl mb-8">ABOUT ME</h2>
      <p className="shadow-inner shadow-black bg-gradient-to-l from-gray-200 via-white to-gray-200 rounded-2xl p-8 text-sm lg:text-lg lg:p-12">
        A 24-year-old Front-end React Developer with over a year of coding experience. I gained my coding skills through the <Link href="https://www.rocketseat.com.br/ignite?utm_source=site_rocketseat&utm_medium=tabs_programas&utm_campaign=redirecionameto&utm_term=organic&utm_content=button" className="text-[#8257E5] hover:font-bold" target="_blank">Rocketseat ReactJS Specialization Bootcamp</Link>. You can find the projects on my <Link href="https://github.com/Akehaa?tab=repositories" className="text-redishpinksh hover:font-bold" target="_blank">GitHub</Link>.<br />
        I'm used to code using NextJS, TypeScript, TailwindCSS with PostCSS and to use Figma. I'm constantly exploring new technologies and i really enjoy staying up to date with the latest trends in the market.
      </p>
    </div>

  )
}