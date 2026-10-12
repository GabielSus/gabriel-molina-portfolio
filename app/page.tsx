import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight, BrainCircuit, Cloud, Code2, Database, Github, GraduationCap, Linkedin, Mail, MessageSquareText, Server, Sparkles, Wrench } from 'lucide-react';
import { ProjectCard } from '../components/project-card';
import { SiteHeader } from '../components/site-header';
import { SiteFooter } from '../components/site-footer';
import { profile, projects } from '../lib/site';

const skills = [
  { n: '01', title: 'Backend & APIs', description: 'Lógica de negocio, servicios y endpoints.', Icon: Server, items: ['Python', 'FastAPI', 'Flask', 'Node.js', 'Express', 'REST APIs'], proof: 'Guatemala Export Analytics · Inmetagro 360 · MF360' },
  { n: '02', title: 'Frontend & Mobile', description: 'Interfaces web y experiencias orientadas al producto.', Icon: Code2, items: ['React', 'React Native', 'Expo', 'JavaScript', 'Vite'], proof: 'Inmetagro 360 · Guatemala Export Analytics · MF360' },
  { n: '03', title: 'Datos & Analytics', description: 'Del dato sin procesar a información útil y medible.', Icon: Database, items: ['PostgreSQL', 'SQL', 'Pandas', 'ETL', 'Forecasting'], proof: 'Guatemala Export Analytics · Inmetagro 360' },
  { n: '04', title: 'Infraestructura & Media', description: 'Despliegue, entornos reproducibles y procesamiento multimedia.', Icon: Cloud, items: ['Docker', 'Git', 'Neon', 'Render', 'Vercel', 'FFmpeg', 'Socket.IO'], proof: 'Los tres proyectos seleccionados' },
];

const workStyle = [
  { Icon: BrainCircuit, title: 'Pensamiento analítico', text: 'Valido datos, restricciones y métricas antes de decidir. En forecasting, por ejemplo, comparé modelos con backtesting, MAE y RMSE.' },
  { Icon: Wrench, title: 'Resolución de problemas', text: 'Cuando una decisión técnica falla, investigo la causa y ajusto la solución. MF360 pasó a una capa de cámara estable después de aislar un crash nativo.' },
  { Icon: MessageSquareText, title: 'Comunicación técnica', text: 'Busco explicar arquitectura y decisiones en términos de problema, impacto y resultado, no solo enumerar tecnologías.' },
  { Icon: GraduationCap, title: 'Aprendizaje continuo', text: 'Cada proyecto me obliga a conectar nuevas herramientas con fundamentos de backend, datos, interfaces y arquitectura.' },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <div className="container">
          <section className="hero hero-with-photo" aria-labelledby="hero-title">
            <div className="hero-content">
              <div className="eyebrow"><span className="eyebrow-line" /> SOFTWARE DEVELOPER <span className="eyebrow-separator">/</span> GUATEMALA</div>
              <h1 id="hero-title">Construyo software.<br/><span className="hero-gradient">Transformo datos.</span><br/>Creo soluciones.</h1>
              <p>Hola, soy <strong>Gabriel Molina</strong>. Desarrollo productos Full Stack, sistemas backend y plataformas de análisis de datos, desde la idea y la arquitectura hasta su despliegue.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explorar proyectos <ArrowUpRight size={18}/></a>
                <a className="button button-outline" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub</a>
                <a className="button button-outline" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17}/> LinkedIn</a>
              </div>
              <div className="hero-bottom"><span className="hero-availability"><i/> Abierto a oportunidades</span><a href="#projects" className="hero-scroll">Desliza para explorar <ArrowDownRight size={16}/></a></div>
            </div>
            <aside className="profile-portrait" aria-label="Gabriel Molina, Software Developer">
              <div className="portrait-frame"><Image src="/images/gabriel-molina.jpg" alt="Gabriel Molina" width={477} height={636} priority /></div>
              <div className="portrait-meta"><div><span>GABRIEL MOLINA</span><strong>Software Developer</strong></div><i>GM.</i></div>
              <div className="portrait-tags"><span>Full Stack</span><span>Backend</span><span>Data Analytics</span></div>
            </aside>
          </section>

          <section id="projects" className="section projects-section" aria-labelledby="projects-title">
            <div className="section-intro"><div><div className="eyebrow">01 / TRABAJO SELECCIONADO</div><h2 id="projects-title">Proyectos que hablan <span>por sí solos.</span></h2></div><p>Cada proyecto conecta tecnologías con decisiones concretas: qué problema resolví, cómo diseñé la arquitectura y por qué elegí cada herramienta.</p></div>
            <div className="project-list">{projects.map((project) => <ProjectCard project={project} key={project.id}/>)}</div>
          </section>

          <section id="about" className="section about-section" aria-labelledby="about-title">
            <div className="about-copy"><div className="eyebrow">02 / SOBRE MÍ</div><h2 id="about-title">Me gusta llevar las ideas <span>hasta que funcionan.</span></h2><p>Soy estudiante de Ingeniería en Sistemas en la Universidad Mariano Gálvez de Guatemala, actualmente cerrando el sexto semestre. Me interesa resolver problemas reales conectando interfaces, servicios, bases de datos, procesamiento y análisis.</p><p>No busco aplicar la misma arquitectura a todo. Prefiero entender las restricciones del producto y elegir una solución que tenga sentido para su operación, mantenimiento y despliegue.</p><a className="inline-link" href={`mailto:${profile.email}`}>Conversemos <ArrowUpRight size={17}/></a></div>
            <div className="about-side"><div className="about-education"><span className="mini-label">EDUCACIÓN</span><div className="education-icon">UMG</div><h3>Universidad Mariano Gálvez de Guatemala</h3><p>Ingeniería en Sistemas</p><div className="education-foot"><span>6.º semestre</span><span>En curso</span></div></div><div className="about-principle"><Sparkles size={18}/><span>De la arquitectura al producto: diseño, datos, desarrollo y despliegue.</span></div></div>
          </section>

          <section id="stack" className="section stack-section" aria-labelledby="stack-title">
            <div className="section-intro"><div><div className="eyebrow">03 / STACK COMPROBABLE</div><h2 id="stack-title">Tecnologías respaldadas <span>por proyectos reales.</span></h2></div><p>No uso barras de porcentaje. Prefiero mostrar dónde utilicé cada tecnología y qué papel tuvo dentro del producto.</p></div>
            <div className="skill-grid">{skills.map(({n,title,description,Icon,items,proof}) => <article className="skill-card" key={title}><div className="skill-card-top"><div className="skill-icon"><Icon size={23} strokeWidth={1.7}/></div><span className="skill-number">{n}</span></div><h3>{title}</h3><p>{description}</p><div className="skill-tags">{items.map((item)=><span key={item}>{item}</span>)}</div><div className="skill-proof"><small>USADO EN</small><span>{proof}</span></div></article>)}</div>
          </section>

          <section className="section work-style-section" aria-labelledby="work-style-title">
            <div className="section-intro"><div><div className="eyebrow">04 / CÓMO TRABAJO</div><h2 id="work-style-title">Habilidades que se ven <span>en las decisiones.</span></h2></div><p>Las habilidades blandas tienen más valor cuando pueden conectarse con situaciones reales del desarrollo.</p></div>
            <div className="work-style-grid">{workStyle.map(({Icon,title,text}, index) => <article className="work-style-card" key={title}><span className="work-style-index">0{index + 1}</span><Icon size={22}/><h3>{title}</h3><p>{text}</p></article>)}</div>
          </section>

          <section id="contact" className="section contact-section" aria-labelledby="contact-title">
            <div className="contact-orbit" aria-hidden="true"/><div className="eyebrow">05 / CONTACTO</div><h2 id="contact-title">¿Construimos <span>algo juntos?</span></h2><p>Estoy abierto a oportunidades y conversaciones sobre desarrollo Full Stack, backend y análisis de datos.</p><a className="button button-primary contact-button" href={`mailto:${profile.email}`}><Mail size={18}/> {profile.email} <ArrowUpRight size={18}/></a><div className="contact-socials"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={15}/></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15}/></a></div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
