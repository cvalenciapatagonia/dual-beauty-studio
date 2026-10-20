// Genera recursos derivados del logo y las fotos: marcas de agua en WebP, favicons e imagen Open Graph.
// Uso: node scripts/generar-recursos.mjs (desde sitio/). Se corre una vez; el resultado queda en el repo.
import sharp from 'sharp';

const src = '../prototipo/assets';
const marca = 'src/assets/marca';
const fondo = '#FBFAF7';

// Marcas de agua (se muestran a ~340-520 px y 7 % de opacidad: 900 px de ancho sobra)
await sharp(`${src}/logo-claro.png`).resize({ width: 900 }).webp({ quality: 80 }).toFile(`${marca}/marca-agua-claro.webp`);
await sharp(`${src}/logo-oscuro.png`).resize({ width: 900 }).webp({ quality: 80 }).toFile(`${marca}/marca-agua-oscuro.webp`);

// Favicons: logo recortado centrado en un cuadrado con margen
async function icono(size, out, bg) {
  const inner = Math.round(size * 0.84);
  const logo = await sharp(`${src}/logo-claro-recorte.png`).resize({ width: inner, height: inner, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: bg } })
    .composite([{ input: logo, gravity: 'center' }]).png().toFile(out);
}
await icono(32, 'public/favicon-32.png', { r: 251, g: 250, b: 247, alpha: 1 });
await icono(180, 'public/apple-touch-icon.png', { r: 251, g: 250, b: 247, alpha: 1 });
await icono(512, 'public/icon-512.png', { r: 251, g: 250, b: 247, alpha: 1 });

// Open Graph 1200 x 630: logo a la izquierda y foto de resultado a la derecha (así se ve el link en WhatsApp)
const foto = await sharp('../material-cliente/cabello-resultado-largo-castano.webp').resize({ width: 520, height: 630, fit: 'cover', position: 'attention' }).toBuffer();
const logo = await sharp(`${src}/logo-claro-recorte.png`).resize({ width: 420 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: fondo } })
  .composite([{ input: logo, left: 130, top: Math.round((630 - 407) / 2) }, { input: foto, left: 680, top: 0 }])
  .jpeg({ quality: 82, mozjpeg: true }).toFile('public/og.jpg');

console.log('Recursos generados');
