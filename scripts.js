// Configuración de PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js";

// Array de documentos simulados con su categoría, país, imagen y descripción
const documents = [
  {
    name: "Programa Nacional de Conservación de Caimán y Cocodrilo",
    file: "docs/sv/CaimanyCocodrilo.pdf",
    countries: ["SV"],
    image: "img/thumbnails/sv/1.jpg",
    description:
      "Programa Nacional de Conservación de Caimán y Cocodrilo del Ministerio de Medio Ambiente y Recursos Naturales de El Salvador. Fue elaborado en diciembre de 2020 y tiene como objetivo desarrollar mecanismos para la conservación de las poblaciones de caimán y cocodrilo, así como sus hábitats, con la participación de actores clave de la sociedad.",
    type: "pdf",
  },
  {
    name: "Programa Nacional de Conservación de Cetáceos",
    file: "docs/sv/ProgramaNacionaldeConservaciondeCetaceos.pdf",
    countries: ["SV"],
    image: "img/thumbnails/sv/2.jpg",
    description:
      "El documento es la primera edición del Programa Nacional de Conservación de Cetáceos del Ministerio de Medio Ambiente y Recursos Naturales de El Salvador. Fue publicado en agosto de 2020 y consta de 24 páginas. ",
    type: "pdf",
  },
  {
    name: "Programa Nacional de Conservación de Felinos",
    file: "docs/sv/ProgramaNacionaldeConservaciondeFelinos.pdf",
    countries: ["SV"],
    image: "img/thumbnails/sv/3.jpg",
    description:
      "Este programa es una iniciativa del Ministerio de Medio Ambiente y Recursos Naturales (MARN) y el Fondo de Inversión Ambiental de El Salvador (FIAES). El PNCF tiene como objetivo la conservación de las especies de felinos en El Salvador, que han sido poco estudiadas en el país.",
    type: "pdf",
  },
  {
    name: "Guía restauración de ecosistemas RD",
    file: "docs/rd/GuiarestauraciondeecosistemasRD.pdf",
    countries: ["RD"],
    image: "img/thumbnails/rd/1.jpg",
    description:
      "Este documento recopila experiencias de restauración ecológica implementadas en más de 50 lugares en todo el país, abarcando diversos tipos de ecosistemas como humedales, ecosistemas terrestres y cuencas hidrográficas.",
    type: "pdf",
  },
  {
    name: "Ley Forestal",
    file: "docs/rd/LeyForestal.pdf",
    countries: ["RD"],
    image: "img/thumbnails/rd/2.jpg",
    description:
      "Ley Sectorial Forestal de la República Dominicana es una legislación que tiene como propósito regular y promover el manejo forestal sostenible de los bosques en el país. ",
    type: "pdf",
  },
  {
    name: "Ley Sectorial Biodiversidad",
    file: "docs/rd/LeySectorialBiodiversidad.pdf",
    countries: ["RD"],
    image: "img/thumbnails/rd/3.jpg",
    description:
      "La Ley Sectorial sobre Biodiversidad fue publicada en el Diario Oficial de la República Dominicana el 17 de diciembre de 2015. Contiene considerandos que establecen la importancia de la biodiversidad para el desarrollo sostenible del país, así como los deberes y responsabilidades del Estado y de los ciudadanos en su conservación y uso sostenible.",
    type: "pdf",
  },
  {
    name: "Ley 202-04 Ley sectorial de Áreas Protegidas",
    file: "docs/rd/Ley202-04LeysectorialdeAreasProtegidas.pdf",
    countries: ["RD"],
    image: "img/thumbnails/rd/4.jpg",
    description:
      "La Ley Sectorial de Áreas Protegidas garantiza la conservación y preservación de muestras representativas de los diferentes ecosistemas del patrimonio natural y cultural de la República Dominicana. Además, establece principios y objetivos para el uso sostenible de las áreas protegidas y promueve la cooperación internacional y la adopción de incentivos para la conservación.",
    type: "pdf",
  },
  {
    name: "Reglamento Ley Forestal",
    file: "docs/rd/ReglamentoLeyForestal.pdf",
    countries: ["RD"],
    image: "img/thumbnails/rd/5.jpg",
    description:
      "El reglamento ley forestal es un plan de manejo para el patrimonio forestal que detalla las actividades a implementar en los bosques y terrenos de aptitud forestal, tanto públicos como privados, que deben permanecer con cobertura forestal según la legislación vigente.",
    type: "pdf",
  },
  {
    name: "Res. No. 0010-2018 Dispone la normativa manejo de las zonas de amortiguamiento SINAP",
    file: "docs/rd/Res-No-0010-2018.pdf",
    countries: ["RD"],
    image: "img/thumbnails/rd/6.jpg",
    description:
      "El reglamento ley forestal es un plan de manejo para el patrimonio forestal que detalla las actividades a implementar en los bosques y terrenos de aptitud forestal, tanto públicos como privados, que deben permanecer con cobertura forestal según la legislación vigente.",
    type: "pdf",
  },
  {
    name: "Res. No. 0009-2018 Dispone los objetivos de manejo y usos permitidos categoria VI paisajes protegidos",
    file: "docs/rd/Res-No-0009-2018.pdf",
    countries: ["RD"],
    image: "img/thumbnails/rd/7.jpg",
    description:
      "El documento proporciona la Resolución del Ministerio de Medio Ambiente y Recursos Naturales de la República Dominicana, que establece los objetivos de manejo y los usos permitidos de la Categoría VI: Paisajes Protegidos. Se mencionan las coordenadas, extensiones terrestres y marinas de áreas específicas, así como referencias a convenciones internacionales y leyes nacionales relacionadas con la protección del medio ambiente.",
    type: "pdf",
  },
  {
    name: "Aporte de las mujeres, pueblos indígenas y comunidades locales",
    file: "docs/gt/Aportedelasmujerespueblosindigenasycomunidadeslocales.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/1.jpg",
    description:
      "Aporte de las mujeres, pueblos indígenas y comunidades locales elaborado por el Consejo Nacional de Áreas Protegidas de Guatemala aborda la importancia de proteger el conocimiento tradicional y promover la conservación de la biodiversidad en el país, reconociendo el papel fundamental de las mujeres, pueblos indígenas y comunidades locales en la gestión sostenible de los recursos naturales.",
    type: "pdf",
  },
  {
    name: "Década Restauración de Ecosistemas NU",
    file: "docs/gt/DecadaRestauraciondeEcosistemasNU.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/2.jpg",
    description:
      "Es una guía detallada que presenta la Estrategia de la Década de las Naciones Unidas sobre la Restauración de Ecosistemas, aborda la visión, la teoría del cambio y las vías de implementación para la restauración y conservación de los recursos naturales a nivel mundial. ",
    type: "pdf",
  },
  {
    name: "ERAM de CCAD",
    file: "docs/gt/ERAMdeCCAD.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/3.jpg",
    description:
      "ERAM es un plan estratégico que establece los objetivos y acciones para mejorar la calidad ambiental de la región. Se enfoca en cinco ejes transversales: fortalecimiento de capacidades y gestión del conocimiento, marco legal y normativo, diálogo y coordinación intersectorial, investigación y desarrollo de tecnologías, y enfoque de género e interculturalidad.",
    type: "pdf",
  },
  {
    name: "Estrategia Investigacion MC",
    file: "docs/gt/EstrategiaInvestigacionMC.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/4.jpg",
    description:
      "Estrategia Nacional para la Investigación y Manejo de los Recursos Marino-Costeros (ENIMC) en Guatemala, brinda información sobre los Mapas de Valoración (MdV) como herramienta para evaluar el desempeño de las actividades implementadas.",
    type: "pdf",
  },
  {
    name: "Diagnóstico de la ZMC del Caribe",
    file: "docs/gt/DiagnosticodelaZMCdelCaribe.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/5.jpg",
    description:
      "Diagnóstico de la ZMC del Caribe es un informe diagnóstico sobre la zona marino-costera del Caribe de Guatemala. Se enfoca específicamente en el diseño y desarrollo de un sistema de monitoreo, evaluación y reporte (MER) para el Componente de Adaptación al Cambio Climático del Sistema Nacional de Información sobre Cambio Climático. ",
    type: "pdf",
  },
  {
    name: "Estrategia Nacional de Diversidad Biológica Plan Acción 2012-2022",
    file: "docs/gt/EstrategiaNacionaldeDiversidadBiolPlanAccion.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/6.jpg",
    description:
      "La Estrategia Nacional de Diversidad Biológica y su Plan de Acción 2012-2022 es un documento elaborado en Guatemala que establece las líneas estratégicas y acciones a seguir para la conservación, uso sostenible y distribución equitativa de los beneficios de la diversidad biológica en el país.",
    type: "pdf",
  },
  {
    name: "Guatemala Biodiversity Local Works APS",
    file: "docs/gt/GuatemalaBiodiversityLocalWorksAPS.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/7.jpg",
    description:
      "En esta enmienda, se hace un llamado a los actores locales para presentar documentos conceptuales para ser considerados en una adjudicación enfocada en la Conservación de la Biodiversidad en Áreas Protegidas Clave en Guatemala. También se describen las áreas protegidas designadas para el proyecto, que incluyen la Reserva de la Biosfera Maya y la Reserva de la Biosfera Sierra de las Minas.",
    type: "pdf",
  },
  {
    name: "Gestión Integrada para la Sostenibilidad de los Humedales del Caribe",
    file: "docs/gt/GestionIntegradaparalaSostenibilidaddelosHumedalesdelCaribe.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/8.jpg",
    description:
      "El programa busca conservar y usar de manera sostenible la diversidad biológica de los humedales en el Caribe. Incluye varios componentes como la rehabilitación de manglares, pastos marinos y corales, el manejo de la pesca artesanal, la promoción del biocomercio azul, el monitoreo del carbono azul, el fomento del ecoturismo, la construcción de infraestructura sostenible para la protección marino-costera, y la preservación de los bosques urbanos de manglar en áreas costeras. ",
    type: "pdf",
  },
  {
    name: "Inventario de Humedales",
    file: "docs/gt/InventariodeHumedales.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/9.jpg",
    description:
      "Inventario Nacional de los humedales de Guatemala, tiene como objetivo desarrollar un proceso para hacer un inventario nacional de humedales en Guatemala. También busca establecer lineamientos para la caracterización de humedales de importancia para la conservación, así como contar con un instrumento para orientar la toma de decisiones sobre conservación y manejo de los humedales en cuestión.",
    type: "pdf",
  },
  {
    name: "Informe LEA_2019",
    file: "docs/gt/InformeLEA2019.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/10.jpg",
    description:
      "Informe LEA es un informe final de un proyecto de consultoría realizado por M.Sc. Edgar Gustavo Ruano Fajardo en Guatemala el 25 de noviembre de 2019. El proyecto se centra en el fortalecimiento de la capacidad y el compromiso para combatir el tráfico de la vida silvestre en América Latina, específicamente en la actualización de la Lista de Especies Amenazadas del Consejo Nacional de Áreas Protegidas (CONAP) de Guatemala. ",
    type: "pdf",
  },
  {
    name: "Política de Humedales de Guatemala",
    file: "docs/gt/PoliticadeHumedalesdeGuatemala.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/11.jpg",
    description:
      "Se presenta la Política Nacional de Humedales para Guatemala, elaborada por el Consejo Nacional de Áreas Protegidas (CONAP) en septiembre de 2005. Contiene información sobre los antecedentes de la Convención sobre los Humedales, definiciones de humedales, características de la situación nacional, beneficios, riesgos y amenazas. ",
    type: "pdf",
  },
  {
    name: "LEA-2021-CONAP-Diario-Oficial",
    file: "docs/gt/LEA2021CONAPDiarioOficial.pdf",
    countries: ["GT"],
    image: "img/thumbnails/gt/12.jpg",
    description:
      "Una edición del Diario de Centro América, publicada el 24 de junio de 2021. Contiene información oficial del Organismo Ejecutivo de la República de Guatemala, incluyendo acuerdos gubernativos y ministeriales, así como convocatorias y publicaciones varias.",
    type: "pdf",
  },
  {
    name: "Iguana Verde",
    file: "docs/ni/IGUANAVERDE.pdf",
    countries: ["NI"],
    image: "img/thumbnails/ni/1.jpg",
    description:
      "El documento es un manual sobre la Iguana Verde (Iguana iguana), que forma parte de la estrategia nacional Biodiversidad, tu solución basada en la naturaleza. Su objetivo es proporcionar información clara y sencilla sobre el manejo y la reproducción en cautiverio de esta especie, promoviendo la conservación y el uso responsable de la biodiversidad.",
    type: "pdf",
  },
  {
    name: "Guardatinaja Guia",
    file: "docs/ni/GUARDATINAJA_guia.pdf",
    countries: ["NI"],
    image: "img/thumbnails/ni/2.jpg",
    description:
      "Este documento, elaborado por el Gobierno de Reconciliación y Unidad Nacional (GRUN) a través del Ministerio del Ambiente y los Recursos Naturales (MARENA), tiene como objetivo promover la conservación y el uso responsable de la fauna silvestre.",
    type: "pdf",
  },
  {
    name: "Garrobo Negro",
    file: "docs/ni/GARROBONEGRO.pdf",
    countries: ["NI"],
    image: "img/thumbnails/ni/3.jpg",
    description:
      "Este manual forma parte de la estrategia nacional Biodiversidad: Tu Solución Basada en la Naturaleza. Su objetivo es presentar de manera clara y sencilla los principios para el manejo en cautiverio de la especie Garrobo negro.",
    type: "pdf",
  },
  {
    name: "Venado Guia",
    file: "docs/ni/VENADOguia.pdf",
    countries: ["NI"],
    image: "img/thumbnails/ni/4.jpg",
    description:
      "El manual “Biodiversidad, tu solución basada en la naturaleza”, enfocado en el manejo en cautiverio del venado cola blanca (Odocoileus virginianus). Fue elaborado por el Ministerio del Ambiente y los Recursos Naturales (MARENA) de Nicaragua, dentro de una estrategia para la conservación y aprovechamiento sostenible de la fauna silvestre.",
    type: "pdf",
  },
  {
    name: "Armadillo Guia",
    file: "docs/ni/ARMADILLOguia.pdf",
    countries: ["NI"],
    image: "img/thumbnails/ni/5.jpg",
    description:
      "El documento es un manual elaborado por el Ministerio del Ambiente y los Recursos Naturales (MARENA) de Nicaragua, como parte de la estrategia nacional “Biodiversidad, tu solución basada en la naturaleza”. Este manual está destinado a la conservación y manejo en cautiverio del armadillo (Dasypus novemcinctus), proporcionando pautas claras para su crianza.",
    type: "pdf",
  },
  {
    name: "Conejo Guia",
    file: "docs/ni/CONEJOguia.pdf",
    countries: ["NI"],
    image: "img/thumbnails/ni/6.jpg",
    description:
      "El manual Biodiversidad, tu solución basada en la naturaleza del Gobierno de Reconciliación y Unidad Nacional (GRUN) a través del Ministerio del Ambiente y los Recursos Naturales (MARENA) se centra en la promoción del manejo y reproducción en cautiverio de conejos (Oryctolagus cuniculus) como una estrategia para el aprovechamiento sostenible de la biodiversidad.",
    type: "pdf",
  },
  {
    name: "Manual de Buenas Prácticas Ambientales para la Prevención de Incendios Forestales en Áreas Protegidas",
    file: "docs/ni/ManualdeBuenasPracticasAmbientalesparalaPrevenciondeIncendiosForestalesenareasProtegidas.pdf",
    countries: ["NI"],
    image: "img/thumbnails/ni/7.jpg",
    description:
      "El documento es un manual que aborda buenas prácticas ambientales para prevenir incendios en áreas protegidas de Nicaragua, destacando la importancia de conservar los recursos naturales y la biodiversidad. Se analizan diferentes tipos de incendios y se proponen estrategias de educación, comunicación y participación ciudadana para su prevención.",
    type: "pdf",
  },
  {
    name: "Manual de Murcielagos del Parque Nacional  Volcán Masaya",
    file: "docs/ni/ManualdeMurcielagosdelParqueNacionalVolcanMasaya.pdf",
    countries: ["NI"],
    image: "img/thumbnails/ni/8.jpg",
    description:
      "El documento es un informe técnico o presentación que examina las diversas especies de murciélagos que habitan el Parque Nacional Volcán Masaya en Nicaragua, destacando su importancia ecológica, en particular en la polinización, y sus interacciones con diversos insectos y plantas. Detalla varias especies de murciélagos, como Pteronotus, Mormoops, Rhynchonycteris y Carollia, junto con sus características únicas y funciones ecológicas.",
    type: "pdf",
  },
  {
    name: "Manual de Demarcación Fisica de Áreas Protegidas",
    file: "docs/ni/ManualdeDemarcacionFisicadeareasProtegidas.pdf",
    countries: ["NI"],
    image: "img/thumbnails/ni/9.jpg",
    description:
      "El documento proporcionan especificaciones técnicas y procedimientos exhaustivos para la demarcación e instalación de mojones, señales de vida silvestre y paneles informativos en áreas protegidas de Nicaragua. Detalla los materiales, dimensiones y procesos de instalación de mojones de hormigón armado, señalización y boyas, haciendo hincapié en el control de calidad, las consideraciones medioambientales y la participación de la comunidad.",
    type: "pdf",
  },
  {
    name: "Manual de Viveros de Tortugas Marinas en Nicaragua",
    file: "docs/ni/ManualdeViverosdeTortugasMarinasenNicaragua.pdf",
    countries: ["NI"],
    image: "img/thumbnails/ni/10.jpg",
    description:
      "El manual del Ministerio del Ambiente y los Recursos Naturales de Nicaragua proporciona directrices sobre el establecimiento y manejo de viveros para la conservación de tortugas marinas, destacando su importancia en la protección de huevos y la supervivencia de especies en peligro.",
    type: "pdf",
  },
  {
    name: "Manual Rana de Ojos Rojos",
    file: "docs/ni/MANUALRANAOJOSROJOSguia.pdf",
    countries: ["NI"],
    image: "img/thumbnails/ni/11.jpg",
    description:
      "El documento es un manual que proporciona directrices sobre la crianza en cautiverio de la Rana de Ojos Rojos (Agalychnis callidryas), elaborado por el Gobierno de Reconciliación y Unidad Nacional de Nicaragua a través del Ministerio del Ambiente y los Recursos Naturales. Incluye información sobre la biología de la especie, sus hábitos reproductivos, la construcción de recintos adecuados, su alimentación en cautiverio y el proceso de apareamiento, con el objetivo de promover el manejo sostenible de la biodiversidad y mejorar las condiciones de vida de las comunidades locales.",
    type: "pdf",
  },
];

// Referencias a los elementos HTML
const documentList = document.getElementById("documents-list");
const countries = document.getElementById("countriesCollapse");
const searchInput = document.getElementById("searchInput");
const copyAlert = document.getElementById("copyAlert");
const activeFilters = document.getElementById("activeFilters");
const resultsCounter = document.getElementById("resultsCounter");
const loadingSpinner = document.getElementById("loadingSpinner");

// Elementos de paginación
const paginationContainer = document.createElement("div");
paginationContainer.classList.add(
  "pagination",
  "justify-content-center",
  "mt-4"
);
documentList.after(paginationContainer);

// Variables de estado
const ITEMS_PER_PAGE = 5;
let currentPage = 1;
let filteredDocuments = [];
let currentCountry = "all";
let searchTerm = "";

// Mapeo de códigos de país a nombres completos
const countryNames = {
  all: "Todos",
  MX: "México",
  GT: "Guatemala",
  HN: "Honduras",
  SV: "El Salvador",
  NI: "Nicaragua",
  CR: "Costa Rica",
  PA: "Panamá",
  CO: "Colombia",
  RD: "República Dominicana",
  BZ: "Belice",
};

// Mapeo de colores representativos de cada país (basados en sus banderas)
const countryColors = {
  MX: "#006847", // Verde de la bandera de México
  GT: "#4997D0", // Azul celeste de Guatemala
  HN: "#18A3AC", // Azul turquesa de Honduras
  SV: "#0F47AF", // Azul oscuro de El Salvador
  NI: "#0067C6", // Azul de Nicaragua
  CR: "#002B7F", // Azul oscuro de Costa Rica
  PA: "#005293", // Azul de Panamá
  CO: "#FCD116", // Amarillo de Colombia
  RD: "#002D62", // Azul de República Dominicana
  BZ: "#CE1126", // Rojo de Belice
};

// Función para generar el HTML dinámico de un documento
function generateDocumentHTML(doc) {
  const countryBadges = doc.countries
    .map((country) => {
      const color = countryColors[country] || "#6c757d"; // Color gris por defecto si no está definido
      return `<span class="badge" style="background-color: ${color}; color: white;">${countryNames[country]}</span>`;
    })
    .join(" ");

  return `
        <div class="document-item">
            <div class="row">
                <div class="col-md-3">
                    <div class="document-image">
                        <img src="${doc.image}" alt="Portada del Documento" class="img-fluid">
                    </div>
                </div>
                <div class="col-md-6">
                    <h5 class="document-title">${doc.name}</h5>
                    <p class="document-description">${doc.description}</p>
                    <div class="document-category mt-2">
                        <span class="font-weight-bold">País:</span> 
                        ${countryBadges}
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="document-actions">
<a href="${BASE_URL}${doc.file}" target="_blank" class="btn btn-info" onclick="registrarEvento('${doc.name}', 'Vista Previa')">
    Vista Previa
</a>
<a href="${BASE_URL}${doc.file}" download class="btn btn-success" onclick="registrarEvento('${doc.name}', 'Descarga')">
    Descargar
</a>
                        <button class="btn btn-secondary" onclick="copyLinkToClipboard(event, '${doc.file}')">
                            Copiar enlace
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Función para crear botones de paginación
function createPaginationButtons() {
  const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE);
  paginationContainer.innerHTML = "";

  if (totalPages <= 1) return;

  // Botón Anterior
  const prevButton = document.createElement("button");
  prevButton.classList.add("btn", "btn-outline-primary");
  prevButton.innerHTML = "&laquo; Anterior";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayDocuments();
      window.scrollTo({ top: documentList.offsetTop - 20, behavior: "smooth" });
    }
  });
  paginationContainer.appendChild(prevButton);

  // Botones de número de página
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  if (startPage > 1) {
    const firstPageButton = document.createElement("button");
    firstPageButton.classList.add("btn", "btn-outline-primary");
    firstPageButton.textContent = "1";
    firstPageButton.addEventListener("click", () => {
      currentPage = 1;
      displayDocuments();
      window.scrollTo({ top: documentList.offsetTop - 20, behavior: "smooth" });
    });
    paginationContainer.appendChild(firstPageButton);

    if (startPage > 2) {
      const ellipsis = document.createElement("span");
      ellipsis.classList.add("mx-2");
      ellipsis.textContent = "...";
      paginationContainer.appendChild(ellipsis);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.classList.add("btn", "btn-outline-primary");
    pageButton.textContent = i;

    if (i === currentPage) {
      pageButton.classList.remove("btn-outline-primary");
      pageButton.classList.add("btn-primary");
    }

    pageButton.addEventListener("click", () => {
      currentPage = i;
      displayDocuments();
      window.scrollTo({ top: documentList.offsetTop - 20, behavior: "smooth" });
    });

    paginationContainer.appendChild(pageButton);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement("span");
      ellipsis.classList.add("mx-2");
      ellipsis.textContent = "...";
      paginationContainer.appendChild(ellipsis);
    }

    const lastPageButton = document.createElement("button");
    lastPageButton.classList.add("btn", "btn-outline-primary");
    lastPageButton.textContent = totalPages;
    lastPageButton.addEventListener("click", () => {
      currentPage = totalPages;
      displayDocuments();
      window.scrollTo({ top: documentList.offsetTop - 20, behavior: "smooth" });
    });
    paginationContainer.appendChild(lastPageButton);
  }

  // Botón Siguiente
  const nextButton = document.createElement("button");
  nextButton.classList.add("btn", "btn-outline-primary");
  nextButton.innerHTML = "Siguiente &raquo;";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayDocuments();
      window.scrollTo({ top: documentList.offsetTop - 20, behavior: "smooth" });
    }
  });
  paginationContainer.appendChild(nextButton);
}

// Función para actualizar los filtros activos mostrados
function updateActiveFilters() {
  let filtersHTML = "";

  if (currentCountry !== "all") {
    const color = countryColors[currentCountry] || "#6c757d";
    filtersHTML += `<span class="badge" style="background-color: ${color}; color: white;">País: ${countryNames[currentCountry]}</span>`;
  }

  if (searchTerm) {
    filtersHTML += `<span class="badge badge-secondary">Búsqueda: "${searchTerm}"</span>`;
  }

  activeFilters.innerHTML =
    filtersHTML || '<span class="text-muted">No hay filtros aplicados</span>';
}

// Función para filtrar documentos según categoría, país y búsqueda
function filterDocuments() {
  loadingSpinner.style.display = "block";
  documentList.innerHTML = "";

  setTimeout(() => {
    filteredDocuments = documents.filter((doc) => {
      // Filtrar por país
      const countryMatch =
        currentCountry === "all" || doc.countries.includes(currentCountry);

      // Filtrar por término de búsqueda
      const searchMatch =
        !searchTerm ||
        doc.name.toLowerCase().includes(searchTerm) ||
        doc.description.toLowerCase().includes(searchTerm) ||
        doc.countries.some((country) =>
          countryNames[country].toLowerCase().includes(searchTerm)
        );

      return countryMatch && searchMatch;
    });

    const count = filteredDocuments.length;
    resultsCounter.textContent = `${count} documento${
      count !== 1 ? "s" : ""
    } encontrado${count !== 1 ? "s" : ""}`;

    currentPage = 1;
    displayDocuments();
    loadingSpinner.style.display = "none";
  }, 300);
}

// Función para mostrar documentos paginados
function displayDocuments() {
  documentList.innerHTML = ""; // Limpiar el contenido

  // Calcular índices de documentos para la página actual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const pageDocuments = filteredDocuments.slice(startIndex, endIndex);

  // Mostrar documentos de la página actual
  if (pageDocuments.length > 0) {
    pageDocuments.forEach((doc) => {
      documentList.innerHTML += generateDocumentHTML(doc);
    });
  } else {
    documentList.innerHTML = `
            <div class="alert alert-info">
                No se encontraron documentos con los filtros aplicados.
            </div>
        `;
  }

  // Crear botones de paginación
  createPaginationButtons();

  // Actualizar filtros activos
  updateActiveFilters();
}

// Eventos para manejar los clics en los países
countries.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    document
      .querySelectorAll("#countriesCollapse .list-group-item")
      .forEach((li) => li.classList.remove("active"));
    e.target.classList.add("active");
    currentCountry = e.target.getAttribute("data-country");
    filterDocuments();
  }
});

// Filtrar documentos al buscar
searchInput.addEventListener("input", function () {
  searchTerm = searchInput.value.toLowerCase();
  filterDocuments();
});

// Agrega esto al inicio con las otras constantes
const BASE_URL = "https://proyectomesoamerica.org/images/cbm/";

// Función para copiar enlace al portapapeles
function copyLinkToClipboard(event, link) {
  event.preventDefault();

  // Crear el enlace completo
  const fullLink = link.startsWith("http") ? link : `${BASE_URL}${link}`;

  // Crear elemento temporal para copiar
  const tempInput = document.createElement("input");
  tempInput.value = fullLink;
  document.body.appendChild(tempInput);
  tempInput.select();

  try {
    // Intentar copiar al portapapeles
    const successful = document.execCommand("copy");
    document.body.removeChild(tempInput);

    if (successful) {
      showCopyAlert(event);
    } else {
      console.error("Falló al copiar el enlace");
    }
  } catch (err) {
    console.error("Error al copiar:", err);
    document.body.removeChild(tempInput);
  }
}

// Función para mostrar alerta de copiado
function showCopyAlert(event) {
  // Obtener posición del botón clickeado
  const buttonRect = event.currentTarget.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Posicionar la alerta justo encima del botón
  copyAlert.style.top = `${buttonRect.top + scrollTop - 50}px`;
  copyAlert.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
  copyAlert.style.transform = "translateX(-50%)";

  // Resetear animación
  copyAlert.style.display = "none";
  void copyAlert.offsetWidth; // Trigger reflow
  copyAlert.style.display = "block";

  // Ocultar después de 2 segundos
  setTimeout(() => {
    copyAlert.style.display = "none";
  }, 2000);
}

// Función para registrar eventos
function registrarEvento(documento, accion) {
  // En una implementación real, aquí se haría una llamada al servidor
  console.log(`Evento registrado: ${accion} - ${documento}`);

  // Simulación de envío al servidor
  fetch("guardar_registro.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ documento, accion }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Registro enviado:", data);
    })
    .catch((error) => {
      console.error("Error al enviar el registro:", error);
    });
}

// Inicializar el repositorio al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  filterDocuments();

  // Configurar tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Configurar acordeones para los filtros
  $(".filter-header").click(function () {
    $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
  });

  // Configurar viewer.js para imágenes
  const gallery = new Viewer(document.getElementById("documents-list"), {
    toolbar: {
      zoomIn: 1,
      zoomOut: 1,
      oneToOne: 1,
      reset: 1,
      prev: 0,
      play: 0,
      next: 0,
      rotateLeft: 1,
      rotateRight: 1,
      flipHorizontal: 1,
      flipVertical: 1,
    },
  });
});
