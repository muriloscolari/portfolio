import { useState, useEffect } from 'react';
import './index.css';

// --- Data extracted from CV ---
const skills = {
  languages: ['Python', 'JavaScript (Node.js)', 'Java (Spring Boot)', 'PHP', 'C'],
  webAndData: ['HTML5', 'CSS3 (Tailwind)', 'PostgreSQL', 'MySQL', 'REST APIs'],
  tools: ['Git', 'Docker', 'Linux (Arch/Ubuntu Server)', 'Neovim', 'Postman'],
};

const projects = [
  {
    title: 'QRPass: Gestão de Eventos e PIX',
    description: 'Sistema completo para gerenciamento de eventos, focado em segurança e agilidade no acesso. Implementei a criação de ingressos com QR Codes únicos e um sistema de validação instantânea via Scanner Web. Dashboards em tempo real para controle de estatísticas e faturamento, integrando pagamentos automáticos via PIX.',
    tags: ['Python', 'Flask', 'PostgreSQL', 'Tailwind CSS', 'JavaScript', 'Boto3', 'Gateway de Pagamento PIX'],
    link: 'https://github.com/muriloscolari/AttendanceManager'
  },
  {
    title: 'SisuData: Consultas Avançadas SISU + ENEM',
    description: 'Aplicação web para consultas inteligentes de aprovados no SISU 2025. Criei um algoritmo de matching probabilístico para cruzar bases de dados públicas do SISU com microdados do ENEM. Construí um scraper em Python para automação da coleta de dados e uma API REST em Node.js/Express para gerenciar filtros e rankings.',
    tags: ['Python', 'Node.js', 'Express', 'PostgreSQL', 'Scraper', 'JavaScript'],
    link: 'https://github.com/muriloscolari/SisuFinderNode'
  },
  {
    title: 'Guess the Song: Multiplayer Real-time',
    description: 'Jogo multiplayer em tempo real onde os usuários competem para adivinhar músicas de playlists do Spotify. Utilizei a arquitetura de WebSockets para garantir comunicação instantânea entre os jogadores e salas privadas. Integrei a API do Spotify (Spotipy) e yt-dlp para busca de faixas, com sistema de pontuação dinâmica baseada na velocidade de resposta.',
    tags: ['Python', 'FastAPI', 'WebSockets', 'Spotipy', 'yt-dlp', 'Tailwind CSS'],
    link: 'https://github.com/muriloscolari/GuessSong'
  }
];

const education = [
  {
    degree: 'Engenharia da Computação',
    institution: 'UNICEP São Carlos',
    status: '3º Semestre (Conclusão: 2028)'
  },
  {
    degree: 'Técnico em Informática para Internet',
    institution: 'IFSP São Carlos',
    status: 'Concluído em 2024'
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id') || '';
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Background Shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo cursor-pointer" onClick={() => scrollTo('home')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="logo-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            Murilo<span className="accent">.dev</span>
          </div>
          <ul className="nav-links">
            <li className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollTo('home')}>Início</li>
            <li className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollTo('about')}>Sobre</li>
            <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollTo('skills')}>Habilidades</li>
            <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollTo('projects')}>Projetos</li>
            <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollTo('contact')}>Contato</li>
          </ul>
        </div>
      </nav>

      <main className="content-wrapper">

        {/* HERO SECTION */}
        <section id="home" className="hero-section glass-panel">
          <div className="hero-content">
            <span className="greeting">Olá, eu sou o</span>
            <h1 className="name-title">Murilo Vaz de Lara Scolari</h1>
            <h2 className="role-title">Desenvolvedor <span className="accent">Full Stack</span></h2>
            <p className="hero-description">
              Criando sistemas escaláveis, backends robustos e integrações inteligentes.<br />
              Aberto a oportunidades de Estágio ou vaga Júnior.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => scrollTo('projects')}>
                Ver Projetos
              </button>
              <button className="secondary-btn" onClick={() => scrollTo('contact')}>
                Falar Comigo
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT & EDUCATION SECTION */}
        <section id="about" className="about-section glass-panel">
          <div className="section-header">
            <h2>Sobre Mim <span className="accent">&</span> Formação</h2>
            <div className="header-line"></div>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Sou um Desenvolvedor Full Stack apaixonado por arquitetura de software, com forte foco no desenvolvimento back-end e sistemas web escaláveis.
                Tenho experiência prática no desenvolvimento de APIs RESTful, integrações complexas como gateways de pagamento (PIX), aplicações em tempo real com WebSockets (Node.js/Python) e raspagem de dados.
              </p>
              <p>
                Estou constantemente aprimorando minhas habilidades, buscando ferramentas modernas e melhores práticas para construir aplicações resilientes, rápidas e seguras.
              </p>
            </div>

            <div className="education-timeline">
              <h3>Formação Acadêmica</h3>
              {education.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <p className="institution">{edu.institution}</p>
                    <span className="timeline-date">{edu.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="skills-section glass-panel">
          <div className="section-header">
            <h2>Habilidades <span className="accent">Técnicas</span></h2>
            <div className="header-line"></div>
          </div>

          <div className="skills-container">
            <div className="skill-category">
              <div className="category-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <h3>Linguagens</h3>
              </div>
              <div className="skill-tags">
                {skills.languages.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
                <h3>Web & Dados</h3>
              </div>
              <div className="skill-tags">
                {skills.webAndData.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.322m-2.492 3.322l-3.322 2.492m9.444-9.444l-6.83-6.83m6.83 6.83l-3.322 2.492m-3.508-4.984l-2.492 3.322M6.16 7.64L2.25 3.73m3.91 3.91l2.492-3.322m-2.492 3.322l-3.322 2.492" />
                </svg>
                <h3>Ferramentas</h3>
              </div>
              <div className="skill-tags">
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <div className="category-header">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                </svg>
                <h3>Idiomas</h3>
              </div>
              <div className="skill-tags">
                <span className="skill-tag accent-tag">Inglês B2 (Avançado)</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="projects-section glass-panel">
          <div className="section-header">
            <h2>Meus <span className="accent">Projetos</span></h2>
            <div className="header-line"></div>
          </div>

          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div key={idx} className="project-card">
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="p-tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="project-footer">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>Acessar Projeto</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section glass-panel">
          <div className="section-header center">
            <h2>Vamos <span className="accent">Conversar?</span></h2>
            <div className="header-line center"></div>
            <p className="contact-subtitle">Sinta-se livre para entrar em contato para oportunidades, perguntas ou apenas para dar um oi!</p>
          </div>

          <div className="contact-cards">
            <a href="mailto:murilovazscolari6@gmail.com" className="c-card">
              <div className="c-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="c-info">
                <span>E-mail</span>
                <strong>murilovazscolari6@gmail.com</strong>
              </div>
            </a>

            <a href="https://wa.me/5519988066624" target="_blank" rel="noopener noreferrer" className="c-card">
              <div className="c-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.869l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="c-info">
                <span>Telefone / WhatsApp</span>
                <strong>(19) 98806-6624</strong>
              </div>
            </a>

            <div className="c-card">
              <div className="c-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="c-info">
                <span>Localização</span>
                <strong>São Carlos, SP</strong>
              </div>
            </div>
          </div>

          <div className="social-links-large">
            <a href="https://linkedin.com/in/murilo-scolari/" target="_blank" rel="noopener noreferrer" className="s-link-large" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/muriloscolari" target="_blank" rel="noopener noreferrer" className="s-link-large" title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>

      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Murilo Vaz de Lara Scolari. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
