import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../styles/skills.css";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-number", {
        scrollTrigger: {
          trigger: ".skills",
          start: "top 70%",
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
      });

      gsap.from(".skills-title", {
        scrollTrigger: {
          trigger: ".skills",
          start: "top 65%",
        },
        opacity: 0,
        y: 70,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 75%",
        },
        opacity: 0,
        y: 50,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".skill-word", {
        scrollTrigger: {
          trigger: ".skills",
          start: "top 50%",
        },
        opacity: 0,
        scale: 0.5,
        rotation: -10,
        duration: 0.8,
        stagger: 0.12,
        ease: "back.out(1.7)",
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="skills" id="habilidades" ref={skillsRef}>
      <div className="skills-top">
        <span className="skills-number">03 / 06</span>

        <span className="skills-label">O QUE EU FAÇO</span>
      </div>

      <div className="skills-heading">
        <p>TECNOLOGIA × CRIATIVIDADE</p>

        <h2 className="skills-title">
          TRANSFORMO
          <br />
          IDEIAS EM
          <br />
          <span>EXPERIÊNCIAS.</span>
        </h2>
      </div>

      <div className="skills-grid">
        <article className="skill-category">
          <div className="skill-category-top">
            <span>01</span>
            <span>FRONTEND</span>
          </div>

          <h3>Interfaces</h3>

          <p>
            Criação de interfaces modernas, responsivas e pensadas para
            proporcionar uma boa experiência ao usuário.
          </p>

          <div className="skill-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Flutter</span>
          </div>
        </article>

        <article className="skill-category">
          <div className="skill-category-top">
            <span>02</span>
            <span>BACKEND</span>
          </div>

          <h3>Estrutura</h3>

          <p>
            Desenvolvimento da parte lógica das aplicações, APIs e sistemas
            responsáveis por conectar diferentes partes de um projeto.
          </p>

          <div className="skill-list">
            <span>Node.js</span>
            <span>Express</span>
            <span>APIs</span>
          </div>
        </article>

        <article className="skill-category">
          <div className="skill-category-top">
            <span>03</span>
            <span>DADOS</span>
          </div>

          <h3>Organização</h3>

          <p>
            Estruturação e gerenciamento de dados para transformar informações
            em aplicações funcionais e organizadas.
          </p>

          <div className="skill-list">
            <span>SQLite</span>
            <span>Prisma</span>
            <span>Banco de Dados</span>
          </div>
        </article>

        <article className="skill-category">
          <div className="skill-category-top">
            <span>04</span>
            <span>WORKFLOW</span>
          </div>

          <h3>Processo</h3>

          <p>
            Ferramentas que fazem parte do meu processo de desenvolvimento,
            organização e evolução dos projetos.
          </p>

          <div className="skill-list">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
          </div>
        </article>
      </div>

      <div className="skills-floating">
        <span className="skill-word word-one">CODE</span>
        <span className="skill-word word-two">BUILD</span>
        <span className="skill-word word-three">CREATE</span>
      </div>

      <div className="skills-bottom">
        <span>APRENDENDO CONSTANTEMENTE</span>

        <span>DESENVOLVIMENTO · DESIGN · TECNOLOGIA</span>
      </div>
    </section>
  );
}

export default Skills;