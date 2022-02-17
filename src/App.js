import "./App.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Intro />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
