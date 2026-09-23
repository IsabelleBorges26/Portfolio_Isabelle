import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/services.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    title: "FRONTEND",
    desc: "Criação de interfaces modernas, responsivas e pensadas para proporcionar uma boa experiência ao usuário utilizando React, JavaScript e CSS avançado."
  },
  {
    num: "02",
    title: "BACKEND",
    desc: "Desenvolvimento da parte lógica das aplicações, APIs e sistemas usando Node.js, Express e bancos de dados para conectar tudo."
  },
  {
    num: "03",
    title: "MOBILE",
    desc: "Desenvolvimento de aplicativos móveis utilizando Flutter, construindo soluções multiplataforma com alta performance."
  }
];

function Services() {
  const servicesRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-item", {
        scrollTrigger: {
          trigger: ".services-list",
          start: "top 80%",
        },
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services" id="services" ref={servicesRef}>
      <div className="services-header">
        <span className="section-label">SERVIÇOS</span>
        <span className="section-number">02 / 05</span>
      </div>

      <div className="services-content">
        <h2 className="section-title services-title">
          O QUE EU <span className="highlight">FAÇO.</span>
        </h2>

        <div className="services-list">
          {services.map((srv, idx) => (
            <div 
              className={`service-item ${hoveredIndex === idx ? 'active' : ''}`}
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="service-num">{srv.num}</div>
              <div className="service-text">
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
              <div className="service-arrow">↘</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
