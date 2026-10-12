export const profile = {
  name: 'Gabriel Molina',
  email: 'gabrielmolinaf2005@gmail.com',
  github: 'https://github.com/GabielSus',
  linkedin: 'https://www.linkedin.com/in/gabriel-molina-2846aa3b1/',
};

export const exportAnalyticsLiveUrl =
  process.env.NEXT_PUBLIC_EXPORT_ANALYTICS_URL?.trim() ||
  'https://guatemala-export-analytics.vercel.app';

export type ProjectId = 'guatemala-export-analytics' | 'inmetagro-360' | 'mf360';
export type Project = {
  id: ProjectId;
  number: string;
  category: string;
  title: string;
  summary: string;
  tags: string[];
  highlight: string;
  highlights: { value: string; label: string }[];
  liveUrl?: string;
  previewNote?: string;
};

export const projects: Project[] = [
  {
    id: 'guatemala-export-analytics',
    number: '01',
    category: 'DATA ENGINEERING / ANALYTICS',
    title: 'Guatemala Export Analytics',
    summary:
      '24 años de exportaciones convertidos en una plataforma analítica con ETL, API, dashboard interactivo y forecasting validado mediante backtesting.',
    tags: ['Python', 'FastAPI', 'Pandas', 'PostgreSQL', 'React', 'Docker'],
    highlight: 'Datos oficiales, visualización y modelos predictivos en un solo producto.',
    highlights: [
      { value: '313K+', label: 'observaciones' },
      { value: '13K+', label: 'códigos SAC' },
      { value: '2002—25', label: 'histórico' },
    ],
    liveUrl: exportAnalyticsLiveUrl,
  },
  {
    id: 'inmetagro-360',
    number: '02',
    category: 'FULL STACK / BUSINESS SOFTWARE',
    title: 'Inmetagro 360',
    summary:
      'Sistema Full Stack para centralizar productos, compras, ventas y usuarios mediante una API REST, autenticación, pruebas y despliegue cloud.',
    tags: ['Python', 'Flask', 'React', 'PostgreSQL', 'Docker', 'Pytest'],
    highlight: 'Una aplicación empresarial que conecta operaciones, API y datos.',
    highlights: [
      { value: '04', label: 'áreas de gestión' },
      { value: 'REST', label: 'API' },
      { value: 'Cloud', label: 'despliegue' },
    ],
    liveUrl: 'https://inmetagro-360-frontend.vercel.app/',
    previewNote: 'Vista conceptual basada en los módulos reales del producto.',
  },
  {
    id: 'mf360',
    number: '03',
    category: 'MULTIMEDIA / PRODUCT ENGINEERING',
    title: 'MF360',
    summary:
      'Plataforma local-first para PhotoBooth 360: captura móvil, procesamiento FFmpeg, branding, sincronización en tiempo real y entrega mediante QR.',
    tags: ['React Native', 'Expo', 'Node.js', 'Express', 'Socket.IO', 'FFmpeg'],
    highlight: 'Un flujo multimedia completo diseñado para seguir operando durante eventos.',
    highlights: [
      { value: '1080p', label: 'captura prioritaria' },
      { value: 'LAN', label: 'operación local-first' },
      { value: 'QR', label: 'entrega al invitado' },
    ],
  },
];

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
