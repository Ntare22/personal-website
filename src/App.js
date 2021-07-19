import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
