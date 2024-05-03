"use client";

import { useContext } from "react";
import { DailyDiet } from "./Projects/backEnd/DailyDiet";
import { FindAFriend } from "./Projects/backEnd/FindAFriend";
import { BookSearch } from "./Projects/frontEnd/BookSearch";
import { ExclusiveStore } from "./Projects/frontEnd/ExclusiveStore";
import { LanguageContext } from "@/src/app/context/LanguageContext";

export function Projects() {
  const { language } = useContext(LanguageContext)

  return (
    <>
      {
        language === "en" ?
          <>
            <div className="mx-8 pt-20 md:mx-auto w-3/4 xl:w-3/4 3xl:w-4/6">
              <span className="text-xs">SOME OF</span>
              <h2 className="text-xl mb-8">MY FRONT-END PROJECTS</h2>
            </div>
            <div>
              <ExclusiveStore />
              <BookSearch />
            </div>
            <div className="mx-8 pt-20 md:mx-auto w-3/4 xl:w-3/4 3xl:w-4/6">
              <span className="text-xs">SOME OF</span>
              <h2 className="text-xl mb-8">MY BACK-END PROJECTS</h2>
            </div>
            <div className="pb-20">
              <FindAFriend />
              <DailyDiet />
            </div>
          </>
          :
          <>
            <div className="mx-8 pt-20 md:mx-auto w-3/4 xl:w-3/4 3xl:w-4/6" lang="pt-br">
              <span className="text-xs">ALGUNS DOS</span>
              <h2 className="text-xl mb-8">MEUS PROJETOS FRONT-END</h2>
            </div>
            <div>
              <ExclusiveStore />
              <BookSearch />
            </div>
            <div className="mx-8 pt-20 md:mx-auto w-3/4 xl:w-3/4 3xl:w-4/6" lang="pt-br">
              <span className="text-xs">ALGUNS DOS</span>
              <h2 className="text-xl mb-8">MEUS PROJETOS BACK-END</h2>
            </div>
            <div className="pb-20">
              <FindAFriend />
              <DailyDiet />
            </div>
          </>
      }
    </>
  )
}