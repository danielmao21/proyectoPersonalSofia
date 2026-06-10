const photos = [
  {
    src: "assets/img/foto-01.jpeg",
    alt: "Panoramica montanosa de Murillo",
    title: "01. Bruma sobre Murillo",
    description:
      "Hay silencios que guardan siglos de belleza inmutable. Geometrías de hielo perfectas que confunden la paz con la tregua",
  },
  {
    src: "assets/img/foto-02.jpeg",
    alt: "Camino rural entre vegetacion",
    title: "02. Camino de altura",
    description:
      "El mapa insiste en nombrar lo que el viento se llevó. Las rutas permanecen, pero los destinos mutaron en distancia.",
  },
  {
    src: "assets/img/foto-03.jpeg",
    alt: "Fachada antigua en Armero",
    title: "03. Fachada persistente",
    description:
      "Indiferente al tránsito de los hombres, la cumbre vigila. Una presencia inmensa que nos recuerda de qué tamaño es nuestra fragilidad.",
  },
  {
    src: "assets/img/foto-04.jpeg",
    alt: "Detalle de texturas en ruina",
    title: "04. Materia y huella",
    description:
      "La noche en que la tierra se volvió líquida, el tiempo se detuvo en seco. Quedaron las costras de una furia que bajó sin pedir permiso.",
  },
  {
    src: "assets/img/foto-05.jpeg",
    alt: "Vegetacion creciendo sobre estructura",
    title: "05. Naturaleza en avance",
    description:
      "Caminar por estas calles es aprender a escuchar el peso de la ausencia. La maleza reclama las paredes, pero el aire aún guarda los ecos.",
  },
  {
    src: "assets/img/foto-06.jpeg",
    alt: "Elemento simbolico en espacio abierto",
    title: "06. Signo en silencio",
    description:
      "Puertas que ya no contienen nada, pasillos que conducen al silencio. La arquitectura del recuerdo resiste donde la vida se pausó.",
  },
  {
    src: "assets/img/foto-07.jpeg",
    alt: "Cielo dramatico sobre relieve",
    title: "07. Cielo de memoria",
    description:
      "La materia olvida rápido, pero el dolor se aferra a los objetos pequeños. Lo que el lodo sepultó, la devoción y el recuerdo lo desentierran cada día.",
  },
  {
    src: "assets/img/foto-08.jpeg",
    alt: "Plano final del territorio de Murillo-Armero",
    title: "08. Cierre del recorrido",
    description:
      "Debajo del suelo, una historia suspendida nos sigue hablando en voz baja. Al final, el paisaje permanece como testigo y advertencia.",
  },
];

const photoEl = document.getElementById("photo");
const titleEl = document.getElementById("photo-title");
const descriptionEl = document.getElementById("photo-description");
const counterEl = document.getElementById("counter");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const expandBtn = document.getElementById("expand");
const lightboxEl = document.getElementById("lightbox");
const lightboxImageEl = document.getElementById("lightbox-image");
const closeLightboxBtn = document.getElementById("close-lightbox");

let currentIndex = 0;

function renderPhoto(index) {
  const item = photos[index];

  photoEl.classList.add("is-loading");
  photoEl.src = item.src;
  photoEl.alt = item.alt;
  titleEl.textContent = item.title;
  descriptionEl.textContent = item.description;
  counterEl.textContent = `${index + 1} / ${photos.length}`;
}

photoEl.addEventListener("load", () => {
  photoEl.classList.remove("is-loading");
});

function showNext() {
  currentIndex = (currentIndex + 1) % photos.length;
  renderPhoto(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  renderPhoto(currentIndex);
}

function openLightbox() {
  lightboxImageEl.src = photoEl.src;
  lightboxImageEl.alt = photoEl.alt;
  lightboxEl.showModal();
}

function closeLightbox() {
  lightboxEl.close();
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);
expandBtn.addEventListener("click", openLightbox);
closeLightboxBtn.addEventListener("click", closeLightbox);

lightboxEl.addEventListener("click", (event) => {
  if (event.target === lightboxEl) {
    closeLightbox();
  }
});

globalThis.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightboxEl.open) {
    closeLightbox();
    return;
  }

  if (event.key === "ArrowRight") {
    showNext();
  }

  if (event.key === "ArrowLeft") {
    showPrev();
  }
});

renderPhoto(currentIndex);
