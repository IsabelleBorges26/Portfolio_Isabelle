import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/projects.css";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: "01",
    title: "ENTRELINHAS",
    client:
      "Plataforma para vestibulandos que utiliza inteligência artificial para auxiliar na construção de redações, sugerindo argumentos, repertórios e ideias a partir do tema e das referências escolhidas pelo usuário.",
    role: "Fullstack",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vite",
      "GSAP",
      "Groq API",
      "Books API",
      "Vercel",
      "Node.js",
      "Express",
      "Prisma"
    ],
    url: "https://entrelinhas-kappa-silk.vercel.app/",
    imgColor: "var(--neon-pink)",
    src: "/1.png"
  },
  {
    id: "02",
    title: "MAGIC PLAY",
    client:
      "Jogo interativo inspirado em Pedra, Papel e Tesoura, desenvolvido em parceria, com uma proposta diferente e uma experiência mais dinâmica e divertida.",
    role: "Frontend",
    tech: [
      "HTML5 Canvas",
      "CSS",
      "JavaScript",
      "Web Audio API"
    ],
    url: "https://isabelleborges26.github.io/Magic_Play/",
    imgColor: "var(--neon-lime)",
    src: "/2.png"
  },
  {
    id: "03",
    title: "ALBUM DA COPA",
    client:
      "Álbum virtual inspirado em coleções de figurinhas da Copa, permitindo cadastrar jogadores e organizar a coleção de forma interativa.",
    role: "Frontend",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase Authentication",
      "Firebase Firestore"
    ],
    url: "https://isabelleborges26.github.io/Album_da_Copa/",
    imgColor: "var(--dark-card)",
    src: "/3.png"
  },
  {
    id: "04",
    title: "CADERNO DE RESUMOS",
    client:
      "Plataforma criada para organizar meus estudos, reunindo resumos e conteúdos das provas da semana em um único espaço digital.",
    role: "Frontend",
    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    url: "https://isabelleborges26.github.io/resumos/",
    imgColor: "var(--dark-card)",
    src: "/4.png"
  },
  {
    id: "05",
    title: "DISNEY MOVIES",
    client:
      "Sistema inspirado em uma locadora de filmes, desenvolvido para realizar o cadastro e o gerenciamento de títulos de forma digital.",
    role: "Fullstack",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "Prisma"
    ],
    url: "https://isabelleborges26.github.io/Disney_Movies/",
    imgColor: "var(--dark-card)",
    src: "/5.png"
  },
  {
    id: "06",
    title: "SIMULADOR DE ULTRASSOM",
    client:
      "Simulador educativo desenvolvido em grupo para representar, de forma interativa, o funcionamento de um exame de ultrassom em uma gestante.",
    role: "Frontend",
    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    url: "https://simula-o-ultrassom.vercel.app/",
    imgColor: "var(--dark-card)",
    src: "/6.png"
  },
  {
    id: "07",
    title: "DAILY CHECK",
    client:
      "Aplicação desenvolvida como avaliação no SENAI, integrando uma API para identificar a temperatura do ambiente e um sistema para registrar e acompanhar tarefas.",
    role: "Frontend",
    tech: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    url: "https://daily-check-bx78d3prn-isabelleborges26s-projects.vercel.app/index.html",
    imgColor: "var(--dark-card)",
    src: "/7.png"
  }
];

/* =========================================================
   REPOSITÓRIOS FLUTTER
   ========================================================= */

const flutterRepositories = [
  {
    title: "Cadastro de Pessoas",
    description:
      "O aplicativo permite cadastrar pessoas, consultar automaticamente os dados de endereço através do CEP e salvar os cadastros localmente no dispositivo.",
    repo: "https://github.com/IsabelleBorges26/Atividade1_CEP"
  },
  {
    title: "Gerenciador de Galeria",
    description:
      "Aplicativo desenvolvido em Flutter para tirar fotos utilizando a câmera do dispositivo e organizar uma galeria de momentos. Cada foto pode receber uma anotação, ser visualizada em detalhes, compartilhada ou excluída.",
    repo: "https://github.com/IsabelleBorges26/Gerenciador_Galeria_Flutter"
  },
  {
    title: "Abastecimento de Veículos",
    description:
      "O aplicativo permite adicionar, editar e excluir abastecimentos, calcular o preço médio por litro, o consumo médio do veículo e visualizar um gráfico comparativo dos registros.",
    repo: "https://github.com/IsabelleBorges26/AbastecimentoVeiculos_Flutter"
  },
  {
    title: "Consumo de Água",
    description:
      "O aplicativo permite adicionar, editar e excluir registros, calcular a meta diária de consumo com base no peso e visualizar um gráfico comparativo dos registros.",
    repo: "https://github.com/IsabelleBorges26/ConsumoAgua_Flutter"
  },
  {
    title: "Caminhadas",
    description:
      "O aplicativo permite adicionar, editar e excluir caminhadas, calcular as calorias gastas e visualizar um gráfico comparativo entre os registros.",
    repo: "https://github.com/IsabelleBorges26/CaminhadaCaloria_Flutter"
  },
  {
    title: "Quiz Outlander",
    description:
      "App de quiz sobre Outlander usando JSON local.",
    repo: "https://github.com/IsabelleBorges26/Quiz_Flutter_Outlander"
  }
];

function Projects() {
  const projectsRef = useRef(null);

  const [activeProject, setActiveProject] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-list",
          start: "top 80%"
        },
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="projects grid-bg"
      id="projects"
      ref={projectsRef}
    >
      <div className="projects-header">
        <span className="section-label">PROJETOS</span>
        <span className="section-number">03 / 05</span>
      </div>

      <h2 className="section-title projects-title">
        O QUE EU <span className="highlight">CONSTRUÍ.</span>
      </h2>

      <div className="projects-list">
        {projectsData.map((proj) => (
          <div
            key={proj.id}
            className={`project-card ${
              activeProject === proj.id ? "expanded" : ""
            }`}
            onClick={() =>
              setActiveProject(
                activeProject === proj.id ? null : proj.id
              )
            }
          >
            <div className="project-info">
              <div className="project-meta">
                <span>{proj.id}</span>

                <span className="project-client">
                  {proj.client}
                </span>
              </div>

              <h3>{proj.title}</h3>

              <div className="project-details">
                <div className="tech-stack">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="tech-pill"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visitar ↗
                </a>
              </div>
            </div>

            <div className="project-visual-wrapper">
              <div
                className="project-visual"
                style={{
                  background: proj.imgColor,
                  backgroundImage: `url(${proj.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* =====================================================
          REPOSITÓRIOS FLUTTER
          ===================================================== */}

      <div className="repositories-section">
        <div className="projects-header">
          <span className="section-label">REPOSITÓRIOS</span>
        </div>

        <h2 className="section-title">
          REPOSITÓRIOS{" "}
          <span className="highlight">FLUTTER.</span>
        </h2>

        <div className="repositories-list">
          {flutterRepositories.map((repository) => (
            <div
              className="repository-card"
              key={repository.title}
            >
              <div className="repository-info">
                <h3>{repository.title}</h3>

                <p>{repository.description}</p>

                <a
                  href={repository.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Ver repositório ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;