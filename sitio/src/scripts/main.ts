/* Interacción y motion de la portada (Nivel 2, GSAP 3.13).
   Sin JS la página queda completa y usable: el filtro, el acordeón y el lightbox funcionan con CSS + clases,
   y el motion solo se suma encima. Se anima transform y opacity; con movimiento reducido no hay motion. */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Flip } from 'gsap/Flip';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger, SplitText, Flip);

const html = document.documentElement;
const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector(sel) as T;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll(sel)) as T[];

// Estado compartido entre el lightbox y el motion.
const S: { motion: boolean; lenis: Lenis | null } = { motion: false, lenis: null };

/* ---------- Lightbox: con motion, la foto viaja desde la galería con Flip ---------- */
const lb = $('.lightbox');
const lbFrame = $('.lb-frame', lb), lbCap = $('.lb-caption', lb);
const lbClose = $<HTMLButtonElement>('.lb-close', lb), lbBg = $('.lb-backdrop', lb);
let current: { btn: HTMLElement; media: HTMLElement } | null = null;

function openLB(btn: HTMLElement) {
  if (current) return;
  const media = $('.g-media', btn);
  lbCap.textContent = btn.dataset.caption ?? '';
  const state = S.motion ? Flip.getState(media) : null;
  lb.hidden = false;
  html.classList.add('lb-open');
  S.lenis?.stop();
  lbFrame.appendChild(media);
  current = { btn, media };
  if (state) {
    // Sin scale: la franja y el marco del lightbox tienen proporciones distintas y la foto se deformaría.
    Flip.from(state, { duration: 0.9, ease: 'expo.inOut' });
    gsap.fromTo(lbBg, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    gsap.fromTo([lbCap, lbClose], { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.55, stagger: 0.06 });
  }
  lbClose.focus({ preventScroll: true });
}

function closeLB() {
  if (!current) return;
  const c = current;
  current = null;
  const state = S.motion ? Flip.getState(c.media) : null;
  c.btn.appendChild(c.media);
  const done = () => {
    lb.hidden = true;
    html.classList.remove('lb-open');
    S.lenis?.start();
    c.btn.focus({ preventScroll: true });
  };
  if (state) {
    gsap.to([lbCap, lbClose], { opacity: 0, duration: 0.2 });
    gsap.to(lbBg, { opacity: 0, duration: 0.35 });
    Flip.from(state, { duration: 0.8, ease: 'expo.inOut', onComplete: done });
  } else {
    done();
  }
}

/* ---------- Servicios: destacar por área ----------
   Elegir un área atenúa las otras tarjetas (no las oculta) y marca las elegidas con el anillo dorado. */
const svcBtns = $$<HTMLButtonElement>('.svc-filter button');
const svcInd = $('.svc-ind');
const svcList = $('.svc-grid');
const svcCards = $$('.svc-grid .card-wrap');
let svcCurrent = svcBtns[0];
function moveInd() {
  svcInd.style.width = `${svcCurrent.offsetWidth}px`;
  svcInd.style.transform = `translateX(${svcCurrent.offsetLeft}px)`;
}
function setArea(btn: HTMLButtonElement) {
  svcCurrent = btn;
  const area = btn.dataset.area;
  svcBtns.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
  svcCards.forEach((w) => w.classList.toggle('is-dim', area !== 'todas' && w.dataset.area !== area));
  svcList.classList.toggle('is-filtered', area !== 'todas');
  moveInd();
}
svcBtns.forEach((b) => b.addEventListener('click', () => setArea(b)));
moveInd();
document.fonts?.ready.then(moveInd); // el ancho de los botones cambia al cargar la fuente
window.addEventListener('resize', moveInd);

/* ---------- Acordeón de resultados ----------
   En reposo las 4 fotos tienen el mismo ancho. Mouse: pasar agranda esa foto, salir de la galería
   las vuelve a igualar y el clic amplía. Teclado: el foco agranda y Enter amplía. Toque: grilla 2 x 2
   y tocar amplía. La posición va por transform (no cuenta como salto de layout). */
const acc = $('.accordion');
const accItems = $$<HTMLButtonElement>('.acc-item');
const accCap = $('.acc-caption');
const accDefault = accCap.textContent;
let accIdx = -1; // -1 = ninguna abierta: todas del mismo ancho

function layoutAcc() {
  const W = acc.clientWidth, n = accItems.length, g = parseFloat(getComputedStyle(acc).columnGap) || 12;
  // Pantallas angostas: grilla 2 x 2 (las franjas iguales quedarían de ~80 px)
  const grid = W < 600;
  acc.classList.toggle('is-grid', grid);
  if (grid) { accItems.forEach((b) => { b.style.width = ''; b.style.transform = ''; }); return; }
  const ratio = 4.5;
  const c = (W - (n - 1) * g) / (n - 1 + ratio);
  const even = (W - (n - 1) * g) / n;
  let x = 0;
  accItems.forEach((b, i) => {
    const w = accIdx < 0 ? even : (i === accIdx ? c * ratio : c);
    b.style.width = `${w}px`;
    b.style.transform = `translateX(${x}px)`;
    x += w + g;
  });
}
acc.classList.add('is-js');
layoutAcc();
new ResizeObserver(layoutAcc).observe(acc);

function activate(btn: HTMLButtonElement) {
  accIdx = accItems.indexOf(btn);
  accItems.forEach((b) => b.classList.toggle('is-active', b === btn));
  accCap.textContent = btn.dataset.caption ?? '';
  layoutAcc();
}
function resetAcc() {
  if (current || accIdx < 0) return; // con el lightbox abierto no se reacomoda
  accIdx = -1;
  accItems.forEach((b) => b.classList.remove('is-active'));
  accCap.textContent = accDefault;
  layoutAcc();
}
acc.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') resetAcc(); });
acc.addEventListener('focusout', (e) => { if (!acc.contains(e.relatedTarget as Node)) resetAcc(); });
document.addEventListener('pointerdown', (e) => {
  if (e.pointerType !== 'mouse' && !acc.contains(e.target as Node) && !lb.contains(e.target as Node)) resetAcc();
});
accItems.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (acc.classList.contains('is-grid') || btn.classList.contains('is-active')) openLB(btn);
    else activate(btn);
  });
  btn.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') activate(btn); });
  // Solo el foco por teclado abre la franja; el foco que deja un toque no debe ampliar al instante.
  btn.addEventListener('focus', () => { if (btn.matches(':focus-visible')) activate(btn); });
});
lbClose.addEventListener('click', closeLB);
lbBg.addEventListener('click', closeLB);
document.addEventListener('keydown', (e) => {
  if (!current) return;
  if (e.key === 'Escape') closeLB();
  if (e.key === 'Tab') { e.preventDefault(); lbClose.focus(); } // único control del diálogo
});

/* ---------- Medición de conversión: un evento por clic a WhatsApp, con el origen como etiqueta ----------
   Queda listo para la analítica que se elija (GA4/GTM leen dataLayer). */
declare global { interface Window { dataLayer?: unknown[] } }
$$('[data-cta]').forEach((a) => {
  a.addEventListener('click', () => {
    (window.dataLayer ??= []).push({ event: 'cta_whatsapp', cta: a.dataset.cta });
    if (import.meta.env.DEV) console.log('cta_whatsapp', a.dataset.cta);
  });
});

/* ---------- Motion ---------- */
function initMotion() {
  const mm = gsap.matchMedia();
  mm.add({
    motion: '(prefers-reduced-motion: no-preference)',
    desktop: '(min-width: 900px)',
    fine: '(pointer: fine)',
  }, (ctx) => {
    const c = ctx.conditions as { motion: boolean; desktop: boolean; fine: boolean };
    if (!c.motion) { S.motion = false; html.classList.remove('motion-wait'); return; } // todo visible, quieto y con scroll nativo
    S.motion = true;
    html.classList.add('js-motion');
    const isDesktop = c.desktop;
    const mouse = c.desktop && c.fine;
    const cleanups: (() => void)[] = [];
    const on = <K extends keyof HTMLElementEventMap>(el: HTMLElement, type: K, fn: (e: HTMLElementEventMap[K]) => void) => {
      el.addEventListener(type, fn);
      cleanups.push(() => el.removeEventListener(type, fn));
    };

    // Scroll suave solo en escritorio, sincronizado con el ticker de GSAP.
    if (isDesktop) {
      const lenis = new Lenis({ lerp: 0.1 });
      S.lenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      const raf = (t: number) => lenis.raf(t * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      cleanups.push(() => { gsap.ticker.remove(raf); lenis.destroy(); S.lenis = null; });
    }

    /* HEADER: al dejar el inicio se compacta (logo más chico) y toma sombra */
    const header = $('.site-header');
    ScrollTrigger.create({ start: 80, end: 'max', onToggle: (self) => header.classList.toggle('is-scrolled', self.isActive) });
    cleanups.push(() => header.classList.remove('is-scrolled'));

    /* MENÚ: marca la sección que se está viendo */
    $$<HTMLAnchorElement>('.nav a').forEach((a) => {
      const sec = document.querySelector(a.getAttribute('href') ?? '');
      if (!sec) return;
      ScrollTrigger.create({ trigger: sec, start: 'top 50%', end: 'bottom 50%', onToggle: (self) => a.classList.toggle('is-current', self.isActive) });
    });

    /* HERO (jerarquía: primero el mensaje, después la prueba): letras que suben + cortina que se recoge */
    const heroTl = gsap.timeline({ defaults: { ease: 'expo.out' } });
    // Accesibilidad: un solo nombre en el h1 y las letras partidas ocultas al lector de pantalla.
    // (Con aria "auto", SplitText pone aria-label en cada <span>/<em>, que ARIA no permite: aria-prohibited-attr.)
    const h1 = $('.hero h1');
    h1.setAttribute('aria-label', h1.textContent!.replace(/\s+/g, ' ').trim());
    $$('.line', h1).forEach((l) => l.setAttribute('aria-hidden', 'true'));
    cleanups.push(() => { h1.removeAttribute('aria-label'); $$('.line', h1).forEach((l) => l.removeAttribute('aria-hidden')); });
    const heroSplit = SplitText.create('.hero h1 .line', { type: 'chars', charsClass: 'ch', aria: 'none' });
    heroTl.from(heroSplit.chars, { yPercent: 115, rotate: 7, duration: 1.3, stagger: 0.022 }, 0.15)
      .to('.hero-media .main .curtain', { yPercent: -101, duration: 1.4, ease: 'expo.inOut' }, 0)
      .fromTo('.hero-media .main img', { scale: 1.35 }, { scale: mouse ? 1.08 : 1, duration: 2.2 }, 0.1)
      .from('.hero-media .inset', { y: 60, scale: 0.8, opacity: 0, duration: 1.4 }, 0.7)
      .from('.badge', { scale: 0.6, rotation: -40, opacity: 0, duration: 1.4 }, 0.9)
      .from('[data-hero-fade]', { y: 24, opacity: 0, duration: 1, stagger: 0.08 }, 0.55);
    html.classList.remove('motion-wait'); // los estados iniciales ya están aplicados: se puede mostrar

    // El sello gira lento (la única animación continua); con el scroll gira más rápido.
    const spin = gsap.to('.badge-ring', { rotation: 360, svgOrigin: '60 60', duration: 28, ease: 'none', repeat: -1 });
    ScrollTrigger.create({
      trigger: '.hero', start: 'top top', end: 'bottom top',
      onUpdate: (self) => gsap.to(spin, { timeScale: 1 + Math.min(Math.abs(self.getVelocity()) / 300, 5), duration: 0.3, overwrite: true }),
    });
    const calmSpin = () => { gsap.to(spin, { timeScale: 1, duration: 1, overwrite: true }); };
    ScrollTrigger.addEventListener('scrollEnd', calmSpin);
    cleanups.push(() => ScrollTrigger.removeEventListener('scrollEnd', calmSpin));

    if (isDesktop) {
      // Profundidad al bajar: la foto grande, el círculo y el sello se separan.
      // Se mueve .reveal y no la figura: un transform en la figura movería su pie de foto.
      const heroST = () => ({ trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true });
      gsap.to('.hero-media .main .reveal', { yPercent: 6, ease: 'none', scrollTrigger: heroST() });
      gsap.to('.hero-media .inset', { yPercent: -30, ease: 'none', scrollTrigger: heroST() });
      gsap.to('.badge', { yPercent: 60, ease: 'none', scrollTrigger: heroST() });
    }
    if (mouse) {
      // La composición sigue levemente al mouse; la foto se mueve al revés dentro de su marco.
      const hm = $('.hero-media'), himg = $('.hero-media .main img');
      const mx = gsap.quickTo(hm, 'x', { duration: 0.9, ease: 'power3' }), my = gsap.quickTo(hm, 'y', { duration: 0.9, ease: 'power3' });
      const ix = gsap.quickTo(himg, 'x', { duration: 0.9, ease: 'power3' }), iy = gsap.quickTo(himg, 'y', { duration: 0.9, ease: 'power3' });
      on($('.hero'), 'pointermove', (e) => {
        const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;
        mx(nx * 18); my(ny * 14); ix(nx * -16); iy(ny * -12);
      });
    }

    /* TITULARES: cada línea sube desde su máscara al entrar */
    $$('[data-split]').forEach((el) => {
      SplitText.create(el, {
        type: 'lines', mask: 'lines', linesClass: 'split-line', autoSplit: true,
        onSplit: (self) => gsap.from(self.lines, { yPercent: 110, duration: 1.1, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: el, start: 'top 85%', once: true } }),
      });
    });
    $$('[data-fade]').forEach((el) => {
      gsap.from(el, { y: 24, opacity: 0, duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });

    /* SERVICIOS: las tarjetas suben en cascada fila por fila con un leve giro desde abajo.
       Mientras entran se apagan las transiciones CSS de .card-wrap (si no, pelearían con GSAP cuadro a cuadro). */
    const cascade = { each: 0.08, grid: 'auto' as const, from: 'start' as const };
    gsap.timeline({
      scrollTrigger: { trigger: svcList, start: 'top 82%', once: true },
      onStart: () => svcList.classList.add('is-entering'),
      onComplete: () => { svcList.classList.remove('is-entering'); gsap.set(svcCards, { clearProps: 'transform,opacity' }); },
    })
      .from(svcCards, { y: 40, opacity: 0, duration: 1.1, ease: 'expo.out', stagger: cascade }, 0)
      .from(svcCards.map((w) => $('.card', w)), { rotationX: -10, transformOrigin: '50% 100%', duration: 1.3, ease: 'expo.out', stagger: cascade }, 0);
    if (mouse) {
      // Giro 3D hacia el mouse + brillo que lo sigue. El tamaño se mide al entrar, no en cada movimiento.
      svcCards.forEach((w) => {
        const card = $('.card', w), glow = $('.card-glow', card);
        let rect: DOMRect | null = null;
        const rX = gsap.quickTo(card, 'rotationX', { duration: 0.6, ease: 'power3' }), rY = gsap.quickTo(card, 'rotationY', { duration: 0.6, ease: 'power3' });
        const gX = gsap.quickTo(glow, 'x', { duration: 0.35, ease: 'power3' }), gY = gsap.quickTo(glow, 'y', { duration: 0.35, ease: 'power3' });
        on(card, 'pointerenter', () => { rect = card.getBoundingClientRect(); gsap.to(glow, { opacity: 1, duration: 0.4 }); });
        on(card, 'pointermove', (e) => {
          const r = rect ??= card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
          rY((px - 0.5) * 5); rX((0.5 - py) * 4); // tarjetas anchas: giro más leve
          gX(e.clientX - r.left); gY(e.clientY - r.top);
        });
        on(card, 'pointerleave', () => { rect = null; rX(0); rY(0); gsap.to(glow, { opacity: 0, duration: 0.5 }); });
      });
    }

    /* RESULTADOS: las fotos suben en cascada al entrar (el abrir y cerrar lo hace CSS).
       Se anima la foto dentro de cada arco, no la franja, cuyo transform lo maneja el acordeón. */
    gsap.from('.acc-item .g-media', { yPercent: 100, duration: 1.3, ease: 'expo.out', stagger: 0.09, scrollTrigger: { trigger: '.accordion', start: 'top 80%', once: true } });

    /* EL ESTUDIO: la cortina presenta el lugar y los datos entran en cascada */
    gsap.timeline({ scrollTrigger: { trigger: '.studio-frame', start: 'top 75%', once: true } })
      .to('.studio-media .curtain', { yPercent: -101, duration: 1.4, ease: 'expo.inOut' })
      .from('.studio-media img', { scale: 1.3, duration: 2, ease: 'expo.out' }, 0.1)
      .from('.facts li', { x: -20, opacity: 0, duration: 0.8, ease: 'expo.out', stagger: 0.08 }, 0.6);
    if (isDesktop) {
      gsap.fromTo('.studio-media img', { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: '.studio-frame', start: 'top bottom', end: 'bottom top', scrub: true } });
    }

    /* CIERRE: el logo se descubre igual; el botón de WhatsApp responde al mouse (magnético) */
    gsap.timeline({ scrollTrigger: { trigger: '.closing-art', start: 'top 80%', once: true } })
      .to('.closing-media .curtain', { yPercent: -101, duration: 1.4, ease: 'expo.inOut' })
      .from('.closing-media img', { scale: 0.86, opacity: 0, duration: 1.6, ease: 'expo.out' }, 0.5);
    gsap.from('.steps b', { scale: 0, duration: 0.7, ease: 'back.out(1.8)', stagger: 0.1, scrollTrigger: { trigger: '.steps', start: 'top 85%', once: true } });
    if (mouse) {
      $$('[data-magnetic]').forEach((b) => {
        let rect: DOMRect | null = null;
        const bx = gsap.quickTo(b, 'x', { duration: 0.5, ease: 'power3' }), by = gsap.quickTo(b, 'y', { duration: 0.5, ease: 'power3' });
        on(b, 'pointerenter', () => { rect = b.getBoundingClientRect(); });
        on(b, 'pointermove', (e) => {
          const r = rect ??= b.getBoundingClientRect();
          bx((e.clientX - r.left - r.width / 2) * 0.3); by((e.clientY - r.top - r.height / 2) * 0.4);
        });
        on(b, 'pointerleave', () => { rect = null; bx(0); by(0); });
      });
    }

    return () => {
      cleanups.forEach((f) => f());
      html.classList.remove('js-motion');
      S.motion = false;
    };
  });
}

// SplitText mide las letras: se espera a las fuentes (precargadas, normalmente < 300 ms), con tope de 1 s.
Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1000))]).then(initMotion);
