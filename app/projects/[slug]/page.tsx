import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { SiteHeader } from '../../../components/site-header';
import { SiteFooter } from '../../../components/site-footer';
import { ForecastVisual, MF360Gallery, ProjectVisual } from '../../../components/project-visuals';
import { getProject, profile, projects } from '../../../lib/site';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: `${project.title} | Gabriel Molina`, description: project.summary } : { title: 'Proyecto no encontrado' };
}

const details = {
  'guatemala-export-analytics': {
    eyebrow: 'DATA ENGINEERING / ANALYTICS',
    intro: 'De datos históricos del Banco de Guatemala a una plataforma analítica con ETL, API, dashboard interactivo y forecasting.',
    problem: 'Los datos históricos de exportaciones necesitaban limpieza, normalización y contexto para poder compararse de forma útil. El reto no era solo mostrar gráficas: había que transformar la fuente en un modelo consistente, enriquecer códigos arancelarios y exponer resultados reproducibles.',
    solution: 'Separé el procesamiento ETL, la persistencia, la API analítica y la interfaz. Pandas transforma y valida la fuente; PostgreSQL conserva el modelo; FastAPI expone los indicadores y React presenta la exploración interactiva.',
    decisions: [
      ['ETL separado de la API', 'El procesamiento histórico no pertenece al ciclo de una petición web. Mantenerlo separado permite validar y cargar los datos antes de servirlos.'],
      ['PostgreSQL para el modelo analítico', 'La relación código-año y el catálogo SAC se benefician de estructura, restricciones y consultas SQL reproducibles.'],
      ['Forecasting evaluado, no elegido a ojo', 'Los modelos se comparan mediante backtesting y métricas MAE/RMSE antes de seleccionar la proyección mostrada.'],
    ],
    challenges: [
      ['Calidad del dato', '13,047 filas de origen, incluyendo TOTAL; 13,046 ítems y 313,104 observaciones ítem-año validadas sin nulos ni duplicados.'],
      ['Catálogo oficial', 'Enriquecimiento con 17,322 registros del catálogo SAC para aportar descripciones y contexto arancelario.'],
      ['Producción', 'Frontend, API y base de datos se despliegan de forma independiente en Vercel, Render y Neon.'],
    ],
    flow: ['Fuente Banguat', 'ETL · Pandas', 'PostgreSQL · Neon', 'FastAPI · Render', 'React · Vercel'],
    stack: ['Python', 'Pandas', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'React', 'Vite', 'Docker', 'Pytest', 'Neon', 'Render', 'Vercel'],
    result: 'Una aplicación analítica en producción con indicadores, crecimiento interanual, capítulos, principales productos y pronósticos evaluados con métricas.',
  },
  'inmetagro-360': {
    eyebrow: 'FULL STACK / BUSINESS SOFTWARE',
    intro: 'Una plataforma web para centralizar productos, compras, ventas y usuarios en una misma experiencia de gestión.',
    problem: 'Las operaciones comerciales necesitan una fuente consistente donde registrar y consultar información. El proyecto debía conectar una interfaz web, reglas de negocio, autenticación y persistencia sin mezclar responsabilidades.',
    solution: 'Construí un frontend en React/Vite que consume una API REST en Flask. PostgreSQL conserva la información relacional y Docker permite reproducir el entorno del backend y la base de datos. La solución se despliega separando frontend, API y datos.',
    decisions: [
      ['Frontend y backend desacoplados', 'React se concentra en la experiencia de usuario y Flask en autenticación, reglas y acceso a datos mediante endpoints REST.'],
      ['Base de datos relacional', 'Productos, compras, ventas y usuarios tienen relaciones claras que encajan naturalmente en PostgreSQL.'],
      ['Pruebas y entorno reproducible', 'Pytest valida comportamientos clave y Docker reduce diferencias entre ambientes de desarrollo y ejecución.'],
    ],
    challenges: [
      ['Operaciones conectadas', 'Gestión de productos, compras, ventas y usuarios dentro de una sola aplicación.'],
      ['Autenticación', 'Protección de operaciones mediante Bearer Token.'],
      ['Despliegue', 'Persistencia en Neon, API en Render y frontend en Vercel.'],
    ],
    flow: ['React · Vite', 'API REST · Flask', 'PostgreSQL · Neon', 'Render + Vercel'],
    stack: ['Python', 'Flask', 'React', 'Vite', 'JavaScript', 'PostgreSQL', 'SQL', 'Docker', 'Pytest', 'REST APIs', 'Git', 'Neon', 'Render', 'Vercel'],
    result: 'Aplicación Full Stack desplegada, con separación entre frontend, API y base de datos para soportar flujos de gestión empresarial.',
  },
  'mf360': {
    eyebrow: 'MULTIMEDIA / PRODUCT ENGINEERING',
    intro: 'Una plataforma local-first para operar una cabina PhotoBooth 360: captura móvil, procesamiento multimedia, branding, tiempo real y entrega al invitado.',
    problem: 'En un evento, grabar es solo el inicio. El operador necesita capturar, transferir, procesar y entregar videos rápidamente sin detener la operación si Internet falla. También necesita controlar branding, estados y métricas sin depender de herramientas separadas.',
    solution: 'MF360 conecta una Operator App en React Native/Expo, un backend local Node.js/Express, procesamiento con FFmpeg/FFprobe y un Client Display en React. Socket.IO actualiza la pantalla en tiempo real y Google Drive funciona como proveedor opcional para generar un enlace público de entrega.',
    decisions: [
      ['Local-first para no depender de Internet', 'La PC del evento conserva el video y es la fuente de verdad. La captura y el procesamiento principal continúan aunque la nube no esté disponible.'],
      ['Feature-first + capas internas', 'El backend separa route → controller → service → repository/provider; la app organiza events, camera, videos, branding y system por feature.'],
      ['Drive aislado como DeliveryProvider', 'La entrega cloud queda desacoplada de cámara, eventos y FFmpeg, permitiendo sustituir el proveedor sin rehacer el flujo principal.'],
      ['Estabilidad sobre novedad', 'Tras reproducir un crash nativo con VisionCamera 5/Nitro, se fijó VisionCamera 4.7.3 y se desactivó New Architecture en SDK 54 para estabilizar la captura.'],
    ],
    challenges: [
      ['Video y procesamiento asíncrono', 'El backend recibe el MP4, conserva RAW local y procesa slow motion, branding y salida H.264 sin convertir la petición HTTP en un proceso bloqueante.'],
      ['FPS según hardware', 'MF360 prioriza 1920×1080 y negocia 30/60 FPS con el dispositivo; FFprobe registra el FPS real y FFmpeg evita interpolar cuando el origen ya llega a alta cadencia.'],
      ['Entrega resiliente', 'Si Drive está conectado se sube una copia y el QR usa su enlace público; si falla, el resultado local se conserva para reintento.'],
    ],
    flow: ['Operator · Expo', 'Upload por LAN', 'Node / Express', 'FFmpeg + Storage', 'Drive opcional + QR', 'React Display'],
    stack: ['JavaScript', 'React Native', 'Expo SDK 54', 'VisionCamera', 'Node.js', 'Express', 'Socket.IO', 'FFmpeg', 'FFprobe', 'React', 'Vite', 'QRCode', 'Docker', 'Nginx', 'Google Drive'],
    result: 'Un flujo funcional que lleva una captura móvil hasta un video procesado, personalizado y listo para entregar, manteniendo la operación principal dentro de la red local del evento.',
  },
} as const;

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const content = details[project.id];
  const nextProject = projects[(projects.findIndex((item) => item.id === project.id) + 1) % projects.length];
  return <>
    <SiteHeader inner />
    <main>
      <div className="container case-container">
        <div className="case-breadcrumb"><Link href="/#projects"><ArrowLeft size={15}/> Volver a proyectos</Link><span>/</span><span>{project.title}</span></div>
        <header className="case-hero">
          <div className="eyebrow">{project.number} / CASE STUDY <span className="eyebrow-separator">·</span> {content.eyebrow}</div>
          <h1>{project.title}</h1>
          <p>{content.intro}</p>
          <div className="case-hero-actions"><a href="#overview" className="button button-primary">Explorar el caso <ArrowRight size={17}/></a>{project.liveUrl && <a className="button button-outline" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Abrir aplicación <ExternalLink size={16}/></a>}<a className="button button-outline" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16}/> GitHub</a></div>
        </header>
        <div className="case-showcase"><ProjectVisual id={project.id} large /></div>
        {project.previewNote && <p className="preview-disclaimer">{project.previewNote}</p>}
        <div className="case-stat-grid">{project.highlights.map((item)=><div className="case-stat" key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
        <div id="overview" className="case-content">
          <div className="case-story-row"><div className="case-story-heading"><span>01 / CONTEXTO</span><h2>El problema</h2></div><p>{content.problem}</p></div>
          <div className="case-story-row"><div className="case-story-heading"><span>02 / SOLUCIÓN</span><h2>Cómo lo resolví</h2></div><p>{content.solution}</p></div>
          <div className="case-story-row"><div className="case-story-heading"><span>03 / DECISIONES</span><h2>Por qué esta arquitectura</h2></div><div className="case-challenges">{content.decisions.map(([title, description], index)=><div className="challenge decision" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></div>
          <div className="case-story-row"><div className="case-story-heading"><span>04 / RETOS</span><h2>Problemas técnicos</h2></div><div className="case-challenges">{content.challenges.map(([title, description], index)=><div className="challenge" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></div>)}</div></div>
          <div className="case-story-row"><div className="case-story-heading"><span>05 / ARQUITECTURA</span><h2>Flujo del sistema</h2></div><div className="architecture"><p>Vista simplificada de los componentes principales:</p><div className="architecture-flow">{content.flow.map((step,index)=><div className="flow-pair" key={step}><div className="flow-step"><small>ETAPA {String(index+1).padStart(2,'0')}</small><strong>{step}</strong></div>{index < content.flow.length-1 && <ArrowRight className="flow-arrow" size={18}/>}</div>)}</div></div></div>
          {project.id === 'guatemala-export-analytics' && <div className="case-story-row"><div className="case-story-heading"><span>06 / ANALYTICS</span><h2>Forecasting</h2></div><div><p className="case-paragraph">El módulo proyecta 2026–2028 y muestra el modelo seleccionado, rango estimado y métricas de backtesting. La captura corresponde a una ejecución real del proyecto.</p><ForecastVisual /></div></div>}
          {project.id === 'mf360' && <div className="case-story-row case-gallery-row"><div className="case-story-heading"><span>06 / PRODUCTO</span><h2>MF360 en operación</h2><p>Capturas reales del flujo implementado.</p></div><MF360Gallery /></div>}
          <div className="case-story-row"><div className="case-story-heading"><span>{project.id === 'guatemala-export-analytics' || project.id === 'mf360' ? '07' : '06'} / STACK</span><h2>Tecnologías</h2></div><div className="case-tech-list">{content.stack.map((tech)=><span key={tech}>{tech}</span>)}</div></div>
          <div className="case-story-row case-result-row"><div className="case-story-heading"><span>RESULTADO</span><h2>Del concepto al producto</h2></div><div><p>{content.result}</p><div className="case-result-actions">{project.liveUrl ? <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Ver aplicación <ArrowUpRight size={17}/></a> : <span className="no-live-demo">Case study visual disponible · demo pública no necesaria para este flujo local-first.</span>}</div></div></div>
        </div>
        <Link href={`/projects/${nextProject.id}`} className="next-project"><span>SIGUIENTE PROYECTO</span><strong>{nextProject.title}</strong><ArrowUpRight size={28}/></Link>
      </div>
    </main>
    <SiteFooter />
  </>;
}
