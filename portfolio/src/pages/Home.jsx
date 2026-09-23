import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplineViewer from "../components/SplineViewer";
import "../styles/home.css";

function Home() {
  const homeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.6, delay: 0.2 })
        .from(".hero-title .line", { y: 100, opacity: 0, duration: 1, stagger: 0.15 }, "-=0.2")
        .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(".hero-cta-wrapper", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-spline", { scale: 0.9, opacity: 0, duration: 1.2 }, "-=0.8");
    }, homeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero grid-bg" id="inicio" ref={homeRef}>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          "JE SUIS PREST"
        </div>

        <h1 className="hero-title">
          <div className="line-wrapper"><div className="line">Isabelle</div></div>
          <div className="line-wrapper"><div className="line highlight">BORGES.</div></div>
        </h1>

        <p className="hero-subtitle">
          ONDE IDEIAS VIRAM CÓDIGO...
        </p>

        <div className="hero-cta-wrapper">
          <a href="#contact" className="btn-primary">
            Contatos
          </a>
          <a href="#projects" className="btn-outline">
            Ver Projetos ↗
          </a>
        </div>
      </div>

        <div className="hero-spline">
          {/* Substitua a string vazia pela URL do seu modelo Spline gerado em spline.design */}
          <SplineViewer url="" />
        </div>

      
    </section>
  );
}

export default Home;