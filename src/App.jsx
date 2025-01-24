import About from "./sections/About";
import Clients from "./sections/Clients";
import { Contact } from "./sections/Contact";
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
      <Clients />
      <Contact />
    </main>
  );
}

export default App;
