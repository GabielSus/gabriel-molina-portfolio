import Image from 'next/image';
import { ArrowUpRight, Camera, CheckCircle2, Database, Film, Package, Play, QrCode, ShoppingBag, TrendingUp, Users } from 'lucide-react';
import type { ProjectId } from '../lib/site';

export function ProjectVisual({ id, large = false }: { id: ProjectId; large?: boolean }) {
  if (id === 'guatemala-export-analytics') {
    return (
      <div className={`preview preview-analytics ${large ? 'preview-large' : ''}`}>
        <div className="preview-glow" />
        <div className="window analytics-window">
          <div className="window-bar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>Guatemala Export Analytics</span>
            <span className="window-status"><i /> Dashboard</span>
          </div>
          <Image src="/images/guatemala-dashboard.webp" alt="Captura real del dashboard Guatemala Export Analytics con gráficas y métricas de exportaciones" width={1826} height={904} className="dashboard-image" priority={large} />
        </div>
        <div className="preview-float analytics-float"><TrendingUp size={15} /> <span>313,104 observaciones</span></div>
      </div>
    );
  }
  if (id === 'inmetagro-360') {
    return (
      <div className={`preview preview-inmetagro ${large ? 'preview-large' : ''}`}>
        <div className="preview-glow" />
        <div className="window business-window">
          <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>Inmetagro 360</span><span className="window-status">Vista conceptual</span></div>
          <div className="business-layout">
            <aside className="business-sidebar">
              <div className="business-logo"><span className="business-logo-mark">I</span><span>INMETAGRO<span className="small-360">360</span></span></div>
              <div className="business-nav active"><TrendingUp size={13} /> Resumen</div>
              <div className="business-nav"><Package size={13} /> Productos</div>
              <div className="business-nav"><ShoppingBag size={13} /> Compras</div>
              <div className="business-nav"><Database size={13} /> Ventas</div>
              <div className="business-nav"><Users size={13} /> Usuarios</div>
            </aside>
            <div className="business-content">
              <div className="business-heading"><div><span>Panel de control</span><small>Gestión comercial centralizada</small></div><div className="business-avatar">GM</div></div>
              <div className="business-stats">
                <div><span>Productos</span><strong>Inventario</strong><Package size={15}/></div>
                <div><span>Compras</span><strong>Entradas</strong><ShoppingBag size={15}/></div>
                <div><span>Ventas</span><strong>Movimientos</strong><TrendingUp size={15}/></div>
              </div>
              <div className="business-table">
                <div className="business-table-title">Actividad del sistema <span>● En línea</span></div>
                <div className="business-table-row head"><span>Módulo</span><span>Operación</span><span>Estado</span></div>
                <div className="business-table-row"><span>Productos</span><span>Catálogo</span><b>Disponible</b></div>
                <div className="business-table-row"><span>Compras</span><span>Registro</span><b>Disponible</b></div>
                <div className="business-table-row"><span>Ventas</span><span>Control</span><b>Disponible</b></div>
              </div>
            </div>
          </div>
        </div>
        <div className="preview-float business-float"><CheckCircle2 size={16} /> API + base de datos</div>
      </div>
    );
  }
  return (
    <div className={`preview preview-mf360 preview-mf360-real ${large ? 'preview-large' : ''}`}>
      <div className="preview-glow" />
      <div className="mf-shot mf-shot-main">
        <Image src="/images/mf360/home.jpeg" alt="MF360 Operator mostrando la gestión de eventos" width={720} height={1600} />
      </div>
      <div className="mf-shot mf-shot-secondary">
        <Image src="/images/mf360/event.jpeg" alt="Detalle real de un evento activo en MF360" width={720} height={1600} />
      </div>
      <div className="mf-shot mf-shot-tertiary">
        <Image src="/images/mf360/videos-qr.jpeg" alt="Biblioteca real de videos y QR de MF360" width={720} height={1600} />
      </div>
      <div className="preview-float mf-float"><QrCode size={15} /> Captura → FFmpeg → QR</div>
      <span className="mf-real-label"><i /> INTERFAZ REAL</span>
    </div>
  );
}

export function MF360Gallery() {
  const shots = [
    { src: '/images/mf360/home.jpeg', title: 'Operación de eventos', text: 'Creación, estado y control de cada experiencia 360.' },
    { src: '/images/mf360/event.jpeg', title: 'Flujo del evento', text: 'Grabación, videos, métricas, procesamiento y branding desde una sola pantalla.' },
    { src: '/images/mf360/settings.jpeg', title: 'Captura configurable', text: 'Duración, 1080p, objetivo de FPS, calidad y slow motion.' },
    { src: '/images/mf360/editor.jpeg', title: 'Branding visual', text: 'Marcos y stickers reutilizables con editor visual por evento.' },
    { src: '/images/mf360/stats.jpeg', title: 'Métricas de producción', text: 'Seguimiento del pipeline: recibidos, procesando, listos, QR y almacenamiento.' },
    { src: '/images/mf360/videos-qr.jpeg', title: 'Videos y QR', text: 'Resultado procesado, FPS de salida y acceso para el invitado.' },
  ];
  return (
    <div className="mf-gallery">
      {shots.map((shot, index) => (
        <figure className={`mf-gallery-item mf-gallery-item-${index + 1}`} key={shot.src}>
          <div className="mf-gallery-phone"><Image src={shot.src} alt={`MF360 — ${shot.title}`} width={720} height={1600} /></div>
          <figcaption><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{shot.title}</strong><p>{shot.text}</p></div></figcaption>
        </figure>
      ))}
    </div>
  );
}

export function ForecastVisual() {
  return (
    <div className="forecast-visual">
      <div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>Módulo de forecasting</span><span className="window-status">Captura real</span></div>
      <Image src="/images/guatemala-forecast.webp" width={1422} height={496} alt="Captura real del módulo de forecasting de exportaciones 2026 a 2028, con métricas MAE y RMSE" className="forecast-image" />
    </div>
  );
}
