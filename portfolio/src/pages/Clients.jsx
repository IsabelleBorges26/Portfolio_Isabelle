import "../styles/clients.css";

const technologies = [
  {
    category: "FRONTEND",
    items: "HTML · CSS · JavaScript · Vite",
  },
  {
    category: "BACKEND",
    items: "Node.js · Express · Prisma · APIs REST",
  },
  {
    category: "DATABASE",
    items: "MySQL · MariaDB · SQLite · SQL",
  },
  {
    category: "MOBILE",
    items: "Flutter · Dart",
  },
  {
    category: "TOOLS",
    items: "Git · GitHub · Firebase",
  },
];

function Clients() {
  return (
    <section className="clients">
      <div className="clients-marquee">
        <div className="marquee-content">
          {technologies.map((tech, index) => (
            <div className="tech-group" key={index}>
              <span className="tech-category">{tech.category}</span>
              <span className="tech-items">{tech.items}</span>
            </div>
          ))}

          {technologies.map((tech, index) => (
            <div className="tech-group" key={`dup-${index}`}>
              <span className="tech-category">{tech.category}</span>
              <span className="tech-items">{tech.items}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;