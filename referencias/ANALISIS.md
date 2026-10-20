# ANÁLISIS DE REFERENCIAS: Dual Beauty Studio (Fase 2)
Fecha: 2026-10-20

## Cómo se revisó (límites honestos)
- El navegador (Claude in Chrome) no estaba conectado. Las páginas se leyeron con WebFetch, que entrega el texto y la estructura del HTML, **no** las imágenes, el motion ni la vista móvil. Donde no se pudo ver algo, se dice.
- Instagram solo entrega datos del perfil (bio, enlaces, nombres de destacadas, texto alternativo de algunas miniaturas). **No se vieron las fotos ni los reels.**
- No se pudieron abrir: aesop.com (403), the-beautiful.jp y deepbeautykikomilano.com (404, aunque figuran en Awwwards), mechesalon.com (certificado inválido). No se analizan.
- Pendiente para Cristián: abrir Secret Magic en el teléfono y mirar 2 o 3 reels con este análisis al lado, para confirmar qué "estilo" le gusta a las socias (ver nota en la ref. 1).

## Las 7 referencias

### 1. Secret Magic (referencia principal del cliente)
- URL: instagram.com/secretmagic_clinica · reservas en app.tindari.com/secret-magic-clinica-de-cabello-spa (la página de Tindari solo devolvió el título; no se pudo leer su contenido).
- Qué se pudo ver: se presenta como "Clinica capilar | Alisados orgánicos | Hidrataciones", 22 mil seguidores, mezcla de reels y carruseles con texto sobreimpreso, destacadas ordenadas por tema (Terapias, Clientas, Productos, Ubicación, Preguntas).
- Qué funciona: habla de **un problema concreto** (dejar la plancha diaria) antes que del local; ordena la información en temas cortos; el material es casi todo cabello en primer plano. Es el mismo rubro y servicio estrella que Dual (alisado orgánico).
- Qué NO sirve: el tono de Instagram (memes, texto sobre video) no traslada al tono "elegante y sereno"; depender de una app de reservas externa no aplica (Dual convierte por WhatsApp).
- Lectura: cuando el cliente dice "me gusta el estilo de la página", lo más probable es que se refiera a la **claridad temática y al foco en el resultado del cabello**, no a una estética visual que no pudimos ver. Confirmar.

### 2. Carla Acevedo, estética capilar (competencia directa en Curicó)
- URL: instagram.com/estetica_capilarcarlaacevedo · reservas en carlaacevedo.site.agendapro.com
- Qué funciona: se nombra por servicio y ciudad ("ALISADOS ORGÁNICOS CURICÓ"), lo que le da presencia en búsquedas locales; destacadas de "Testimonios", "Precio$" y "Reservas" resuelven dudas antes de escribir.
- Qué NO sirve: tipografía decorativa de Unicode (versalitas falsas) que no es accesible para lectores de pantalla; publica precios (Dual decidió no hacerlo).
- Para Dual: hay que ganar en **claridad local** ("Rauquén, Curicó" visible desde el hero) y en presentación; la competencia directa no tiene web propia de calidad. Ahí está la oportunidad.

### 3. Karee, laboratorio capilar (Chile)
- URL: instagram.com/karee.cl
- Qué funciona: el enlace principal es **wa.me** directo (igual que la estrategia de Dual); destacadas con etiquetas de texto simple (SERVICIOS, UBICACION, WEB), sin íconos genéricos; posicionamiento técnico ("Laboratorio Capilar").
- Qué NO sirve: el concepto de laboratorio empuja hacia lo clínico, que el brief descarta ("nada frío ni clínico").

### 4. Studio Neuf (salón de cabello, Isla Reunión)
- URL: https://studioneuf.re/ (publicado en la galería de Framer)
- Qué funciona: titular que vende **tiempo y atención**, no técnica ("Un salon où l'on prend le temps, pour vous"); paleta marfil y marrón profundo con serif elegante (según la ficha de Framer); fotografía de cabello a gran tamaño; servicios en 4 tarjetas con un CTA cada una; preguntas frecuentes al final con CTA de llamada. Es la estructura más cercana a la que aprobamos en la Fase 1.
- Qué NO sirve: newsletter justo después del hero (distrae del CTA); bloque de cifras (+500 clientes) que Dual no puede mostrar sin inventar; blog.
- Motion: la ficha menciona "elementos de servicio animados", no se pudo verificar cómo.

### 5. Heyday (estudios de faciales, EE. UU.)
- URL: https://www.heydayskincare.com/
- Qué funciona: **no publica precios** ("Pricing varies by studio") y aun así convierte; servicios con nombres claros y una frase cada uno; argumentos en 4 pilares cortos con un CTA por pilar; tono cálido y directo con frases cortas; un solo verbo en el CTA repetido ("BOOK A FACIAL").
- Qué NO sirve: barras de promoción y descuentos, membresías, cifras de volumen. Es una cadena; Dual es íntimo.

### 6. Brow Rituals (cejas y pestañas, Sídney)
- URL: https://www.browrituals.com.au/
- Qué funciona: resuelve cejas, pestañas y rostro con **tres tarjetas y una sola imagen por área**, título en mayúsculas espaciadas y un párrafo breve. Demuestra que Mirada y Piel se pueden presentar con poco material visual si la tipografía hace el trabajo. Página corta: hero, servicios, CTA, footer.
- Qué NO sirve: vocabulario de "ritual/bespoke" en inglés de lujo, que en Curicó suena impostado; dirección y horario visibles (Dual no publica dirección).

### 7. Rossano Ferretti (marca de lujo de cabello, Italia) — referencia de lo que NO hacer
- URL: https://www.rossanoferretti.com/
- Qué funciona: la promesa de marca en una sola línea ("Italian Designer Haircare…"), equipo con foto, nombre y ciudad.
- Qué NO sirve: el hero es un carrusel de 4 banners (diluye el mensaje y suele empeorar el LCP); la página es una tienda con 15 bloques; el lujo se expresa con cantidad. Sirve como contraejemplo: **un mensaje, un CTA, pocas secciones**.

Revisadas y descartadas por no aportar: OMR Beauty (Awwwards, Mención de Honor feb. 2026; es una tienda de perfumes), Nine Zero One (salón de celebridades, foco en academia y tienda), FaceGym (tienda + membresía), Sally Hershberger (homepage casi sin contenido legible).

## 3 patrones a adoptar
1. **Vender el tiempo y el trato, no la técnica.** Studio Neuf y Heyday abren con la experiencia ("se toma el tiempo"). Para Dual: dos socias, hora coordinada, un espacio tranquilo. El hero dice eso; la técnica va en cada servicio.
2. **Un servicio = un nombre claro + una frase + un CTA.** Heyday y Brow Rituals. Sin precios, el CTA lleva el mensaje prellenado a WhatsApp. Las áreas sin fotos (Mirada, Piel) se sostienen con tipografía y composición, como en Brow Rituals.
3. **El resultado del cabello es la prueba.** Secret Magic y Studio Neuf ponen el cabello en primer plano. Dual tiene sus 4 fotos más fuertes ahí: se usan grandes, con recorte vertical, sin filtros que las vuelvan irreales.

## 3 clichés del rubro a evitar
1. **Rosado + dorado + script caligráfica.** Lo pidió evitar el cliente. El fucsia de la camilla no entra a la interfaz.
2. **Carrusel en el hero y banners de promoción.** Rossano Ferretti y Heyday: diluyen el mensaje y castigan el LCP. Un hero fijo, una imagen, un CTA.
3. **Íconos de línea genéricos (tijera, gota, ojo) y fotos de stock de rostros perfectos.** Mirada y Piel se resuelven con tipografía grande y la línea del perfil del propio logo, no con íconos de banco.
