import { BookSearch } from "./Projects/BookSearch";
import { ExclusiveStore } from "./Projects/ExclusiveStore";

export function Projects() {
  return (
    <>
      <div className="mx-8 pt-20 md:mx-auto w-3/4 xl:w-3/4 3xl:w-2/4">
        <span className="text-xs">SOME OF</span>
        <h2 className="text-xl mb-8">MY PROJECTS</h2>
      </div>
      <div className="pb-20">
        <ExclusiveStore />
        <BookSearch />
      </div>
    </>
  )
}