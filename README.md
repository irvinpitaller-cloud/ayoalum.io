Aquí tienes el archivo todo-en-uno listo para abrir en el navegador. Guárdalo como index.html y ábrelo. Ya incluye:

· Configuración editable (arriba del script)
· Header con menú móvil
· Hero
· Servicios
· Catálogo premium con filtros y animaciones
· Proyectos
· Contacto + WhatsApp
· Lightbox con teclado y swipe
· Schema.org JSON-LD
· Animaciones scroll

⚠️ Las imágenes usan placeholders de Unsplash para que puedas visualizarlo al instante. Cuando tengas las tuyas, reemplaza las URLs en CONFIG.catalogo, CONFIG.servicios, CONFIG.proyectos y CONFIG.hero.imagenFondo.

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Alfa y Omega | Aluminios & Cristales</title>
<meta name="description" content="Fabricación e instalación de ventanas, canceles, domos y cristal templado en Guadalajara." />
<meta name="geo.region" content="MX-JAL" />
<meta name="geo.placename" content="Guadalajara" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<style>
/* ============ BASE ============ */
:root{
  --carbon:#0B0F14;
  --plata:#B7B9BD;
  --dorado:#D4AF6B;
  --blanco:#F5F5F7;
  --font:'Montserrat',system-ui,sans-serif;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:var(--font);
  background:var(--carbon);
  color:var(--blanco);
  line-height:1.6;
  overflow-x:hidden;
}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
button{font-family:inherit}
.container{width:min(1240px,92%);margin:0 auto}

/* ============ BOTONES ============ */
.btn{
  display:inline-flex;align-items:center;gap:.5rem;
  padding:.85rem 1.6rem;
  border-radius:4px;
  font-weight:600;font-size:.9rem;
  letter-spacing:.05em;
  transition:.35s cubic-bezier(.2,.8,.2,1);
  cursor:pointer;border:1px solid transparent;
}
.btn--gold{background:var(--dorado);color:var(--carbon)}
.btn--gold:hover{filter:brightness(1.1);transform:translateY(-2px)}
.btn--outline{border-color:var(--dorado);color:var(--dorado);background:transparent}
.btn--outline:hover{background:var(--dorado);color:var(--carbon)}

/* ============ HEADER ============ */
.header{
  position:sticky;top:0;z-index:100;
  background:rgba(11,15,20,.85);
  backdrop-filter:blur(14px);
  border-bottom:1px solid rgba(212,175,107,.15);
}
.header__inner{
  display:flex;align-items:center;justify-content:space-between;
  padding:1rem 0;gap:1rem;position:relative;
}
.header__logo img{height:52px}
.header__nav{display:flex;gap:2rem;align-items:center}
.header__nav a{
  font-size:.85rem;font-weight:500;letter-spacing:.08em;
  text-transform:uppercase;position:relative;padding:.25rem 0;
}
.header__nav a::after{
  content:"";position:absolute;left:0;bottom:-2px;height:1px;width:0;
  background:var(--dorado);transition:width .4s cubic-bezier(.2,.8,.2,1);
}
.header__nav a:hover{color:var(--dorado)}
.header__nav a:hover::after{width:100%}

.header__toggle{
  display:none;flex-direction:column;justify-content:space-between;
  width:30px;height:22px;background:transparent;border:0;cursor:pointer;
}
.header__toggle span{
  display:block;height:2px;width:100%;background:var(--dorado);
  border-radius:2px;transition:.3s;
}
.header__toggle.active span:nth-child(1){transform:translateY(10px) rotate(45deg)}
.header__toggle.active span:nth-child(2){opacity:0}
.header__toggle.active span:nth-child(3){transform:translateY(-10px) rotate(-45deg)}

@media(max-width:860px){
  .header__toggle{display:flex}
  .header__nav{
    position:absolute;top:100%;left:0;right:0;
    background:rgba(11,15,20,.98);backdrop-filter:blur(14px);
    flex-direction:column;gap:0;padding:1rem 0;
    opacity:0;pointer-events:none;transform:translateY(-10px);
    transition:.3s;border-bottom:1px solid rgba(212,175,107,.2);
  }
  .header__nav.open{opacity:1;pointer-events:auto;transform:translateY(0)}
  .header__nav a{padding:.9rem 0;width:100%;text-align:center}
  .header__cta{display:none}
}

/* ============ HERO ============ */
.hero{
  min-height:88vh;display:flex;align-items:center;
  background-size:cover;background-position:center;
  position:relative;padding:4rem 0;
}
.hero::before{
  content:"";position:absolute;inset:0;
  background:linear-gradient(180deg,rgba(11,15,20,.55),rgba(11,15,20,.95));
}
.hero__content{position:relative;max-width:760px}
.hero__kicker{
  display:inline-block;font-size:.72rem;letter-spacing:.4em;
  text-transform:uppercase;color:var(--dorado);margin-bottom:1.2rem;
}
.hero h1{
  font-size:clamp(2rem,5vw,3.6rem);font-weight:600;line-height:1.15;
  letter-spacing:-.02em;margin-bottom:1.2rem;
}
.hero h1 em{color:var(--dorado);font-style:normal;font-weight:500}
.hero p{color:var(--plata);font-size:1.05rem;margin-bottom:2rem;max-width:560px}

/* ============ SECCIONES ============ */
section{padding:6rem 0}
.section-title{
  text-align:center;font-size:clamp(1.6rem,3vw,2.2rem);
  font-weight:500;letter-spacing:.15em;text-transform:uppercase;
  margin-bottom:1rem;
}
.section-title::after{
  content:"";display:block;width:60px;height:1px;
  background:var(--dorado);margin:1rem auto 0;
}

/* ============ SERVICIOS ============ */
.servicios{background:var(--blanco);color:var(--carbon)}
.servicios .section-title{color:var(--carbon)}
.servicios__grid{
  display:grid;gap:1.5rem;margin-top:3rem;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
}
.card{
  background:#fff;padding:2rem 1.5rem;border-radius:10px;
  border:1px solid rgba(11,15,20,.06);
  box-shadow:0 4px 24px rgba(11,15,20,.04);
  transition:transform .5s cubic-bezier(.2,.8,.2,1),box-shadow .5s;
  opacity:0;transform:translateY(30px);
}
.card.in-view{opacity:1;transform:translateY(0)}
.card:hover{
  transform:translateY(-6px);
  box-shadow:0 20px 40px -15px rgba(11,15,20,.15);
}
.card h3{font-size:1.05rem;margin-bottom:.6rem;color:var(--carbon);font-weight:600}
.card p{color:#555;font-size:.9rem;line-height:1.6}

/* ============ CATÁLOGO ============ */
.catalogo{
  background:
    radial-gradient(1200px 600px at 50% -10%,rgba(212,175,107,.06),transparent 60%),
    var(--carbon);
  position:relative;overflow:hidden;
}
.catalogo__head{text-align:center;max-width:720px;margin:0 auto 3rem}
.catalogo__kicker{
  display:inline-block;font-size:.72rem;letter-spacing:.35em;
  text-transform:uppercase;color:var(--dorado);margin-bottom:.5rem;
}
.catalogo__kicker::before,.catalogo__kicker::after{
  content:"";display:inline-block;width:32px;height:1px;
  background:var(--dorado);vertical-align:middle;margin:0 1rem;opacity:.6;
}
.catalogo__lead{
  color:var(--plata);margin-top:1rem;font-size:.98rem;line-height:1.7;
}
.catalogo__filtros{
  display:flex;flex-wrap:wrap;justify-content:center;
  gap:.5rem;margin-bottom:3.5rem;
}
.filtro{
  padding:.55rem 1.3rem;background:transparent;
  border:1px solid rgba(212,175,107,.25);
  color:var(--plata);border-radius:999px;
  font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;
  cursor:pointer;transition:all .35s cubic-bezier(.4,0,.2,1);
  position:relative;overflow:hidden;
}
.filtro::before{
  content:"";position:absolute;inset:0;background:var(--dorado);
  transform:scaleX(0);transform-origin:right;
  transition:transform .4s cubic-bezier(.7,0,.2,1);z-index:-1;
}
.filtro:hover{color:var(--dorado);border-color:var(--dorado)}
.filtro.active{color:var(--carbon);border-color:var(--dorado)}
.filtro.active::before{transform:scaleX(1);transform-origin:left}

.catalogo__grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(290px,1fr));
  gap:1.75rem;
  transition:opacity .25s ease,transform .25s ease;
}

/* Tarjetas catálogo */
.cat-card{
  position:relative;border-radius:12px;overflow:hidden;
  background:linear-gradient(160deg,#14181f,#0d1015);
  border:1px solid rgba(212,175,107,.12);
  cursor:pointer;
  transition:transform .6s cubic-bezier(.2,.8,.2,1),
             box-shadow .6s ease,
             border-color .4s ease;
  opacity:0;transform:translateY(30px) scale(.97);
  will-change:transform,opacity;
}
.cat-card.in-view{opacity:1;transform:translateY(0) scale(1)}
.cat-card:hover{
  transform:translateY(-8px);
  border-color:rgba(212,175,107,.5);
  box-shadow:0 20px 40px -15px rgba(0,0,0,.7),
             0 0 0 1px rgba(212,175,107,.2);
}
.cat-card__media{position:relative;aspect-ratio:4/3;overflow:hidden}
.cat-card__media img{
  width:100%;height:100%;object-fit:cover;
  transition:transform 1.2s cubic-bezier(.2,.8,.2,1),filter .6s;
  filter:saturate(.85) contrast(1.05);
}
.cat-card:hover .cat-card__media img{
  transform:scale(1.08);filter:saturate(1) contrast(1.1);
}
.cat-card__badge{
  position:absolute;top:1rem;left:1rem;padding:.35rem .8rem;
  background:var(--dorado);color:var(--carbon);
  font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;
  font-weight:700;border-radius:999px;z-index:2;
}
.cat-card__action{
  position:absolute;top:1rem;right:1rem;width:38px;height:38px;
  border-radius:50%;background:rgba(212,175,107,.15);
  backdrop-filter:blur(6px);
  border:1px solid rgba(212,175,107,.4);
  display:grid;place-items:center;color:var(--dorado);
  font-size:1.1rem;transform:scale(0) rotate(-90deg);
  transition:transform .5s cubic-bezier(.2,.8,.2,1),background .3s;
  z-index:2;
}
.cat-card:hover .cat-card__action{
  transform:scale(1) rotate(0);background:rgba(212,175,107,.25);
}
.cat-card__overlay{
  position:absolute;inset:0;
  background:linear-gradient(to top,rgba(11,15,20,.98) 0%,rgba(11,15,20,.75) 40%,transparent 75%);
  display:flex;flex-direction:column;justify-content:flex-end;
  padding:1.5rem;transform:translateY(30%);opacity:0;
  transition:transform .55s cubic-bezier(.2,.8,.2,1),opacity .45s ease;
}
.cat-card:hover .cat-card__overlay{transform:translateY(0);opacity:1}
.cat-card__cat{
  font-size:.65rem;letter-spacing:.25em;text-transform:uppercase;
  color:var(--dorado);margin-bottom:.4rem;
}
.cat-card__titulo{
  font-size:1.1rem;font-weight:600;color:var(--blanco);
  margin-bottom:.4rem;line-height:1.3;
}
.cat-card__desc{
  font-size:.82rem;color:var(--plata);line-height:1.5;margin-bottom:.8rem;
}
.cat-card__meta{
  display:flex;gap:1rem;flex-wrap:wrap;font-size:.72rem;
  color:var(--plata);border-top:1px solid rgba(212,175,107,.2);
  padding-top:.75rem;margin-top:auto;
}
.cat-card__meta strong{color:var(--dorado);font-weight:600}

.catalogo__cta{text-align:center;margin-top:4rem}
.catalogo__cta p{color:var(--plata);margin-bottom:1rem;font-size:.95rem}
.catalogo__vacio{
  grid-column:1/-1;text-align:center;padding:4rem 0;
  color:var(--plata);letter-spacing:.1em;
}

/* ============ PROYECTOS ============ */
.proyectos{background:var(--carbon)}
.proyectos__grid{
  display:grid;gap:1.5rem;margin-top:3rem;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
}
.proyecto{
  position:relative;border-radius:10px;overflow:hidden;
  aspect-ratio:4/3;cursor:pointer;
  opacity:0;transform:translateY(20px);
  transition:opacity .6s,transform .6s;
}
.proyecto.in-view{opacity:1;transform:translateY(0)}
.proyecto img{
  width:100%;height:100%;object-fit:cover;
  transition:transform .8s cubic-bezier(.2,.8,.2,1);
}
.proyecto:hover img{transform:scale(1.08)}
.proyecto__overlay{
  position:absolute;inset:0;
  background:linear-gradient(to top,rgba(11,15,20,.95) 0%,transparent 60%);
  display:flex;flex-direction:column;justify-content:flex-end;
  padding:1.5rem;
}
.proyecto__overlay span{
  color:var(--dorado);font-size:.7rem;letter-spacing:.15em;
  text-transform:uppercase;margin-bottom:.3rem;
}
.proyecto__overlay h3{color:var(--blanco);font-size:1.05rem;font-weight:600}

/* ============ CONTACTO ============ */
.contacto{background:var(--carbon);text-align:center}
.contacto__inner{max-width:640px;margin:0 auto}
.contacto p{color:var(--plata);margin:1.5rem 0 2rem}
.contacto .btn{margin:.35rem}

/* ============ FOOTER ============ */
.footer{
  padding:2.5rem 0;text-align:center;
  border-top:1px solid rgba(212,175,107,.15);
  color:var(--plata);font-size:.85rem;
  background:var(--carbon);
}
.footer strong{color:var(--dorado);font-weight:500}

/* ============ ANIMACIONES SCROLL ============ */
[data-anim]{opacity:0;transform:translateY(30px);
  transition:opacity .8s ease,transform .8s cubic-bezier(.2,.8,.2,1)}
[data-anim="zoom"]{transform:scale(.95)}
[data-anim="left"]{transform:translateX(-40px)}
[data-anim].in-view{opacity:1;transform:translate(0) scale(1)}
[data-delay="1"]{transition-delay:.1s}
[data-delay="2"]{transition-delay:.2s}
[data-delay="3"]{transition-delay:.3s}

@media(prefers-reduced-motion:reduce){
  *{animation:none!important;transition:none!important}
  [data-anim],.cat-card,.card,.proyecto{opacity:1!important;transform:none!important}
}

/* ============ LIGHTBOX ============ */
.lightbox{
  position:fixed;inset:0;background:rgba(11,15,20,.96);
  display:none;align-items:center;justify-content:center;
  z-index:1000;padding:2rem;
}
.lightbox.open{display:flex;animation:fadeIn .25s ease}
.lightbox__img{
  max-width:90vw;max-height:85vh;border-radius:8px;
  box-shadow:0 20px 60px rgba(0,0,0,.7);
  animation:zoomIn .3s ease;
}
.lightbox__close,.lightbox__nav{
  position:absolute;background:transparent;border:0;
  color:var(--dorado);font-size:2.5rem;cursor:pointer;
  transition:transform .2s,color .2s;
}
.lightbox__close{top:1rem;right:1.5rem;font-size:1.8rem}
.lightbox__nav--prev{left:1.5rem;top:50%;transform:translateY(-50%)}
.lightbox__nav--next{right:1.5rem;top:50%;transform:translateY(-50%)}
.lightbox__close:hover,.lightbox__nav:hover{color:var(--blanco);transform:scale(1.15)}
.lightbox__nav--prev:hover{transform:translateY(-50%) scale(1.15)}
.lightbox__nav--next:hover{transform:translateY(-50%) scale(1.15)}

@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes zoomIn{from{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}

/* ============ RESPONSIVE ============ */
@media(max-width:640px){
  section{padding:4rem 0}
  .hero{min-height:80vh}
  .catalogo__grid{grid-template-columns:1fr;gap:1.25rem}
  .cat-card__overlay{
    transform:translateY(0);opacity:1;
    background:linear-gradient(to top,rgba(11,15,20,.95) 0%,transparent 70%);
  }
  .cat-card__action{transform:scale(1) rotate(0)}
}
</style>
</head>
<body>

<!-- ================= HEADER ================= -->
<header class="header">
  <div class="container header__inner">
    <a href="#" class="header__logo">
      <img id="logo" src="https://placehold.co/180x50/0B0F14/D4AF6B?text=ALFA+Y+OMEGA" alt="Alfa y Omega" />
    </a>
    <button class="header__toggle" id="menu-toggle" aria-label="Abrir menú" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <nav class="header__nav" id="menu-nav">
      <a href="#servicios">Sistemas</a>
      <a href="#catalogo">Catálogo</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </nav>
    <a id="header-phone" class="btn btn--gold header__cta" href="tel:+523317413454">33 17 41 34 54</a>
  </div>
</header>

<!-- ================= HERO ================= -->
<section class="hero" id="hero" style="background-image:url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')">
  <div class="container hero__content" data-anim="zoom">
    <span class="hero__kicker">Alfa y Omega · Aluminios & Cristales</span>
    <h1>Precisión en <em>aluminio</em><br>y claridad en <em>cristal</em>.</h1>
    <p>Fabricación e instalación de ventanas, canceles, domos y cristal templado en Guadalajara. Calidad en cada proyecto.</p>
    <a href="#catalogo" class="btn btn--gold" data-anim="left" data-delay="1">Ver catálogo</a>
  </div>
</section>

<!-- ================= SERVICIOS ================= -->
<section class="servicios" id="servicios">
  <div class="container">
    <h2 class="section-title" data-anim="zoom">Nuestros Sistemas</h2>
    <div class="servicios__grid" id="servicios-grid"></div>
  </div>
</section>

<!-- ================= CATÁLOGO PREMIUM ================= -->
<section class="catalogo" id="catalogo">
  <div class="container">
    <header class="catalogo__head" data-anim="zoom">
      <span class="catalogo__kicker">Catálogo</span>
      <h2 class="section-title">Sistemas & Acabados</h2>
      <p class="catalogo__lead">
        Explora nuestra línea de productos en aluminio y cristal.
        Cada pieza se fabrica a medida con estándares de calidad premium.
      </p>
    </header>

    <div class="catalogo__filtros" id="catalogo-filtros" data-anim="zoom"></div>
    <div class="catalogo__grid" id="catalogo-grid" aria-live="polite"></div>

    <div class="catalogo__cta" data-anim="zoom">
      <p>¿No encuentras lo que buscas?</p>
      <a id="catalogo-wa" class="btn btn--gold" target="_blank" rel="noopener">Solicitar cotización</a>
    </div>
  </div>
</section>

<!-- ================= PROYECTOS ================= -->
<section class="proyectos" id="proyectos">
  <div class="container">
    <h2 class="section-title" data-anim="zoom">Proyectos Recientes</h2>
    <div class="proyectos__grid" id="proyectos-grid"></div>
  </div>
</section>

<!-- ================= CONTACTO ================= -->
<section class="contacto" id="contacto">
  <div class="container contacto__inner" data-anim="zoom">
    <h2 class="section-title">Cotiza tu proyecto</h2>
    <p>Escríbenos por WhatsApp o llámanos directamente. Respondemos el mismo día.</p>
    <a id="contacto-wa" class="btn btn--gold" target="_blank" rel="noopener">WhatsApp</a>
    <a id="contacto-tel" class="btn btn--outline" href="tel:+523317413454">33 17 41 34 54</a>
  </div>
</section>

<!-- ================= FOOTER ================= -->
<footer class="footer">
  <div class="container">
    <p id="footer-text"></p>
  </div>
</footer>

<!-- ================= LIGHTBOX ================= -->
<div class="lightbox" id="lightbox" aria-hidden="true">
  <button class="lightbox__close" id="lightbox-close" aria-label="Cerrar">✕</button>
  <button class="lightbox__nav lightbox__nav--prev" id="lightbox-prev" aria-label="Anterior">‹</button>
  <img class="lightbox__img" id="lightbox-img" src="" alt="" />
  <button class="lightbox__nav lightbox__nav--next" id="lightbox-next" aria-label="Siguiente">›</button>
</div>

<script>
/* ============================================================
   CONFIGURACIÓN — EDITA SOLO ESTA PARTE
   ============================================================ */
const CONFIG = {
  marca:{
    nombre:"Alfa y Omega",
    nombreCompleto:"Alfa y Omega Aluminios & Cristales",
    lema:"Soluciones en aluminio y cristal",
    telefono:"33 17 41 34 54",
    telefonoLink:"tel:+523317413454",
    whatsapp:"523317413454",
    email:"contacto@alfayomega.com",
    direccion:"Guadalajara, Jalisco, México",
    logo:"https://placehold.co/180x50/0B0F14/D4AF6B?text=ALFA+Y+OMEGA",
    ogImage:"https://placehold.co/1200x630/0B0F14/D4AF6B?text=Alfa+y+Omega"
  },
  colores:{carbon:"#0B0F14",plata:"#B7B9BD",dorado:"#D4AF6B",blanco:"#F5F5F7"},
  hero:{
    titulo:"Precisión en aluminio y claridad en cristal.",
    subtitulo:"Fabricación e instalación de ventanas, canceles, domos y cristal templado en Guadalajara.",
    botonTexto:"Ver catálogo",
    botonLink:"#catalogo",
    imagenFondo:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
  },
  seo:{
    titulo:"Alfa y Omega | Aluminios y Cristales en Guadalajara",
    descripcion:"Fabricación e instalación de ventanas, canceles, domos y cristal templado. Calidad en cada proyecto.",
    keywords:"aluminio, cristal, canceles, domos, ventanas, Guadalajara"
  },
  seoLocal:{
    tipo:"HomeAndConstructionBusiness",
    horario:"Mo-Sa 09:00-19:00",
    latitud:20.6737,longitud:-103.3447,
    ciudad:"Guadalajara",estado:"Jalisco",cp:"44100",pais:"MX",
    precioRango:"$$",
    areaServicio:["Guadalajara","Zapopan","Tlaquepaque","Tonalá","Tlajomulco"]
  },
  redes:{facebook:"",instagram:"",tiktok:""},

  servicios:[
    {id:"corredizo",nombre:"Sistema Corredizo",descripcion:"Ventanas y canceles de desplazamiento suave con perfiles de aluminio de alta resistencia."},
    {id:"abatible",nombre:"Sistema Abatible",descripcion:"Máxima ventilación y sellado hermético para climas exigentes."},
    {id:"fijo",nombre:"Sistema Fijo",descripcion:"Paños fijos de cristal templado para vistas panorámicas sin interrupciones."},
    {id:"plegable",nombre:"Sistema Plegable",descripcion:"Abre por completo tus espacios hacia terrazas y jardines."},
    {id:"domo",nombre:"Domos",descripcion:"Iluminación natural y protección contra la intemperie."},
    {id:"cristal-templado",nombre:"Cristal Templado",descripcion:"Barandales, mamparas y divisiones de cristal de seguridad."}
  ],

  /* CATÁLOGO — Imágenes demo de Unsplash, reemplaza por las tuyas */
  catalogo:[
    {id:1,titulo:'Cancel Corredizo Serie 3"',categoria:"corredizo",etiqueta:"Corredizo",descripcion:"Perfil de aluminio color natural, cristal claro 6 mm.",acabado:"Aluminio natural",medidas:"A medida",destacado:true,imagen:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"},
    {id:2,titulo:"Ventana Abatible Proyectante",categoria:"abatible",etiqueta:"Abatible",descripcion:"Sellado hermético, ideal para recámaras y oficinas.",acabado:"Blanco mate",medidas:"60×120 a 120×180 cm",destacado:false,imagen:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"},
    {id:3,titulo:"Fijo Panorámico 10 mm",categoria:"fijo",etiqueta:"Fijo",descripcion:"Cristal templado de 10 mm para vistas sin interrupciones.",acabado:"Cristal incoloro",medidas:"A medida",destacado:true,imagen:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"},
    {id:4,titulo:"Plegable Terraza Premium",categoria:"plegable",etiqueta:"Plegable",descripcion:"Sistema de apertura total para exteriores.",acabado:"Negro mate",medidas:"Hasta 3 m de claro",destacado:false,imagen:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"},
    {id:5,titulo:"Domo Fijo Cuadrado",categoria:"domo",etiqueta:"Domo",descripcion:"Iluminación natural y aislamiento térmico.",acabado:"Aluminio blanco",medidas:"1×1 a 2×2 m",destacado:true,imagen:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"},
    {id:6,titulo:"Barandal Cristal Templado",categoria:"cristal-templado",etiqueta:"Cristal Templado",descripcion:"Cristal de seguridad 10 mm con herrajes de acero inox.",acabado:"Acero pulido",medidas:"A medida",destacado:false,imagen:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"},
    {id:7,titulo:"Cancel Baño Cristal 8 mm",categoria:"especiales",etiqueta:"Especiales",descripcion:"Diseño a medida con cristal templado 8 mm.",acabado:"Cromado espejo",medidas:"A medida",destacado:true,imagen:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"},
    {id:8,titulo:"Acoples y Perfiles",categoria:"acoples",etiqueta:"Acoples",descripcion:"Refacciones originales para mantenimiento.",acabado:"Natural",medidas:"Estándar",destacado:false,imagen:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"}
  ],

  proyectos:[
    {titulo:"Cancelería residencial",categoria:"corredizo",ubicacion:"Zapopan, Jalisco",imagen:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"},
    {titulo:"Fachada de cristal templado",categoria:"cristal-templado",ubicacion:"Guadalajara Centro",imagen:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"},
    {titulo:"Domo para casa habitación",categoria:"domo",ubicacion:"Tlaquepaque",imagen:"https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"},
    {titulo:"Ventanas abatibles",categoria:"abatible",ubicacion:"Zapopan",imagen:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"},
    {titulo:"Canceles de baño",categoria:"especiales",ubicacion:"Guadalajara",imagen:"https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"},
    {titulo:"Puertas plegables",categoria:"plegable",ubicacion:"Puerto Vallarta",imagen:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"}
  ]
};

/* ============================================================
   LÓGICA — No necesitas editar debajo
   ============================================================ */
document.addEventListener("DOMContentLoaded",()=>{
  const C = CONFIG;
  const $ = id => document.getElementById(id);
  const etiquetas = {
    todos:"Todos",corredizo:"Corredizo",abatible:"Abatible",fijo:"Fijo",
    plegable:"Plegable",domo:"Domos","cristal-templado":"Cristal Templado",
    acoples:"Acoples",especiales:"Especiales"
  };

  /* ---------- Colores dinámicos ---------- */
  const root = document.documentElement;
  Object.entries(C.colores).forEach(([k,v])=>{
    const map = {carbon:"--carbon",plata:"--plata",dorado:"--dorado",blanco:"--blanco"};
    root.style.setProperty(map[k],v);
  });

  /* ---------- SEO ---------- */
  document.title = C.seo.titulo;
  document.querySelector('meta[name="description"]').content = C.seo.descripcion;
  document.querySelector('meta[name="keywords"]').content = C.seo.keywords;

  /* ---------- Header ---------- */
  $("logo").src = C.marca.logo;
  $("header-phone").textContent = C.marca.telefono;
  $("header-phone").href = C.marca.telefonoLink;

  /* ---------- Hero ---------- */
  $("hero").style.backgroundImage = `url('${C.hero.imagenFondo}')`;

  /* ---------- Servicios ---------- */
  $("servicios-grid").innerHTML = C.servicios.map(s=>`
    <div class="card" data-anim="zoom">
      <h3>${s.nombre}</h3>
      <p>${s.descripcion}</p>
    </div>
  `).join("");

  /* ---------- Proyectos ---------- */
  $("proyectos-grid").innerHTML = C.proyectos.map(p=>`
    <article class="proyecto" data-anim="zoom">
      <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" />
      <div class="proyecto__overlay">
        <span>${etiquetas[p.categoria] || p.categoria}</span>
        <h3>${p.titulo}</h3>
      </div>
    </article>
  `).join("");

  /* ---------- Contacto ---------- */
  const waMsg = encodeURIComponent("Hola, quiero cotizar un proyecto de aluminio y cristal.");
  $("contacto-wa").href = `https://wa.me/${C.marca.whatsapp}?text=${waMsg}`;
  $("contacto-tel").textContent = C.marca.telefono;
  $("contacto-tel").href = C.marca.telefonoLink;

  /* ---------- Footer ---------- */
  $("footer-text").innerHTML =
    `©️ ${new Date().getFullYear()} <strong>${C.marca.nombreCompleto}</strong> · ${C.marca.lema} · ${C.marca.direccion}`;

  /* ============================================================
     CATÁLOGO PREMIUM
     ============================================================ */
  const catFiltrosEl = $("catalogo-filtros");
  const catGridEl = $("catalogo-grid");

  $("catalogo-wa").href = `https://wa.me/${C.marca.whatsapp}?text=${encodeURIComponent(
    "Hola, me interesa cotizar un producto del catálogo."
  )}`;

  const catCategorias = ["todos",...new Set(C.catalogo.map(p=>p.categoria))];

  catFiltrosEl.innerHTML = catCategorias.map((cat,i)=>`
    <button class="filtro ${i===0?"active":""}" data-cat="${cat}">
      ${etiquetas[cat]||cat}
    </button>
  `).join("");

  const renderCatalogo = (filtro="todos")=>{
    const items = filtro==="todos" ? C.catalogo : C.catalogo.filter(p=>p.categoria===filtro);
    if(!items.length){
      catGridEl.innerHTML = `<p class="catalogo__vacio">Sin resultados en esta categoría.</p>`;
      return;
    }
    catGridEl.innerHTML = items.map((p,i)=>`
      <article class="cat-card" data-id="${p.id}" data-cat="${p.categoria}" tabindex="0"
               style="transition-delay:${(i%6)*60}ms">
        <div class="cat-card__media">
          ${p.destacado?`<span class="cat-card__badge">Destacado</span>`:""}
          <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" />
          <div class="cat-card__action" aria-hidden="true">↗️</div>
          <div class="cat-card__overlay">
            <span class="cat-card__cat">${p.etiqueta}</span>
            <h3 class="cat-card__titulo">${p.titulo}</h3>
            <p class="cat-card__desc">${p.descripcion}</p>
            <div class="cat-card__meta">
              <span><strong>Acabado:</strong> ${p.acabado}</span>
              <span><strong>Medidas:</strong> ${p.medidas}</span>
            </div>
          </div>
        </div>
      </article>
    `).join("");

    // Animación stagger
    const cards = catGridEl.querySelectorAll(".cat-card");
    if("IntersectionObserver" in window){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach((entry,idx)=>{
          if(entry.isIntersecting){
            setTimeout(()=>entry.target.classList.add("in-view"), idx*60);
            io.unobserve(entry.target);
          }
        });
      },{threshold:0.15,rootMargin:"0px 0px -40px 0px"});
      cards.forEach(c=>io.observe(c));
    } else {
      cards.forEach(c=>c.classList.add("in-view"));
    }
  };

  renderCatalogo();

  catFiltrosEl.addEventListener("click",(e)=>{
    const btn = e.target.closest(".filtro");
    if(!btn) return;
    catFiltrosEl.querySelectorAll(".filtro").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    catGridEl.style.opacity = "0";
    catGridEl.style.transform = "translateY(10px)";
    setTimeout(()=>{
      renderCatalogo(btn.dataset.cat);
      catGridEl.style.opacity = "1";
      catGridEl.style.transform = "translateY(0)";
    },220);
  });

  /* ============================================================
     LIGHTBOX
     ============================================================ */
  const lightbox = $("lightbox");
  const lightboxImg = $("lightbox-img");
  let imagenes = [];
  let indexActual = 0;

  // Recolecta fotos del catálogo y proyectos
  C.catalogo.forEach(p => imagenes.push({src:p.imagen, alt:p.titulo}));
  C.proyectos.forEach(p => imagenes.push({src:p.imagen, alt:p.titulo}));

  const abrirLightbox = (i)=>{
    indexActual = i;
    lightboxImg.src = imagenes[i].src;
    lightboxImg.alt = imagenes[i].alt;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  };
  const cerrarLightbox = ()=>{
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };
  const mover = (dir)=>{
    indexActual = (indexActual + dir + imagenes.length) % imagenes.length;
    lightboxImg.src = imagenes[indexActual].src;
    lightboxImg.alt = imagenes[indexActual].alt;
  };

  // Click en cualquier imagen del catálogo o proyectos
  document.querySelectorAll(".cat-card, .proyecto").forEach(el=>{
    el.addEventListener("click",()=>{
      const img = el.querySelector("img");
      let idx = imagenes.findIndex(i=>i.src===img.src);
      if(idx===-1){ imagenes.push({src:img.src,alt:img.alt}); idx=imagenes.length-1; }
      abrirLightbox(idx);
    });
  });

  $("lightbox-close").addEventListener("click",cerrarLightbox);
  $("lightbox-prev").addEventListener("click",e=>{e.stopPropagation();mover(-1)});
  $("lightbox-next").addEventListener("click",e=>{e.stopPropagation();mover(1)});
  lightbox.addEventListener("click",e=>{if(e.target===lightbox)cerrarLightbox()});

  document.addEventListener("keydown",e=>{
    if(!lightbox.classList.contains("open")) return;
    if(e.key==="Escape") cerrarLightbox();
    if(e.key==="ArrowLeft") mover(-1);
    if(e.key==="ArrowRight") mover(1);
  });

  // Swipe móvil
  let touchX = 0;
  lightbox.addEventListener("touchstart",e=>{touchX = e.touches[0].clientX});
  lightbox.addEventListener("touchend",e=>{
    const dx = e.changedTouches[0].clientX - touchX;
    if(Math.abs(dx)>50) mover(dx>0?-1:1);
  });

  /* ============================================================
     MENÚ MÓVIL
     ============================================================ */
  const toggle = $("menu-toggle");
  const nav = $("menu-nav");
  toggle.addEventListener("click",()=>{
    const abierto = nav.classList.toggle("open");
    toggle.classList.toggle("active",abierto);
    toggle.setAttribute("aria-expanded",abierto);
  });
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    nav.classList.remove("open");
    toggle.classList.remove("active");
  }));

  /* ============================================================
     ANIMACIONES SCROLL
     ============================================================ */
  if("IntersectionObserver" in window){
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },{threshold:0.15,rootMargin:"0px 0px -50px 0px"});
    document.querySelectorAll("[data-anim], .card, .proyecto").forEach(el=>observer.observe(el));
  } else {
    document.querySelectorAll("[data-anim], .card, .proyecto").forEach(el=>el.classList.add("in-view"));
  }

  /* ============================================================
     SCHEMA.ORG JSON-LD
     ============================================================ */
  const SL = C.seoLocal;
  const schema = {
    "@context":"https://schema.org",
    "@type":SL.tipo,
    "name":C.marca.nombreCompleto,
    "description":C.seo.descripcion,
    "telephone":C.marca.telefono,
    "email":C.marca.email,
    "priceRange":SL.precioRango,
    "address":{
      "@type":"PostalAddress",
      "streetAddress":C.marca.direccion,
      "addressLocality":SL.ciudad,
      "addressRegion":SL.estado,
      "postalCode":SL.cp,
      "addressCountry":SL.pais
    },
    "geo":{"@type":"GeoCoordinates","latitude":SL.latitud,"longitude":SL.longitud},
    "openingHours":SL.horario,
    "areaServed":SL.areaServicio.map(c=>({"@type":"City","name":c})),
    "makesOffer":C.servicios.map(s=>({
      "@type":"Offer",
      "itemOffered":{"@type":"Service","name":s.nombre,"description":s.descripcion}
    }))
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
});
</script>
</body>
</html>
```

---

🎬 Cómo probarlo

1. Copia el bloque completo.
2. Pégalo en un archivo llamado index.html.
3. Ábrelo con doble clic en tu navegador.
4. Listo. No requiere servidor, build ni dependencias.

---

🔧 Cómo personalizar en 30 segundos

Todo se edita en el objeto CONFIG del <script>:

Quiero cambiar… Edita en CONFIG
Nombre, teléfono, WhatsApp marca
Imagen del hero hero.imagenFondo
Productos del catálogo catalogo[] (agrega/quita objetos)
Categorías nuevas Crea un objeto con categoria:"tuCategoria" y agrega su nombre en etiquetas
Color dorado colores.dorado
Ubicación para SEO local seoLocal (lat, lng, ciudad)
Proyectos proyectos[]

---

✨ Lo que verás al abrirlo

· Hero con imagen de fondo y texto que hace zoom-in al cargar.
· Servicios en tarjetas blancas que aparecen al hacer scroll.
· Catálogo con:
  · 8 productos demo con fotos.
  · Filtros pill que se rellenan de dorado al activarse.
  · Hover que eleva la tarjeta, hace zoom a la imagen y muestra overlay con acabado + medidas.
  · Badge dorado "Destacado" en productos marcados.
  · Icono "↗️" que gira al hacer hover.
  · Stagger de 60 ms entre tarjetas al entrar en vista.
· Proyectos en grid con overlay.
· Contacto con botones WhatsApp y llamada.
· Lightbox al hacer clic en cualquier imagen (flechas, teclado, swipe).
· Menú móvil funcional con hamburguesa animada.

Cuando tengas tus fotos reales, solo reemplaza las URLs de Unsplash en CONFIG.catalogo[].imagen y CONFIG.proyectos[].imagen por rutas locales como images/sistemas/corredizo-1.jpg.

¿Quieres que le agregue la vista rápida lateral tipo ficha técnica con botón "Cotizar este producto" que ya incluya el nombre del producto en el mensaje de WhatsApp? Es un plus premium que queda espectacular en catálogos. 🚀
