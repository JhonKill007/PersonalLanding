import { useState } from "react";
import Feed from "./assets/proyects/feed.jpeg";
import Explorer from "./assets/proyects/explorer.jpeg";
import Message from "./assets/proyects/messages.jpeg";
import Perfil from "./assets/proyects/perfil.jpeg";
import Sophie from "./assets/proyects/sophie.png";
import Execuatur from "./assets/proyects/execuatur.png";
import Yo from "./assets/proyects/Yo.jpg";
import "./App.css";

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);

  const aycoroScreens = [
    {
      name: "Feed",
      image: Feed,
      description: "Publicaciones, historias e interacción social.",
    },
    {
      name: "Explorar",
      image: Explorer,
      description: "Descubrimiento de usuarios, publicaciones y tendencias.",
    },
    {
      name: "Mensajes",
      image: Message,
      description: "Conversaciones entre usuarios en tiempo real.",
    },
    {
      name: "Perfil",
      image: Perfil,
      description: "Perfil de usuario, publicaciones y personalización.",
    },
  ];

  const technologies = [
    "C#",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "PHP",
    "React",
    "React Native",
    "Vue.js",
    "ASP.NET Core",
    "Node.js",
    "GraphQL",
    "Laravel",
    "Jakarta EE",
    "SQL Server",
    "MySQL",
    "Oracle",
    "MongoDB",
    "Docker",
    "Ubuntu",
    "Nginx",
    "Git",
  ];

  const experiences = [
    {
      company: "CDF DOMITAB",
      role: "Ingeniero de Software Full Stack",
      date: "Feb 2025 – Jun 2026",
      description:
        "Diseño y desarrollo de un sistema empresarial para recepción, manejo, inventario y despacho de mercancías utilizando Node.js, TypeScript, Sequelize, GraphQL y SQL.",
    },
    {
      company: "CAMSOFT",
      role: "Ingeniero de Software",
      date: "Feb 2022 – Jul 2024",
      description:
        "Desarrollo de aplicaciones empresariales, APIs y soluciones web utilizando .NET, React y SQL Server para empresas del Grupo Mallén.",
    },
    {
      company: "Ministerio de Hacienda",
      role: "Técnico en Programación",
      date: "May 2023 – Feb 2024",
      description:
        "Desarrollo y mantenimiento de sistemas institucionales orientados a la automatización de procesos gubernamentales.",
    },
  ];

  const projects = [
    {
      title: "Sistema Integral de Gestión de Empleados",
      subtitle: "Reclutamiento y Nómina",
      image: Sophie,
      description:
        "Sistema integral para gestión de empleados, reclutamiento, administración de personal y procesamiento de nómina.",
      stack: [".NET", "React", "SQL Server"],
    },
    {
      title: "Aplicación de Solicitud de Exequátur",
      subtitle: "Ministerio de Hacienda",
      image: Execuatur,
      description:
        "Aplicación para la gestión, seguimiento y aprobación de solicitudes de exequátur para profesionales.",
      stack: ["Jakarta EE", "Oracle Database"],
    },
  ];

  return (
    <main className="page">
      <nav className="navbar">
        <div>
          <strong>Jhon David</strong>
          <span>Full Stack Software Engineer</span>
        </div>

        <div className="nav-links">
          <a href="#about">Sobre mí</a>
          <a href="#aycoro">Aycoro</a>
          <a href="#experience">Experiencia</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <section className="hero">
        <div className="avatar">
          <img
            src={Yo}
            style={{ width: "100%", height: "100%", borderRadius: "100%" }}
          />
        </div>

        <p className="eyebrow">Full Stack Software Engineer</p>

        <h1>Jhon David Mesa Guillén</h1>

        <p className="hero-description">
          Ingeniero y Desarrollador de Software Full Stack con más de 4 años de
          experiencia creando aplicaciones web, móviles, APIs y sistemas
          empresariales.
        </p>

        <div className="hero-actions">
          <a href="mailto:jhondavidmesaguillen@gmail.com">Contactarme</a>
          <a href="https://aycoro.com" target="_blank" rel="noreferrer">
            Ver Aycoro
          </a>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>4+</strong>
          <span>Años de experiencia</span>
        </div>
        <div>
          <strong>22+</strong>
          <span>Tecnologías</span>
        </div>
        <div>
          <strong>Full Stack</strong>
          <span>Web · Mobile · Backend</span>
        </div>
        <div>
          <strong>Aycoro</strong>
          <span>Proyecto principal</span>
        </div>
      </section>

      <section className="section" id="about">
        <h2>Sobre mí</h2>
        <p>
          Especializado en .NET, Node.js, React, React Native, GraphQL, SQL y
          MongoDB. Fundador y desarrollador principal de Aycoro, una plataforma
          de red social desarrollada íntegramente desde cero.
        </p>
      </section>

      <section className="section">
        <h2>Tecnologías</h2>

        <div className="tech-grid">
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>

      <section className="section" id="aycoro">
        <h2>Proyecto principal</h2>

        <div className="aycoro-showcase">
          <div className="aycoro-info">
            <p className="eyebrow">Founder & Lead Developer</p>

            <h3>Aycoro</h3>

            <p>
              La primera red social desarrollada completamente en República
              Dominicana. Diseñé y desarrollé su ecosistema completo: API
              principal, aplicación móvil, aplicación web, servicio de correos,
              API administrativa, panel de gestión e infraestructura.
            </p>

            <div className="mini-stack">
              <span>ASP.NET Core</span>
              <span>React Native</span>
              <span>React TS</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>SignalR</span>
              <span>Docker</span>
              <span>Nginx</span>
            </div>

            <div className="screen-tabs">
              {aycoroScreens.map((screen, index) => (
                <button
                  key={screen.name}
                  className={activeScreen === index ? "active" : ""}
                  onClick={() => setActiveScreen(index)}
                >
                  {screen.name}
                </button>
              ))}
            </div>
          </div>

          <div className="phone-preview">
            <div className="phone-frame">
              <div className="phone-notch" />
              <img
                src={aycoroScreens[activeScreen].image}
                alt={aycoroScreens[activeScreen].name}
              />
            </div>

            <div className="screen-info">
              <h4>{aycoroScreens[activeScreen].name}</h4>
              <p>{aycoroScreens[activeScreen].description}</p>
            </div>
          </div>
        </div>

        <div className="screen-gallery">
          {aycoroScreens.map((screen, index) => (
            <button
              key={screen.name}
              className={activeScreen === index ? "active-thumb" : ""}
              onClick={() => setActiveScreen(index)}
            >
              <img src={screen.image} alt={screen.name} />
              <span>{screen.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <h2>Experiencia profesional</h2>

        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={item.company}>
              <span>{item.date}</span>
              <h3>{item.company}</h3>
              <h4>{item.role}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Otros proyectos destacados</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.description}</p>

                <div className="mini-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section education">
        <h2>Formación y certificaciones</h2>

        <div className="education-grid">
          <div>
            <h3>ITLA</h3>
            <p>Tecnólogo en Desarrollo de Software</p>
          </div>

          <div>
            <h3>UNICDA</h3>
            <p>Ingeniería de Software — En curso</p>
          </div>

          <div>
            <h3>Udemy</h3>
            <p>React Native CLI: Aplicaciones Nativas para iOS y Android</p>
          </div>

          <div>
            <h3>Udemy</h3>
            <p>React: De Cero a Experto — Hooks y MERN</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contacto</h2>

        <p>
          ¿Tienes un proyecto, una oportunidad laboral o simplemente quieres
          conversar sobre tecnología? Estaré encantado de conectar contigo.
        </p>

        <div className="contact-links">
          <a href="mailto:jhondavidmesaguillen@gmail.com">📧 Email</a>

          <a href="tel:+18492756806">📱 849-275-6806</a>

          <a
            href="https://www.linkedin.com/in/jhon-david-mesa-guillen-007981264"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/JhonKill007"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
