import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/contact.css";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        scrollTrigger: {
          trigger: ".contact",
          start: "top 75%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
      });

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-content",
          start: "top 70%",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(".footer-big-text span", {
        scrollTrigger: {
          trigger: ".contact-footer",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "back.out(1.5)",
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact grid-bg" id="contact" ref={contactRef}>
      <div className="contact-header">
        <span className="section-label">CONTATO</span>
        <span className="section-number">05 / 05</span>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2 className="section-title contact-title">
            Vamos entrar <span className="highlight">EM CONTATO.</span>
          </h2>
          <p className="contact-desc">
            Tem um projeto em mente? Quer construir algo incrível juntos?
            Mande uma mensagem e vamos conversar sobre como posso te ajudar.
          </p>

          <div className="contact-links">
            <a href="mailto:manuborges@gmail.com" className="btn-primary">
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/isabelle-borges-08648439a"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/IsabelleBorges26"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <div className="footer-big-text">
          <span>I</span><span>S</span><span>A</span><span>B</span><span>E</span><span>L</span><span>L</span><span>E</span><span>.</span>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ISABELLE BORGES</span>
        </div>
      </footer>
    </section>
  );
}

export default Contact;