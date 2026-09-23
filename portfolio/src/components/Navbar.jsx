import { useState, useEffect } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#inicio" className="navbar-logo">
        DEVELOPER<span className="dot">.</span>
      </a>

      <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mim</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Especialidades </a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projetos</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="nav-contact">Contato</a>
      </nav>

      <button 
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Navbar;