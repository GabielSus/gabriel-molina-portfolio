import Link from 'next/link';
export default function NotFound() { return <main className="not-found"><span className="eyebrow">404 / NO ENCONTRADO</span><h1>Esta página no existe.</h1><p>El proyecto que buscas no está disponible en esta ruta.</p><Link href="/" className="button button-primary">Volver al portafolio →</Link></main>; }
