import { NavBar, PageSpace } from "../Components";
import Contact from "./Contact";
import Presentation from "./Presentation";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation />
      <PageSpace />
      <Projects />
      <PageSpace />
      <Contact />
    </div>
  );
}

export default App;
