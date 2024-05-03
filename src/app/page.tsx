import { Header } from "../components/Header";
import { LanguageSelectorModal } from "../components/LanguageSelector";
import { MainContent } from "../components/MainContent";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LanguageSelectorModal />
      <MainContent />
    </>
  )
}
