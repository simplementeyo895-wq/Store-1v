"use strict";

const tools = [
  {
    name: "PS3HEN Installer",
    description: "Página del instalador de HEN para sistemas compatibles.",
    category: "tools",
    tags: "hen exploit sistema instalación",
    url: "https://www.ps3xploit.me/hen/installer/",
    badge: "Sistema"
  },
  {
    name: "webMAN MOD",
    description: "Herramienta para administrar funciones y recursos de la consola.",
    category: "tools",
    tags: "webman gestor ventilador aldostools",
    url: "https://github.com/aldostools/webMAN-MOD/releases",
    badge: "Gestor"
  },
  {
    name: "IRISMAN",
    description: "Administrador de archivos y respaldos para PS3.",
    category: "tools",
    tags: "irisman archivos backups",
    url: "https://github.com/aldostools/IRISMAN/releases",
    badge: "Gestor"
  },
  {
    name: "Apollo Save Tool",
    description: "Herramienta para administrar partidas guardadas.",
    category: "tools",
    tags: "apollo save partidas guardadas",
    url: "https://github.com/bucanero/apollo-ps3/releases",
    badge: "Utilidad"
  },
  {
    name: "PKGi PS3",
    description: "Consulta el proyecto y sus instrucciones oficiales.",
    category: "tools",
    tags: "pkgi tienda cliente",
    url: "https://github.com/bucanero/pkgi-ps3/releases",
    badge: "Utilidad"
  }
];

const games = [
  ["Grand Theft Auto V", "BLUS31156 / BLES01807", "Mundo abierto y acción.", "gta v gta5 gta cinco"],
  ["Grand Theft Auto IV", "BLUS30127 / BLES00229", "Aventura en Liberty City.", "gta iv gta4"],
  ["Call of Duty: Black Ops II", "BLUS31101 / BLES01717", "Shooter de acción.", "cod black ops 2"],
  ["Call of Duty: Modern Warfare 3", "BLUS30832 / BLES01428", "Shooter militar.", "cod mw3"],
  ["Call of Duty: Modern Warfare 2", "BLUS30377 / BLES00683", "Shooter militar.", "cod mw2"],
  ["Call of Duty: Black Ops", "BLUS30591 / BLES01031", "Acción durante la Guerra Fría.", "cod black ops"],
  ["Call of Duty 4: Modern Warfare", "BLUS30075 / BLES00149", "Shooter clásico.", "cod cod4"],
  ["Red Dead Redemption", "BLUS30418 / BLES00680", "Aventura en el Oeste.", "rdr red dead"],
  ["Battlefield 3", "BLUS30247 / BLES01330", "Combate militar.", "bf3 battlefield"],
  ["Battlefield 4", "BLUS31190 / BLES01862", "Combate moderno.", "bf4 battlefield"],
  ["Max Payne 3", "BLUS30835 / BLES01307", "Acción cinematográfica.", "max payne"],
  ["Far Cry 3", "BLUS31091 / BLES01692", "Aventura de mundo abierto.", "farcry"],
  ["Saints Row IV", "BLUS31191 / BLES01852", "Acción y mundo abierto.", "saints row"],
  ["Sleeping Dogs", "BLUS31006 / BLES01633", "Aventura policial.", "sleeping dogs"],
  ["Watch Dogs", "BLUS31165 / BLES01854", "Acción y tecnología.", "watchdogs"],
  ["Mafia II", "BLUS30234 / BLES00989", "Historia de crimen.", "mafia"],
  ["Assassin's Creed IV: Black Flag", "BLUS31150 / BLES01873", "Aventura pirata.", "assassins creed black flag"],
  ["God of War III", "BCUS98116 / BCES00510", "Aventura de acción mitológica.", "gow god of war"],
  ["Uncharted 3", "BCUS98226 / BCES01175", "Aventura y exploración.", "uncharted"],
  ["Batman: Arkham City", "BLUS30836 / BLES01354", "Acción de superhéroes.", "batman arkham"],
  ["Medal of Honor: Warfighter", "BLUS30990 / BLES01636", "Shooter militar.", "medal honor"],
  ["Ghost Recon: Future Soldier", "BLUS30553 / BLES01258", "Acción táctica.", "ghost recon"],
  ["Army of Two: The Devil's Cartel", "BLUS30919 / BLES01728", "Acción cooperativa.", "army two"]
].map(([name, region, description, tags]) => ({
  name,
  region,
  description,
  tags,
  category: "games",
  url: "https://www.playstation.com/"
}));

const mods = [
  {
    name: "RetroVibe NPUB",
    description: "Paquete compartido por su autor o distribuidor. Comprueba la región y procedencia antes de instalar.",
    category: "mods",
    tags: "retrovibe mod menu npub",
    url: "https://www.mediafire.com/file/1567x11ztwdu6d3/RetroVibeNPUB.pkg/file",
    badge: "Mod"
  },
  {
    name: "2048 PS3",
    description: "Juego de lógica para PlayStation 3.",
    category: "mods",
    tags: "2048 puzzle lógica",
    url: "https://github.com/bucanero/2048-ps3/releases/latest/download/2048-ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Minesweeper PS3",
    description: "Versión del clásico buscaminas.",
    category: "mods",
    tags: "minesweeper buscaminas estrategia",
    url: "https://github.com/bucanero/minesweeper-ps3/releases/latest/download/minesweeper-ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Sudoku PS3",
    description: "Juego numérico de lógica.",
    category: "mods",
    tags: "sudoku números puzzle",
    url: "https://github.com/bucanero/sudoku-ps3/releases/latest/download/sudoku-ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Cave Story / NXEngine",
    description: "Port de aventura y plataformas.",
    category: "mods",
    tags: "cave story nxengine plataformas aventura",
    url: "https://github.com/ps3homebrew/nxengine-ps3/releases/latest/download/nxengine_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Super Mario War",
    description: "Juego arcade multijugador inspirado en plataformas.",
    category: "mods",
    tags: "mario war arcade multijugador",
    url: "https://github.com/ps3homebrew/supermariowar-ps3/releases/latest/download/smw_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Doom PS3",
    description: "Port de PrBoom para PS3; puede requerir archivos de datos propios.",
    category: "mods",
    tags: "doom shooter prboom",
    url: "https://github.com/ps3homebrew/prboom-ps3/releases/latest/download/prboom_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Quake PS3",
    description: "Port de Quake; comprueba los requisitos de datos del juego.",
    category: "mods",
    tags: "quake shooter",
    url: "https://github.com/ps3homebrew/quake-ps3/releases/latest/download/quake_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Wolfenstein 3D",
    description: "Port de acción retro.",
    category: "mods",
    tags: "wolfenstein retro acción",
    url: "https://github.com/ps3homebrew/wolf3d-ps3/releases/latest/download/wolf3d_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "OpenBOR",
    description: "Motor para juegos de lucha callejera 2D.",
    category: "mods",
    tags: "openbor beat em up lucha",
    url: "https://github.com/ps3homebrew/openbor-ps3/releases/latest/download/openbor_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "ScummVM PS3",
    description: "Motor para aventuras gráficas compatibles.",
    category: "mods",
    tags: "scummvm aventura gráfica",
    url: "https://github.com/scummvm/scummvm/releases/download/v2.8.0/scummvm-2.8.0-ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Duke Nukem 3D",
    description: "Port de un shooter clásico.",
    category: "mods",
    tags: "duke nukem shooter",
    url: "https://github.com/ps3homebrew/jfduke3d-ps3/releases/latest/download/duke3d_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Hexen / Heretic",
    description: "Juegos de acción y fantasía en primera persona.",
    category: "mods",
    tags: "hexen heretic fantasía",
    url: "https://github.com/ps3homebrew/hexen-ps3/releases/latest/download/hexen_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Sonic Robo Blast 2",
    description: "Plataformas 3D de estilo retro.",
    category: "mods",
    tags: "sonic robo blast 2 plataformas",
    url: "https://github.com/srb2/srb2/releases/download/srb2-ps3/srb2_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Powermanga",
    description: "Juego arcade de naves.",
    category: "mods",
    tags: "powermanga naves matamarcianos",
    url: "https://github.com/ps3homebrew/powermanga-ps3/releases/latest/download/powermanga_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Blobby Volley",
    description: "Juego arcade de voleibol.",
    category: "mods",
    tags: "blobby volley deporte",
    url: "https://github.com/ps3homebrew/blobby-ps3/releases/latest/download/blobby_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Cannonball / OutRun",
    description: "Port de conducción arcade.",
    category: "mods",
    tags: "cannonball outrun conducción coches",
    url: "https://github.com/ps3homebrew/cannonball-ps3/releases/latest/download/cannonball_ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Flappy Bird",
    description: "Juego casual de habilidad.",
    category: "mods",
    tags: "flappy bird casual arcade",
    url: "https://github.com/bucanero/flappybird-ps3/releases/latest/download/flappybird-ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Solitaire",
    description: "Juego clásico de cartas.",
    category: "mods",
    tags: "solitaire solitario cartas",
    url: "https://github.com/bucanero/solitaire-ps3/releases/latest/download/solitaire-ps3.pkg",
    badge: "Homebrew"
  },
  {
    name: "Checkers",
    description: "Juego de mesa de damas.",
    category: "mods",
    tags: "checkers damas tablero",
    url: "https://github.com/bucanero/corout-ps3/releases/latest/download/checkers-ps3.pkg",
    badge: "Homebrew"
  }
];

const allItems = [...tools, ...games, ...mods];
const grids = {
  tools: document.getElementById("toolsGrid"),
  games: document.getElementById("gamesGrid"),
  mods: document.getElementById("modsGrid")
};

const searchInput = document.getElementById("searchInput");
const statusMsg = document.getElementById("statusMsg");
const emptyMsg = document.getElementById("emptyMsg");
let activeTab = "all";

function makeCard(item) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.category = item.category;

  const title = document.createElement("h3");
  title.textContent = item.name;

  const description = document.createElement("p");
  description.textContent = item.description;

  const badges = document.createElement("div");
  badges.className = "badges";

  if (item.badge) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = item.badge;
    badges.appendChild(badge);
  }

  if (item.region) {
    item.region.split(" / ").forEach(region => {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.textContent = region;
      badges.appendChild(badge);
    });
  }

  const link = document.createElement("a");
  link.className = "download";
  link.href = item.url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Abrir fuente ↗";

  card.append(title, description, badges, link);
  card.dataset.search = [
    item.name, item.description, item.tags, item.region, item.badge
  ].filter(Boolean).join(" ").toLocaleLowerCase("es");

  return card;
}

function renderCatalog() {
  Object.values(grids).forEach(grid => grid.replaceChildren());

  allItems.forEach(item => {
    grids[item.category].appendChild(makeCard(item));
  });

  filterCatalog();
}

function filterCatalog() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");
  let visible = 0;

  document.querySelectorAll(".card").forEach(card => {
    const matchesText = card.dataset.search.includes(query);
    const matchesTab = activeTab === "all" ||
      card.dataset.category === activeTab;
    const show = matchesText && matchesTab;

    card.hidden = !show;
    if (show) visible++;
  });

  Object.entries(grids).forEach(([category, grid]) => {
    const section = grid.closest(".catalog-section");
    const hasVisible = [...grid.children].some(card => !card.hidden);
    section.hidden = activeTab !== "all" && activeTab !== category;
    if (activeTab === "all") section.hidden = !hasVisible;
  });

  statusMsg.textContent =
    `${visible} ${visible === 1 ? "resultado encontrado" : "resultados encontrados"}.`;
  emptyMsg.hidden = visible !== 0;
}

document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => {
    activeTab = button.dataset.tab;

    document.querySelectorAll(".tab").forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle("active", selected);
      tab.setAttribute("aria-pressed", String(selected));
    });

    filterCatalog();
  });
});

searchInput.addEventListener("input", filterCatalog);

document.getElementById("clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  filterCatalog();
  searchInput.focus();
});

document.getElementById("topButton").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderCatalog();