// ===== CONFIGURACIÓN =====
const links = {
  discord: "https://discord.gg/U4rWszk3sr",
  host: "https://www.haxball.com/play?c=1JkS79qH4YU",
  instagram: "https://www.instagram.com/juegan.todos.con.mati?igsh=MW5mZXVtdGF6NGJ5dg==",
  tiktok: "https://www.tiktok.com/@juegan_todos_con_mati?is_from_webapp=1&sender_device=pc"
};

const communityStats = {
  discord: 500,
  instagram: 100,
  tiktok: 3000
};

const translations = {
  es: {
    siteOfficial: ":: SITIO OFICIAL",
    heroSubtitle: "Comunidad, musica y contenido en un solo lugar.",
    joinHostButton: "Entrar al Host",
    host247: "HOST 24/7 ONLINE",
    officialStore: "TIENDA OFICIAL",
    founder: "Fundador: Mati",
    foundation: "Fundacion: 17/10/24",
    copyIpButton: "IP Minecraft",
    copiedOk: "¡Copiado!",
    copyFailed: "No se pudo copiar",
    communityTitle: "Comunidad",
    communitySubtitle: "Numeros de nuestra comunidad",
    rulesTitle: "Reglas Rapidas",
    rulesSubtitle: "Resumen para nuevos jugadores",
    modesTitle: "Modalidades de Sala",
    modesSubtitle: "Entrena y compite en distintos formatos",
    gamesTitle: "Juegos Destacados en Discord",
    gamesSubtitle: "Nuestros juegos mas activos y populares",
    serverInfoTitle: "Informacion del Servidor",
    serverInfoSubtitle: "Todo lo que incluye la experiencia JTCM",
    featureElitePass: "Pase Elite",
    featureExclusiveRoles: "Roles Exclusivos",
    featureStore: "Tienda",
    featureEconomy: "Sistema de Economia",
    featureStatsRanks: "Estadisticas y Rangos",
    featureCommands: "Comandos unicos",
    featureHostModes: "Host con modalidades",
    rule1: "Respeta a todos en chat y voz.",
    rule2: "No uses hacks, macros ni exploits.",
    rule3: "No grief, no spam y no toxicidad.",
    rule4: "Sigue las indicaciones del staff.",
    rule5: "Diviertete y juega limpio."
  },
  en: {
    siteOfficial: ":: OFFICIAL SITE",
    heroSubtitle: "Community, music and content in one place.",
    joinHostButton: "Join Host",
    host247: "24/7 HOST ONLINE",
    officialStore: "OFFICIAL STORE",
    founder: "Founder: Mati",
    foundation: "Founded: 10/17/24",
    copyIpButton: "Minecraft IP",
    copiedOk: "Copied!",
    copyFailed: "Copy failed",
    communityTitle: "Community",
    communitySubtitle: "Our community numbers",
    rulesTitle: "Quick Rules",
    rulesSubtitle: "Summary for new players",
    modesTitle: "Room Modes",
    modesSubtitle: "Train and compete in different formats",
    gamesTitle: "Featured Games on Discord",
    gamesSubtitle: "Our most active and popular games",
    serverInfoTitle: "Server Information",
    serverInfoSubtitle: "Everything included in the JTCM experience",
    featureElitePass: "Elite Pass",
    featureExclusiveRoles: "Exclusive Roles",
    featureStore: "Store",
    featureEconomy: "Economy System",
    featureStatsRanks: "Stats and Ranks",
    featureCommands: "Unique Commands",
    featureHostModes: "Host with game modes",
    rule1: "Respect everyone in chat and voice.",
    rule2: "Do not use hacks, macros or exploits.",
    rule3: "No griefing, no spam and no toxicity.",
    rule4: "Follow staff instructions.",
    rule5: "Have fun and play fair."
  }
};

const minecraftIp = "Respaldos.aternos.me:53278";
let currentLang = "es";
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// ===== ELEMENTOS DOM =====
const discordTopLink = document.getElementById("discordTopLink");
const discordBtn = document.getElementById("discordBtn");
const hostBtn = document.getElementById("hostBtn");
const instagramBtn = document.getElementById("instagramBtn");
const tiktokBtn = document.getElementById("tiktokBtn");
const storeBtn = document.getElementById("storeBtn");
const rulesBtn = document.getElementById("rulesBtn");
const copyIpBtn = document.getElementById("copyIpBtn");
const langButtons = document.querySelectorAll(".lang-btn");
const statDiscord = document.getElementById("statDiscord");
const statInstagram = document.getElementById("statInstagram");
const statTiktok = document.getElementById("statTiktok");
const welcomeModal = document.getElementById("welcomeModal");
const closeWelcome = document.getElementById("closeWelcome");
const storeModal = document.getElementById("storeModal");
const closeStore = document.getElementById("closeStore");
const rulesModal = document.getElementById("rulesModal");
const closeRules = document.getElementById("closeRules");
const customCursor = document.getElementById("customCursor");
const cursorTrail = document.getElementById("cursorTrail");
const scrollProgress = document.getElementById("scrollProgress");
const onlineCount = document.getElementById("onlineCount");

// ===== CONFIGURAR ENLACES =====
if (discordTopLink) discordTopLink.href = links.discord;
if (discordBtn) discordBtn.href = links.discord;
if (hostBtn) hostBtn.href = links.host;
if (instagramBtn) instagramBtn.href = links.instagram;
if (tiktokBtn) tiktokBtn.href = links.tiktok;

// ===== MODAL DE BIENVENIDA =====
setTimeout(() => {
  if (welcomeModal) {
    welcomeModal.classList.remove("hidden");
  }
}, 500);

if (closeWelcome) {
  closeWelcome.addEventListener("click", () => {
    welcomeModal.classList.add("hidden");
    setTimeout(() => {
      welcomeModal.style.display = "none";
    }, 500);
  });
}

// ===== MODAL DE TIENDA =====
if (storeBtn) {
  storeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    storeModal.classList.add("active");
  });
}

if (closeStore) {
  closeStore.addEventListener("click", () => {
    storeModal.classList.remove("active");
  });
}

if (storeModal) {
  storeModal.addEventListener("click", (e) => {
    if (e.target === storeModal) {
      storeModal.classList.remove("active");
    }
  });
}

// ===== MODAL DE REGLAS =====
if (rulesBtn && rulesModal) {
  rulesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    rulesModal.classList.add("active");
  });
}

if (closeRules && rulesModal) {
  closeRules.addEventListener("click", () => {
    rulesModal.classList.remove("active");
  });
}

if (rulesModal) {
  rulesModal.addEventListener("click", (e) => {
    if (e.target === rulesModal) {
      rulesModal.classList.remove("active");
    }
  });
}

// ===== CURSOR PERSONALIZADO =====
document.addEventListener("mousemove", (e) => {
  if (customCursor) {
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
    customCursor.classList.add("active");
  }
  
  if (cursorTrail) {
    cursorTrail.style.left = e.clientX + "px";
    cursorTrail.style.top = e.clientY + "px";
    cursorTrail.classList.add("active");
  }
});

// ===== BARRA DE PROGRESO =====
window.addEventListener("scroll", () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (scrollProgress) {
    scrollProgress.style.width = scrolled + "%";
  }
});

// ===== PARTÍCULAS CANVAS =====
const canvas = document.getElementById("particlesCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let particles = [];

if (canvas && ctx) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
      if (this.y > canvas.height) this.y = 0;
      if (this.y < 0) this.y = canvas.height;
    }

    draw() {
      ctx.fillStyle = `rgba(111, 255, 172, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100);
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  });
}

// ===== CONTADOR ANIMADO =====
function formatStatValue(element, value) {
  if (!element) return String(value);
  const needsPlus = element.id === "statDiscord" || element.id === "statTiktok";
  return needsPlus ? `+${value}` : `${value}`;
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = formatStatValue(element, target);
      clearInterval(timer);
    } else {
      element.textContent = formatStatValue(element, Math.floor(current));
    }
  }, 20);
}

// ===== OBSERVER PARA ANIMACIONES =====
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate");

      // Animar contadores dentro del bloque que entra en pantalla
      const counters = entry.target.querySelectorAll(".counter");
      counters.forEach((counterEl) => {
        if (counterEl.dataset.animated === "true") return;

        let target = communityStats.tiktok;
        if (counterEl.id === "statDiscord") target = communityStats.discord;
        if (counterEl.id === "statInstagram") target = communityStats.instagram;

        counterEl.dataset.animated = "true";
        animateCounter(counterEl, target);
      });
    }
  });
}, observerOptions);

// Observar elementos con animaciones
document.querySelectorAll("[data-aos]").forEach((el) => {
  observer.observe(el);
});

// Fallback: asegurar que nunca queden en 0 si no dispara el observer
if (statDiscord) statDiscord.textContent = formatStatValue(statDiscord, communityStats.discord);
if (statInstagram) statInstagram.textContent = formatStatValue(statInstagram, communityStats.instagram);
if (statTiktok) statTiktok.textContent = formatStatValue(statTiktok, communityStats.tiktok);

// ===== CONTADOR ONLINE (SIMULADO) =====
if (onlineCount) {
  const getRandomOnline = () => Math.floor(Math.random() * 31); // 0-30

  // Valor inicial disimulado
  onlineCount.textContent = getRandomOnline();

  setInterval(() => {
    const current = parseInt(onlineCount.textContent, 10) || 0;
    const variation = Math.floor(Math.random() * 7) - 3; // -3 a +3
    const next = Math.max(0, Math.min(30, current + variation));
    onlineCount.textContent = next;
  }, 4000);
}

// ===== SISTEMA DE IDIOMAS =====
function setLanguage(lang) {
  const selected = translations[lang] ? lang : "es";
  currentLang = selected;
  document.documentElement.lang = selected;

  const dict = translations[selected];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (key && dict[key]) {
      element.textContent = dict[key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === selected);
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang || "es");
  });
});

// ===== COPIAR IP MINECRAFT =====
function copyWithFallback(text) {
  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  tempInput.setAttribute("readonly", "");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  document.body.appendChild(tempInput);
  tempInput.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(tempInput);
  return ok;
}

if (copyIpBtn) {
  copyIpBtn.addEventListener("click", async () => {
    const dict = translations[currentLang];
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(minecraftIp);
      } else {
        const copied = copyWithFallback(minecraftIp);
        if (!copied) throw new Error("fallback-copy-failed");
      }

      copyIpBtn.textContent = dict.copiedOk;
      copyIpBtn.classList.add("copy-ok");
      setTimeout(() => {
        copyIpBtn.textContent = dict.copyIpButton;
        copyIpBtn.classList.remove("copy-ok");
      }, 1500);
    } catch {
      const copied = copyWithFallback(minecraftIp);
      copyIpBtn.textContent = copied ? dict.copiedOk : dict.copyFailed;
      if (copied) copyIpBtn.classList.add("copy-ok");
      setTimeout(() => {
        copyIpBtn.textContent = dict.copyIpButton;
        copyIpBtn.classList.remove("copy-ok");
      }, 1800);
    }
  });
}

// ===== KONAMI CODE EASTER EGG =====
document.addEventListener("keydown", (e) => {
  konamiCode.push(e.key);
  konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);

  if (konamiCode.join('').includes(konamiSequence.join(''))) {
    triggerEasterEgg();
    konamiCode = [];
  }
});

function triggerEasterEgg() {
  // Confetti effect
  const colors = ['#6fffac', '#00ffff', '#ff6fff', '#ffff00'];
  for (let i = 0; i < 100; i++) {
    createConfetti(colors[Math.floor(Math.random() * colors.length)]);
  }
  
  // Mensaje especial
  const message = document.createElement('div');
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(111, 255, 172, 0.95);
    color: #000;
    padding: 2rem 3rem;
    border-radius: 20px;
    font-size: 2rem;
    font-weight: 700;
    z-index: 99999;
    animation: scaleIn 0.5s ease;
    text-align: center;
    box-shadow: 0 10px 50px rgba(111, 255, 172, 0.5);
  `;
  message.textContent = '🎮 ¡CÓDIGO SECRETO ACTIVADO! 🎮';
  document.body.appendChild(message);
  
  setTimeout(() => {
    message.style.animation = 'fadeOut 0.5s ease forwards';
    setTimeout(() => message.remove(), 500);
  }, 3000);
}

function createConfetti(color) {
  const confetti = document.createElement('div');
  confetti.style.cssText = `
    position: fixed;
    width: 10px;
    height: 10px;
    background: ${color};
    left: ${Math.random() * 100}%;
    top: -10px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 99998;
    animation: fall ${Math.random() * 3 + 2}s linear forwards;
  `;
  document.body.appendChild(confetti);
  
  setTimeout(() => confetti.remove(), 5000);
}

// Agregar animación de caída
const style = document.createElement('style');
style.textContent = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== PARALLAX EFFECT =====
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.getElementById('hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// ===== INICIALIZAR =====
setLanguage("es");

console.log(`
%c
   ▄█    ▄     ▄▄▄▄▀ ▄█▄    █▀▄▀█ ██     ▄▄▄▄▀ ▄█ 
   ██     █ ▀▀▀ █    █▀ ▀▄  █ █ █ █ █ ▀▀▀ █    ██ 
   ██ ██   █    █    █   ▀  █ ▄ █ █▄▄█    █    ██ 
   ▐█ █ █  █   █     █▄  ▄▀ █   █ █  █   █     ▐█ 
   ▐  █  █ █  ▀      ▀███▀     █     █  ▀       ▐ 
      █   ██                  ▀     █             
                                   ▀              
%c
🎮 Bienvenido a JTCMATI - La mejor comunidad de Haxball
🚀 Sitio mejorado con efectos especiales
💡 Easter egg disponible: Prueba el código Konami
`, 
'color: #6fffac; font-weight: bold;',
'color: #00ffff; font-size: 14px;'
);
