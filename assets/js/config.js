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
