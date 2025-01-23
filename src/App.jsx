import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import { Projects } from "./sections/Projects";

function App() {  
  
  return (
    <main className="overflow-x-hidden max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}

export default App;
