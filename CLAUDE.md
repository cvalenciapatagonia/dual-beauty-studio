# Dual Beauty Studio

Antes de cualquier tarea, lee `PROYECTO.md` y `DESIGN.md`.

- Nivel 2: editorial con motion. Stack: Astro, CSS con variables (`tokens.css`), GSAP + ScrollTrigger, Lenis solo en escritorio, sharp, @fontsource y Cloudflare Pages. Sin CMS.
- Conversión: WhatsApp. El botón va siempre visible en móvil y lleva un mensaje prellenado por servicio.
- Nada de código sin `DESIGN.md` aprobado. Los colores, fuentes y espacios salen solo de `tokens.css`, sin valores sueltos.
- Motion: animar solo `transform` y `opacity`, con una idea de motion por sección. Respetar `prefers-reduced-motion` y usar menos efectos en móvil.
- Medir CLS e INP después de cada sección animada. Meta: LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 y WCAG 2.2 AA.
- Usar las fotos reales del cliente (`material-cliente/`) y no inventar datos, precios ni testimonios. Lo que falte va a `PENDIENTES_CLIENTE.md`.
- Las decisiones se anotan en `DECISIONES.md`.
