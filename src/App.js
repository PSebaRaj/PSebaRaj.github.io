import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Links from "./components/Links";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Links />
    </div>
  );
}

export default App;
