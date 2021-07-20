import { useTranslation } from 'react-i18next';
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const lngs = {
  en: { nativeName: 'EN' },
  fr: { nativeName: 'FR' }
};

function App() {
  const { i18n } = useTranslation();
  const languageBtns = Object.keys(lngs).map((lng) => (
    <button key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
    {lngs[lng].nativeName}
    </button>
  ));

  return (
    <div className="App">
      <NavBar />
      <Intro languages={languageBtns}/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
