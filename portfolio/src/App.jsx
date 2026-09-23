import Home from "./pages/Home";
import Clients from "./pages/Clients";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Clients />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;