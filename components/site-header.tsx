import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '../lib/site';

export function SiteHeader({ inner = false }: { inner?: boolean }) {
  const href = (anchor: string) => (inner ? `/${anchor}` : anchor);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Gabriel Molina, inicio">
          GM<span>.</span>
        </Link>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href={href('#projects')}>Proyectos</a>
          <a href={href('#about')}>Sobre mí</a>
          <a href={href('#stack')}>Stack</a>
          <a href={href('#contact')}>Contacto</a>
        </nav>
        <a className="header-social" href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
