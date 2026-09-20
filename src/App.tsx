import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Education />
        <Experience />
        <Skills />
      </main>
    </>
  );
}

export default App;
