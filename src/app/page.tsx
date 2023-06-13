import { Header } from "../components/Header";
import { About } from "../components/About";

export default function Home() {
  return (
    <>
      <Header />
      <section className="h-screen bg-gradient-to-b from-gray-200 via-white to-gray-200 ">
        <About />
      </section>
    </>

  )
}
