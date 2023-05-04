import NavBar from "../components/navBar";
import Contact from "./contact";
import Presentation from "./presentation";
import Projects from "./projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
