import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <div className="footer-brand">GM<span>.</span></div>
          <p>Software Developer · Full Stack · Data Analytics</p>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Correo electrónico"><Mail size={19} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Gabriel Molina</span>
        <span>Hecho para mostrar el trabajo, no solo el código. <ArrowUpRight size={13} /></span>
      </div>
    </footer>
  );
}
