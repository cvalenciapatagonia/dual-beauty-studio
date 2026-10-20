// Datos del negocio en un solo lugar: si cambia el número o un texto, se cambia aquí.
import type { ImageMetadata } from 'astro';
import lifting from '../assets/ia/ia-lifting-pestanas.webp';
import cejas from '../assets/ia/ia-depilacion-cejas.webp';
import alisado from '../assets/ia/ia-alisado-organico.webp';
import botox from '../assets/ia/ia-botox-capilar.webp';
import corte from '../assets/ia/ia-corte-puntas.webp';
import facial from '../assets/ia/ia-limpieza-facial.webp';

export const NEGOCIO = {
  nombre: 'Dual Beauty Studio',
  telefono: '56951269288',
  instagram: 'https://instagram.com/dual.beautystudio',
  localidad: 'Rauquén, Curicó',
  horario: 'Atención con hora coordinada',
};

export const SEO = {
  titulo: 'Dual Beauty Studio | Cabello, mirada y piel en Curicó',
  descripcion: 'Lifting de pestañas, alisado orgánico, botox capilar y limpieza facial en Rauquén, Curicó. Agenda tu hora por WhatsApp.',
};

export function whatsapp(mensaje = 'Hola, quiero hacer una consulta.') {
  return `https://wa.me/${NEGOCIO.telefono}?text=${encodeURIComponent(mensaje)}`;
}

export type Area = 'Mirada' | 'Cabello' | 'Piel';

export interface Servicio {
  id: string;
  nombre: string;
  area: Area;
  descripcion: string;
  imagen: ImageMetadata;
  alt: string;
  oscura: boolean; // damero de tarjetas oscuras
}

// Imágenes de portada hechas con IA: siempre marcadas "Imagen referencial" (DECISIONES.md)
export const SERVICIOS: Servicio[] = [
  { id: 'lifting', nombre: 'Lifting de pestañas', area: 'Mirada', oscura: true, imagen: lifting,
    alt: 'Imagen referencial: pestañas con curva natural',
    descripcion: 'Curva y elevación para tus pestañas naturales, sin extensiones. Tu mirada se ve más abierta desde que te levantas.' },
  { id: 'cejas', nombre: 'Depilación de cejas', area: 'Mirada', oscura: false, imagen: cejas,
    alt: 'Imagen referencial: perfilado de cejas',
    descripcion: 'Diseño y limpieza según la forma de tu rostro. Un marco prolijo y natural que ordena la expresión sin cambiarla.' },
  { id: 'alisado', nombre: 'Alisado orgánico', area: 'Cabello', oscura: false, imagen: alisado,
    alt: 'Imagen referencial: cabello castaño liso y con brillo',
    descripcion: 'Un cabello liso, suave y con brillo, que se peina en minutos y se mantiene ordenado por semanas.' },
  { id: 'botox', nombre: 'Botox capilar', area: 'Cabello', oscura: true, imagen: botox,
    alt: 'Imagen referencial: aplicación de tratamiento con pincel en cabello largo',
    descripcion: 'Reconstrucción profunda para el cabello seco, opaco o con frizz. Devuelve suavidad, cuerpo y brillo sin alisar.' },
  { id: 'corte', nombre: 'Corte de puntas', area: 'Cabello', oscura: true, imagen: corte,
    alt: 'Imagen referencial: corte de puntas con tijera',
    descripcion: 'Elimina las puntas dañadas y renueva el largo sin perderlo. El cuidado básico para un cabello sano y parejo.' },
  { id: 'facial', nombre: 'Limpieza facial', area: 'Piel', oscura: false, imagen: facial,
    alt: 'Imagen referencial: limpieza facial con discos de algodón',
    descripcion: 'Una pausa para tu piel. Limpieza profunda, extracción e hidratación para una piel más luminosa y equilibrada.' },
];

export function mensajeServicio(nombre: string) {
  return `Hola, quiero consultar por ${nombre.toLowerCase()}: valor y horarios disponibles.`;
}
