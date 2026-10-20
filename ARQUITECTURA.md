# ARQUITECTURA: Dual Beauty Studio (Fase 1)
Estado: borrador para aprobación. Sin diseño visual ni código (eso es Fase 2 y 4).

## 1. Objetivo
Que una mujer de Curicó que busca cuidado de cabello, mirada o piel entienda en segundos qué hace Dual Beauty Studio, sienta confianza y escriba por WhatsApp para coordinar su hora.
Métrica de éxito: clics en el botón de WhatsApp (evento medido). Meta numérica POR DEFINIR.

## 2. Mensaje principal (una frase)
Un espacio tranquilo en Rauquén donde dos profesionales cuidan tu cabello, tu mirada y tu piel, con hora coordinada directamente contigo.

(Hipótesis de diferenciador del brief, aún por validar con las socias. Si cambia, cambia esta frase.)

## 3. Tipo de página
Una sola página (landing) con navegación por anclas. Sin CMS, sin precios, sin reservas en línea.

## 4. Mapa de secciones (orden de arriba a abajo)

| # | Sección | Qué dice | Acción que empuja |
|---|---|---|---|
| 0 | Barra superior | Logo + 3 anclas (Servicios, El espacio, Cómo agendar) + botón WhatsApp | Escribir (acceso siempre a mano) |
| 1 | Hero | Titular (propuesta: "Belleza en dos tiempos: cabello y mirada."), subtítulo con "Rauquén, Curicó · Atención con hora coordinada", una foto de resultado de cabello | CTA principal: "Agenda por WhatsApp" |
| 2 | Las tres áreas | Presentación breve de Mirada, Cabello y Piel como índice visual; cada una lleva a su bloque | Seguir leyendo / saltar al servicio |
| 3 | Servicios | Los 6 servicios agrupados por área, con descripción corta de `CONTENIDO.md`. Sin precios ("consulta por WhatsApp") | CTA por servicio: WhatsApp con mensaje prellenado |
| 4 | Resultados (cabello) | Proceso de alisado + 3 resultados reales. Es el material más fuerte; funciona como prueba visual sin inventar testimonios | Generar confianza y llevar al CTA |
| 5 | El espacio | Foto del sillón y espejo, texto sobre la calma y la atención personalizada de las dos socias. Sin dirección | Confianza e intimidad del lugar |
| 6 | Cómo agendar | 3 pasos: escribes por WhatsApp, coordinamos día y hora, te enviamos la dirección al confirmar | CTA principal repetido |
| 7 | Preguntas frecuentes | 4 a 5 respuestas cortas (dónde atienden, cómo se paga y reserva, cuánto dura cada servicio, cómo prepararse). Solo con datos confirmados | Resolver dudas que frenan el mensaje |
| 8 | Cierre / footer | "Rauquén, Curicó. Te enviamos la dirección exacta al confirmar tu hora.", Instagram, botón WhatsApp grande, aviso de privacidad | CTA final |

Fuera de la página por ahora: testimonios (se agrega una sección cuando haya reseñas reales de Google), precios, mapa, dirección, nombres de las socias.

## 5. CTA
- Principal: "Agenda por WhatsApp" (+56 9 5126 9288), abre el chat con mensaje prellenado. En móvil, botón flotante siempre visible.
- Por servicio: botón con el mensaje de cada servicio de `CONTENIDO.md` (ej. "Hola, quiero agendar un lifting de pestañas.").
- Secundario: Instagram (@dual.beautystudio), discreto, en el footer y en El espacio.
- Medición: un evento por clic, con el servicio como etiqueta, para saber qué servicio genera más conversación.

## 6. SEO base
- Título (≤ 60 caracteres): `Dual Beauty Studio | Cabello, mirada y piel en Curicó`
- Descripción (≤ 155): `Lifting de pestañas, alisado orgánico, botox capilar y limpieza facial en Rauquén, Curicó. Agenda tu hora por WhatsApp.`
- Encabezados:
  - H1 (uno solo, en el hero): "Belleza en dos tiempos: cabello y mirada." (a confirmar en Fase 3; debe incluir la idea de belleza/estudio en Curicó en el subtítulo)
  - H2: Servicios · Resultados · El espacio · Cómo agendar · Preguntas frecuentes
  - H3: Mirada, Cabello, Piel y cada servicio
- Schema (Fase 4): `BeautySalon`/`LocalBusiness` con localidad Rauquén, Curicó, teléfono, redes, **sin dirección ni coordenadas**, `areaServed` Curicó. Y `FAQPage` si las preguntas quedan en la página.
- Local: coherencia con la ficha de Google (pendiente ver si muestra la dirección) y enlace desde Instagram.
- Open Graph con una foto de resultado y el logo, para que el link se vea bien al compartirlo por WhatsApp.

## 7. Páginas extra
- `/privacidad`: aviso breve (qué datos se tratan: solo la analítica y el clic a WhatsApp). El texto legal se confirma con abogado/contador antes de publicar (Ley 21.719), no se afirma nada todavía.
- Página 404 simple, con el botón de WhatsApp.
- No hacen falta páginas por servicio por ahora. Se evalúan a los 30 días si la analítica o Search Console muestran demanda de búsquedas específicas.

## 8. Dependencias abiertas (no bloquean la aprobación)
- Datos `[CONFIRMAR]` de `CONTENIDO.md` (duraciones, técnica de cejas, "sin formol", producto del botox): condicionan servicios y FAQ.
- Diferenciador final y meta numérica de mensajes.
- Pestañas, cejas y limpieza facial no tienen fotos: se resuelven con tipografía y composición en Fase 2.
- Resolución de fotos: no alcanza para hero a pantalla completa en escritorio grande; se decide el tratamiento en Fase 2.
