import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/timeline.css";

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  {
    year: "2024",
    title: "PRIMEIROS PASSOS",
    text: "Comecei a me aproximar da tecnologia e a descobrir o desenvolvimento de software como uma área em que poderia unir lógica e criatividade.",
  },
  {
    year: "2025",
    title: "APRENDIZADO",
    text: "Passei a desenvolver projetos acadêmicos e pessoais, explorando desenvolvimento web, mobile, bancos de dados e diferentes tecnologias.",
  },
  {
    year: "2026",
    title: "CONSTRUINDO",
    text: "Aprofundei meus conhecimentos através de projetos mais completos e comecei a transformar o que aprendo em experiências digitais próprias.",
  },
];

function Timeline() {
  const timelineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-number", {
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 70%",
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
      });

      gsap.from(".timeline-heading", {
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 65%",
        },
        opacity: 0,
        y: 60,
        duration: 0.9,
      });

      gsap.from(".timeline-item", {
        scrollTrigger: {
          trigger: ".timeline-list",
          start: "top 75%",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="timeline" id="trajetoria" ref={timelineRef}>
      <div className="timeline-top">
        <span className="timeline-number">05 / 06</span>

        <span className="timeline-label">MINHA TRAJETÓRIA</span>
      </div>

      <div className="timeline-heading">
        <p>EM CONSTANTE CONSTRUÇÃO</p>

        <h2>
          DE ONDE
          <br />
          <span>EU VIM.</span>
        </h2>
      </div>

      <div className="timeline-list">
        {timeline.map((item, index) => (
          <article className="timeline-item" key={item.year}>
            <div className="timeline-year">
              <span>{item.year}</span>
            </div>

            <div className="timeline-marker">
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>

            <div className="timeline-content">
              <span className="timeline-content-label">
                ETAPA {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="timeline-bottom">
        <span>APRENDER · EXPERIMENTAR · EVOLUIR</span>

        <span>05 / 06</span>
      </div>
    </section>
  );
}

export default Timeline;