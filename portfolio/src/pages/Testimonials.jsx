import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: "Trabalhar com a Isabelle foi incrível. Ela transformou nossa ideia em um produto final que excedeu todas as expectativas, sempre com muita atenção aos detalhes.",
    name: "João Silva",
    role: "CEO na TechStartup",
    color: "var(--neon-lime)"
  },
  {
    id: 2,
    text: "O nível de comprometimento e a qualidade do código entregue são fora de série. O projeto foi concluído no prazo e com um design impecável.",
    name: "Marina Costa",
    role: "Design Lead",
    color: "var(--neon-pink)"
  },
  {
    id: 3,
    text: "Uma desenvolvedora excepcional que sabe unir estética com funcionalidade. A comunicação durante o projeto foi fluida e muito profissional.",
    name: "Carlos Mendes",
    role: "Product Manager",
    color: "var(--blue)"
  }
];

function Testimonials() {
  const testimonialsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        rotation: 5,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.2)",
      });
    }, testimonialsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="testimonials" id="testimonials" ref={testimonialsRef}>
      <div className="testimonials-header">
        <span className="section-label">TESTIMONIALS</span>
        <span className="section-number">04 / 05</span>
      </div>

      <h2 className="section-title testimonials-title">
        WHAT CLIENTS <span className="highlight">ARE SAYING.</span>
      </h2>

      <div className="testimonials-grid">
        {testimonials.map((testi) => (
          <div className="testimonial-card" key={testi.id} style={{ borderColor: testi.color }}>
            <div className="quote-icon" style={{ color: testi.color }}>"</div>
            <p className="testimonial-text">{testi.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: testi.color }}></div>
              <div className="author-info">
                <h4>{testi.name}</h4>
                <span>{testi.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
