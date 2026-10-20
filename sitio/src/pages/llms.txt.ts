// llms.txt: resumen del negocio en Markdown para asistentes de IA (formato de llmstxt.org:
// título H1, resumen en cita y listas de enlaces). Se arma con los mismos datos de la página.
import type { APIRoute } from 'astro';
import { NEGOCIO, SEO, SERVICIOS, whatsapp, mensajeServicio } from '../data/sitio';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const url = (path = '') => new URL(`${base}${path}`, site).href;
  const areas = ['Mirada', 'Cabello', 'Piel'] as const;

  const texto = `# ${NEGOCIO.nombre}

> ${SEO.descripcion}

Estudio de belleza con dos profesionales en ${NEGOCIO.localidad} (Chile). ${NEGOCIO.horario}: las horas se coordinan por WhatsApp y la dirección exacta se envía al confirmar. Los precios no se publican; se consultan por WhatsApp.

## Servicios

${areas.map((area) => `### ${area}\n\n${SERVICIOS.filter((s) => s.area === area).map((s) => `- [${s.nombre}](${whatsapp(mensajeServicio(s.nombre))}): ${s.descripcion}`).join('\n')}`).join('\n\n')}

## Contacto

- [Consulta por WhatsApp](${whatsapp()}): +${NEGOCIO.telefono}
- [Instagram](${NEGOCIO.instagram})

## Páginas

- [Inicio](${url()}): servicios, resultados, el estudio y cómo agendar
- [Aviso de privacidad](${url('privacidad/')})
`;
  return new Response(texto, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
