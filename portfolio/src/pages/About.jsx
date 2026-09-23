import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/about.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about",
          start: "top 70%",
        },
      });

      tl.from(".about-header", { y: 30, opacity: 0, duration: 0.6 })
        .from(".about-title", { y: 60, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(".about-desc", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".about-visual-card", { scale: 0.8, rotation: 5, opacity: 0, duration: 1 }, "-=0.6");
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about grid-bg" id="about" ref={aboutRef}>
      <div className="about-content">
        <div className="about-text-area">
          <div className="about-header">
            <span className="section-label">Quem eu sou?  </span>
            <span className="section-number">01 / 05</span>
          </div>

          <h2 className="section-title about-title">
            UM POUCO DA MINHA <span className="highlight">HISTÓRIA.</span>
          </h2>

          <div className="about-desc">
            <p>
              Sou estudante e desenvolvedora apaixonada por tecnologia e por transformar ideias em projetos que realmente funcionam.

              Minha trajetória começou na robótica, onde aprendi na prática sobre programação, criatividade, trabalho em equipe e resolução de problemas. Hoje, levo essa mesma curiosidade para o desenvolvimento de software, explorando desde interfaces e experiências digitais até back-end, bancos de dados e aplicações mobile.
            </p>
            <p>
              Gosto de aprender fazendo, experimentar novas tecnologias e transformar cada projeto em uma oportunidade de evoluir — sempre buscando criar algo que seja funcional, criativo e tenha a minha identidade.
            </p>

            <a href="#contact" className="btn-primary" style={{ marginTop: '32px' }}>
              Me conheça melhor!
            </a>
          </div>
        </div>

        <div className="about-visual">
          <div className="about-photo-wrapper">
            <img
              src="/comp.jpg"
              alt="Profile"
              className="about-photo"
            />
          </div>
          <div className="floating-badge badge-1">
            <span>CRIATIVA</span>
          </div>
          <div className="floating-badge badge-2">
            <span>{`{ CODE }`}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;