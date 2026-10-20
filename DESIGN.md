# DESIGN: Dual Beauty Studio (fuente de verdad visual; nada de código sin esto aprobado)
Estado: **APROBADO el 2026-10-20** por Cristián (Dirección A, paleta Blanco).
Exploración: lienzo "Dual Beauty Studio — Direcciones" (https://claude.ai/artifact/HLD8W9TmcSftGzfMiB8yam), con escritorio, móvil y sistema de cada dirección.
Referencias: `referencias/ANALISIS.md`.

## Las 2 direcciones

### A · Luz de estudio (RECOMENDADA)
- **En una frase:** un estudio blanco con luz natural: la calma del espacio real de Dual, ordenada por la tipografía del logo, con el brillo del cabello como única nota de color.
- **De dónde nace:** del local (ladrillo pintado blanco, persianas con luz, letras doradas en el muro) y del logo (serif de alto contraste + sans espaciada, negro y oro).
- **Por qué la recomiendo (simple):**
  1. Las fotos tienen fondos claros y desenfocados: sobre el fondo "cal" se funden y la baja resolución se nota menos.
  2. Transmite "sereno, spa premium" sin caer en lo clínico (el blanco es cálido, no gris).
  3. El concepto "dos tiempos" se vuelve visual: foto del **proceso** + foto del **resultado** en el hero.
  4. Es la más liviana en móvil y la que mejor midió en el prototipo (CLS 0,003).
- **Riesgo:** usa el oro del logo. Se controla: el oro es solo para líneas, cursivas y etiquetas; nunca fondos dorados ni negro + dorado como combinación protagonista (el negro se usa solo en texto y botón).

### B · Castaño brillante (DESCARTADA el 2026-10-20)
- **En una frase:** fondo espresso cálido y cobre tomado del cabello: el brillo del pelo liso como protagonista, con una serif alta y estrecha como una hebra.
- **De dónde nace:** de las fotos de resultado (castaños y cobres) y del gesto del alisado (líneas verticales, largo).
- **Por qué no la recomiendo como primera:** las fotos de fondo blanco quedan como recuadros claros sobre el fondo oscuro; lo oscuro puede leerse más "noche/barbería" que "spa sereno"; la serif angosta provocó CLS 0,17 al cargar fuentes en el prototipo (se resuelve, pero exige más cuidado). Es más llamativa e Instagram-friendly.

## Auditoría con skills (2026-10-20)
Revisado con `design-taste-frontend` (Skills_rep, revisada: solo instrucciones, sin scripts) y `animation-performance`. Lectura: landing de consumo premium para mujeres de Curicó, lenguaje editorial sereno; diales 7 / 6 / 3 (variedad / motion / densidad).
- Corregido: cero rayas largas (—) en la página; máximo 2 etiquetas sobre títulos (hero y Cómo agendar); encabezados apilados (título y bajada debajo), no partidos; sin numeración decorativa en fotos ni tarjetas; sin cursor personalizado; hero con 4 elementos y bajada de 14 palabras; header de 80 px; íconos de Phosphor (no dibujados a mano); `will-change` solo en la banda; parallax de la galería sin forzar layout (lee todo y después escribe); medidas de tarjetas y botón magnético cacheadas al entrar el mouse.
- Pendiente de decidir (choca con la skill): la paleta cal + oro + tinta (#F5F1EA, #B08A4E, #1C1815) es la familia que la skill marca como "default de IA" para marcas premium. Se puede justificar por el logo (negro + dorado), pero el fondo crema no viene del logo (el logo y el muro real son blancos). Alternativa en el prototipo, `?p=blanco` ("A · Blanco"): fondo #FBFAF7, gris #F0EDE8, tinta #151413, tinta-2 #57524C, oro texto #7A5A24, oro decorativo #A8844A, bloque oscuro #171615 con claro #F4F2EE, claro-2 #CFC9C0 y oro #D2B27A. Todos los textos pasan AA (el más bajo, 5,4:1).
- Modo oscuro: la skill lo pide para páginas de consumo; el proyecto no lo exige. No se hizo.

## Qué NO es (para ambas)
- No rosado + dorado, no caligrafía script, no fucsia en la interfaz (la camilla fucsia no aparece; ver "Imágenes").
- No plantilla: sin íconos de banco (tijeras, gotas, ojos), sin stock, sin carrusel en el hero, sin banners de promoción.
- No clínico: nada de azul/gris frío ni lenguaje de "laboratorio".
- No inventa: sin testimonios, cifras ni "+500 clientas".

---

## Especificación de la Dirección A (se usa si se aprueba A)

### Color: paleta Blanco (elegida el 2026-10-20; contraste AA verificado con la fórmula WCAG 2.x)
La paleta Crema y la Dirección B quedaron descartadas. Nombre del token en el código entre paréntesis.
| Token | Hex | Uso | Contraste |
|---|---|---|---|
| Fondo (`--bg`) | #FBFAF7 | Fondo principal (blanco cálido del logo y del muro) | — |
| Fondo 2 (`--bg-2`) | #F0EDE8 | Superficies alternas | — |
| Arena (`--panel`) | #F1E8DC | Hojas de Servicios y Cómo agendar, círculos de íconos | oro texto 5,2:1 · tinta-2 6,4:1 |
| Tarjeta (`--card-bg`) | #FFFFFF | Tarjetas claras, píldoras | — |
| Tinta (`--ink`) | #151413 | Texto principal, botón principal | 17,6:1 sobre fondo |
| Tinta 2 (`--ink-2`) | #57524C | Texto secundario | 7,4:1 sobre fondo · 6,6:1 sobre fondo 2 |
| Oro texto (`--accent`) | #7A5A24 | Etiquetas, cursivas de títulos, foco | 6,1:1 sobre fondo · 5,4:1 sobre fondo 2 |
| Oro decorativo (`--accent-deco`) | #A8844A | Líneas, anillos, círculo de flecha (no texto) | 3,3:1 (decorativo) |
| Negro (`--deep`) | #171615 | Bloque de Resultados y tarjetas oscuras | claro 16,2:1 · claro 2 11:1 · oro claro 8,9:1 |
| Claro (`--on-deep`, `--on-deep-2`) | #F4F2EE / #CFC9C0 | Texto sobre negro | ver fila anterior |
| Oro claro (`--on-deep-accent`) | #D2B27A | Etiquetas y cursivas sobre negro | 8,9:1 |
| Línea (`--line`) | #E1DCD3 | Divisores | decorativo |
| Marcas | #25D366 · degradado de Instagram | Solo íconos de WhatsApp e Instagram | ver Componentes |

### Tipografía y escala
- Títulos: **Bodoni Moda** (variable, eje óptico) en **peso 600** (cursivas en 500) y tamaño óptico fijo `"opsz" 18` con `font-optical-sizing: none`: los trazos finos quedan firmes y se leen bien sobre fondo claro (cambio del 2026-10-20; en 400 con óptico automático se veían demasiado delgados). Eco directo de "dual" en el logo. Nunca bajo 28 px.
- Texto: Jost 400 a 18 px; etiquetas y botones en 600.

### Sistema de formas (único para toda la página)
- Fotos de cabello, galería y logo del cierre: **arco** (`999px 999px 24px 24px`). Foto del estudio: 32 px con marco de oro desplazado. Proceso del hero: círculo con anillo de oro.
- Cierre (Cómo agendar): tarjeta arena con sombra muy tenue y el logo en un arco crema con profundidad: luz radial desde arriba, borde dorado interior, sombra interior abajo, sombra cálida exterior en capas, sombra suave bajo el logo y un segundo arco dorado desplazado detrás.
- Tarjetas: 28 px, foto interna de 20 px. Botones, etiquetas y lightbox: píldora. Íconos y números de pasos: círculos de 44 px.
- Calidez: hojas de color arena (#EEE0CD en Crema, #F1E8DC en Blanco) con esquinas de 48 px (servicios y cierre), arco arena detrás del hero, brillo dorado difuso detrás de las fotos y sello circular "DUAL BEAUTY STUDIO • RAUQUÉN • CURICÓ" con el monograma LG.
- Texto y etiquetas: **Jost** 400/500. Eco de "BEAUTY STUDIO". Etiquetas en mayúsculas, 13 px, espaciado 0,24 em.
- Descartadas: Playfair y Cormorant (cliché del rubro), Montserrat (genérica).
- Escala (escritorio → móvil): H1 92 → 48 · H2 60 → 38 · H3 34 → 28 · lead 19 → 17 · texto 18 → 17 · secundario 16 → 15 · etiqueta 13 → 12. En código con `clamp()`.
- Fuentes servidas con @fontsource, subset latino, `preload` de Bodoni 400 y Jost 400, respaldo con `size-adjust` para CLS ≈ 0.

### Espaciado y grilla
- Base 4 px. Escala: 8 · 12 · 16 · 20 · 24 · 32 · 48 · 64 · 72 · 128.
- Grilla 12 columnas, gutter 24, margen 80 (escritorio) / 20 (móvil), ancho máx. 1440.
- Secciones: 128 px vertical en escritorio, 80 en móvil.

### Componentes y estados
- **Botón principal** (WhatsApp, texto "Consulta por WhatsApp"; una sola intención en toda la página: consultar): fondo tinta, texto cal, esquinas rectas, alto 56 (64 en cierre), ícono de globo de diálogo de línea. Hover: fondo castaño. Foco: contorno 2 px oro-texto con 4 px de separación. Activo: sin cambio de tamaño.
- **Botón secundario** (header): borde 1 px tinta, fondo transparente; hover invierte.
- **Tarjeta de servicio** (reemplaza a la fila, 2026-10-20): tarjeta de 28 px con sombra suave; portada (imagen referencial con IA) con esquinas de 20 px y margen interno; etiqueta de área en píldora (Mirada, Cabello, Piel) y "Imagen referencial" a la derecha; nombre en Bodoni 600; descripción; enlace "Consultar este servicio" con un círculo de oro y flecha que abre WhatsApp con su mensaje prellenado. Sin numeración. Escritorio: tarjeta horizontal (portada a la izquierda, texto a la derecha) en grilla de 2 columnas, en damero claro/oscuro. Móvil: tarjeta vertical, una debajo de otra. Hover y foco: anillo dorado, la portada hace un zoom suave, la flecha gira 45°, giro 3D leve hacia el mouse y brillo que lo sigue.
- **Galería de resultados (acordeón, 2026-10-20)**: las 4 fotos como franjas en arco dentro del margen de la página. **En reposo, las 4 tienen el mismo ancho**; al pasar el mouse, esa foto se abre (unas 4,5 veces más ancha) y las demás se angostan con un velo leve; al sacar el mouse de la galería vuelven a igualarse. **En móvil (menos de 600 px) es una grilla de 2 × 2** y un toque amplía la foto directamente (las franjas iguales quedarían de unos 80 px). Mouse: pasar abre la franja y el clic la amplía. Teclado: el foco abre y Enter amplía. Toque: el primer toque abre y el segundo amplía. El nombre de la foto activa aparece debajo, no encima de la imagen. Al ampliar, la foto viaja a pantalla completa (Flip); se cierra con "Cerrar", Esc o tocando el fondo, y el foco vuelve a la franja. Técnica: franjas absolutas movidas con transform y solo el ancho animado (con flex, el hover marcaba CLS 0,44; así queda en 0). Reemplaza a la galería arrastrable. Escritorio: título y texto a la izquierda (4 columnas) y acordeón a la derecha (7 columnas) en proporción 5:4, así la foto abierta queda casi en 3:4 (unos 416 × 583 px) y no se estira más allá de sus 1086 px reales; con la versión a lo ancho la foto se recortaba apaisada y se veía blanda.
- **Header** (2026-10-20): acompaña todo el scroll (sticky, ya no se esconde al bajar); al dejar el inicio toma una sombra y el logo se achica al 82 % con transform. 96 px de alto con el logo a 72 px (versión recortada sin margen transparente, `assets/logo-*-recorte.png`), pedido de Cristián para que se lea "BEAUTY STUDIO"; la skill sugiere 80 px. En móvil, 80 px y logo de 60 px. A la derecha: ícono de Instagram (el botón de WhatsApp del header se quitó: lo cubre el botón flotante).
- **Íconos de El estudio**: círculos negros de 44 px con el ícono en oro claro (8,9:1), para que el negro reaparezca antes del final.
- **Logo como marca de agua**: el logo completo al 6-7 % de opacidad, decorativo y detrás del contenido, en Servicios (arriba a la derecha), Resultados (abajo a la izquierda, versión clara) (en Cómo agendar no, porque ahí el logo ya está en el arco).
- **Footer** (negro #171615 con esquinas superiores de 48 px y logo en versión clara; devuelve el negro de la marca al final de la página): logo, "Rauquén, Curicó. Atención con hora coordinada.", enlace al aviso de privacidad (página en la Fase 4) e íconos de Instagram y WhatsApp.
- **WhatsApp flotante (escritorio y móvil, visible todo el recorrido)**: botón de 64 px (60 en móvil) abajo a la derecha con los **colores oficiales de WhatsApp**: fondo #25D366 y logo blanco (Simple Icons), sombra y borde de sombra fino para separarlo del fondo claro. Llamado sutil: un halo verde que respira cada 4 s; se pausa al pasar el mouse y se apaga con movimiento reducido. Al pasar el mouse en escritorio sube 2 px, se oscurece a #1EBE5A y aparece la etiqueta "Escríbenos". Accesibilidad: blanco sobre #25D366 contrasta 2:1 (WCAG pide 3:1 para íconos); se acepta por ser la combinación oficial de la marca, a pedido del cliente. En producción, el logo va como SVG en línea. Reemplaza a la barra ancha de móvil; en el hero móvil se muestra el botón "Agenda por WhatsApp" a ancho completo.
- **Íconos de redes** (header y footer): Instagram con su degradado oficial y WhatsApp con #25D366, ambos con el logo blanco de Simple Icons, en círculos de 48 px que suben al pasar el mouse.
- La banda de texto "Mirada · Cabello · Piel" se quitó (repetía las áreas de Servicios y era lo único en movimiento constante, contra el tono sereno).
- Objetivos táctiles ≥ 44 px.
- **Logo**: el monograma apilado pierde "BEAUTY STUDIO" bajo 64 px de alto. En la Fase 4, al redibujar en SVG, crear una versión horizontal para el header.

### Imágenes
- Fotos reales: solo las 6 entregadas, en hero, resultados, el estudio y el cierre. Recorte vertical 4:5 (hero) y 3:4 (resultados); espacio en 11:10.
- **Portadas de servicios hechas con IA** (`material-cliente/ia/`, 6 imágenes): solo en las tarjetas de servicios, como imagen referencial del tipo de servicio, nunca como resultado ni trabajo del estudio. Cada tarjeta dice "Imagen referencial" junto a la etiqueta de área y su texto alternativo empieza con "Imagen referencial:". Motivo: las clientas no autorizan usar fotos reales de esos servicios.
- Sin filtros que cambien el color del cabello. Se puede bajar levemente el brillo del fondo, no del pelo.
- Hero: resultado largo castaño (grande) + proceso (pequeño, superpuesto) = "dos tiempos". Titular: "Este tiempo / *es para ti.*" en 2 líneas fijas (decisión del 2026-10-20 en `DECISIONES.md`). Se probó un hero con la foto del estudio (`prototipo/hero-estudio.html`) y se descartó. **El hero cabe completo en la primera pantalla** (alto = pantalla menos el header): la altura de la foto depende del alto de la ventana (entre 360 y 680 px, formato 4:5), así el texto queda centrado en lo visible y el botón se ve sin hacer scroll (probado en 1280 × 720, 1440 × 753, 1440 × 900 y 1920 × 1080).
- El espacio: foto del sillón y espejo. **Recortar el borde derecho** en producción para sacar el canto de la camilla fucsia.
- `estudio-camilla-letrero`: ya no se usa en la página (en el cierre se reemplazó por el logo, 2026-10-20). Opcional: recorte del letrero dorado para Open Graph.
- AVIF/WebP con sharp, `srcset` 480/768/1086 px; el hero con `fetchpriority="high"`, el resto `loading="lazy"`. El hero no ocupa pantalla completa (por resolución): máx. ~640 px de ancho.

### Motion (Nivel 2; solo `transform` y `opacity`, una idea por sección)
| Sección | Idea | Detalle |
|---|---|---|
Revisado el 2026-10-20 a pedido de Cristián (la primera versión se sentía "tipo PowerPoint"). Librería: **GSAP 3.13** con ScrollTrigger, SplitText, Flip, Draggable e InertiaPlugin (todos gratuitos desde 2025) + Lenis en escritorio.

| Sección | Idea | Detalle |
|---|---|---|
| Header | Se esconde al bajar | `yPercent` −100 al bajar, vuelve al subir o al recibir foco. |
| Hero | **Letras que suben + cortina** | SplitText por letra: `yPercent` 115 → 0 con giro 7°, desfase 22 ms, `expo.out` 1,3 s. Una cortina color cal se recoge hacia arriba (`expo.inOut` 1,4 s) mientras la foto se asienta (escala 1,35 → 1). Escritorio: la composición sigue levemente al mouse y las dos fotos se separan al bajar. |
| Header y menú | **Subrayado que se dibuja** | Al pasar el mouse o enfocar, el enlace pasa a oro y una línea se dibuja de izquierda a derecha (`scaleX`); la sección que se está viendo queda marcada igual. Ícono de Instagram en círculo que se invierte al pasar el mouse. |
| Servicios | **Grilla a la vista + selección por área** | Las 6 tarjetas en grilla de 2 × 3 dentro del margen (sin scroll lateral; del título al final cabe en 900 px de alto). Entrada: suben 40 px y aparecen en cascada fila por fila, con un leve giro desde abajo (`rotationX` −10°). Selección: píldoras "Todas / Mirada / Cabello / Piel" con un indicador que se desliza; elegir un área atenúa las otras tarjetas (opacidad 0,38 y escala 0,97, sin ocultarlas) y marca las elegidas con un anillo dorado. Reemplaza al riel horizontal fijo (descartado: desorientaba, sacaba las tarjetas del margen y la inclinación por velocidad no comunicaba nada). |
| Resultados | **Galería que se arrastra** | Draggable con inercia; cada foto se mueve dentro de su marco (parallax horizontal); al presionar, las fotos se encogen 3 %. Lightbox con Flip. |
| El estudio / Cierre | **Cortina + zoom** | Misma cortina del hero al entrar; el estudio con parallax vertical; botón de WhatsApp magnético. |
| Titulares H2 | Líneas desde máscara | SplitText por línea, `yPercent` 110 → 0, una vez. |
- Móvil: sin Lenis, sin riel fijo, sin arrastre, sin efectos de mouse; quedan las letras, las cortinas, la banda y los deslizamientos nativos.
- `prefers-reduced-motion`: nada se mueve; rieles y galería con scroll nativo; el lightbox abre sin animación.
- Sin JavaScript: la página se ve completa y usable (las cortinas solo existen con motion).
- LCP: la foto del hero se pinta desde el inicio bajo la cortina.
- CLS: el riel fijo usa `sticky` y no el pin de ScrollTrigger, porque el pin (`position: fixed`) marcó CLS 1,9 en la prueba.

---

## Dirección B (castaño brillante): DESCARTADA
Descartada por Cristián el 2026-10-20. Se quitó del prototipo junto con sus fuentes (Instrument Serif y Manrope) y su logo oscuro.

## Prototipo
- Ruta: `prototipo/index.html` (hero, tres áreas, servicios, resultados, el estudio y cómo agendar, con motion real; `?d=b` muestra la Dirección B con el mismo motion). Abrir con doble clic o con Live Server. Faltan preguntas frecuentes y footer (Fase 4).
- Probado en Chromium (Playwright) el 2026-10-20, 1440×900 y 390×844: sin errores de JavaScript, sin scroll horizontal, CLS 0 en escritorio y 0,015 en móvil (Dirección A), objetivos táctiles ≥ 24 px; arrastre, lightbox (Esc y foco) y movimiento reducido verificados.
- Fecha de aprobación: 2026-10-20 (Cristián, en el chat de Claude Code).
