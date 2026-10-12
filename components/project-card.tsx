import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ProjectVisual } from './project-visuals';
import type { Project } from '../lib/site';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-card-${project.id}`}>
      <div className="project-info">
        <div className="project-index"><span>{project.number} / PROYECTO</span><span className="project-category">{project.category}</span></div>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="project-highlights">
          {project.highlights.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
        </div>
        <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        <div className="project-actions">
          <Link className="text-action" href={`/projects/${project.id}`}>Explorar proyecto <ArrowUpRight size={18}/></Link>
          {project.liveUrl && <a className="subtle-action" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live demo <ExternalLink size={14}/></a>}
        </div>
      </div>
      <Link className="project-image-link" href={`/projects/${project.id}`} aria-label={`Ver caso de estudio de ${project.title}`}>
        <ProjectVisual id={project.id}/>
      </Link>
    </article>
  );
}
