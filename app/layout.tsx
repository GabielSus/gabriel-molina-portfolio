import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Gabriel Molina | Software Developer', template: '%s' },
  description: 'Portafolio de Gabriel Molina. Desarrollo Full Stack, backend, análisis de datos y productos digitales.',
  applicationName: 'Gabriel Molina Portfolio',
  openGraph: { title: 'Gabriel Molina | Software Developer', description: 'Full Stack · Backend · Data Analytics', type: 'website', locale: 'es_GT' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: '#080b10', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
